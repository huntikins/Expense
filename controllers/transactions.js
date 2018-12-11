const db = require('../models');
const s3 = require('../services/awsService'); //AWS S3 Service
const moment = require('moment');

function createUpcomingTransactionAndSendResponse(transDate, currentDate, transaction, res, result1) {
    const nextTransDate = findNextTransactionDate(transDate, currentDate);
    const nextTransDateString = moment(nextTransDate).format("MM-DD-YYYY");
    transaction.date = nextTransDateString;
    transaction.isPaid = false;
    db.Transaction.create(transaction).then(result2 => {
        if (result1) {
            res.json({
                current: result1,
                upcoming: result2
            });
        }
        else res.json(result2);
    });
}

// Gets next transaction date for monthly recurring transactions
function findNextTransactionDate(transDate, currentDate) {
    const nextDate = new Date(moment(transDate).add(1, 'months'));
    if (nextDate.getTime() < currentDate.getTime()) {
        return findNextTransactionDate(nextDate, currentDate);
    }
    return nextDate;
}

// Used to mark current transactions for use by front end logic determining which transactions to display in 'Upcoming Bills'
function isCurrent(transDate) {
    const transMoment = moment(new Date(transDate));
    const currentMoment = moment();
    // Check that date is not more than a month in the future
    if (transMoment.diff(currentMoment.add(1, 'months')) > 0) return false;
    // Check that date is not in past month unless less than 2 weeks have passed
    if (transMoment.diff(currentMoment.startOf('month')) < 0 && transMoment.diff(currentMoment.subtract(2, 'weeks')) < 0) return false;
    return true;
}

module.exports = {
    create: (req, res) => {
        let transDateStringWithSlashes;
        if (req.body.date){
            const transDateArray = req.body.date.split(".");
            transDateStringWithSlashes = `${transDateArray[1]}-${transDateArray[0]}-${transDateArray[2]}`
        }
        const newTrans = {
            userId: req.user.id,
            description: req.body.description || null,
            amount: req.body.amount || null,
            categoryId: req.body.categoryId || null,
            date: transDateStringWithSlashes || null,
            isReconciled: req.body.isReconciled || null,
            isPaid: req.body.isPaid || null,
            isRecurring: req.body.isRecurring || null,
            imageUrl: req.body.imageUrl || null,
            dueDate: req.body.dueDate || null,
            hasReceipt: req.body.hasReceipt || null
        }
        db.Transaction.create(newTrans).then(result1 => 
            {
                // Check to see if an upcoming transaction needs to be created (for recurring transactions)
                if (!newTrans.isRecurring || !newTrans.date) return res.json(result1);
                if (!newTrans.isPaid && isCurrent(newTrans.date)) return res.json(result1);
                createUpcomingTransactionAndSendResponse(new Date(newTrans.date), new Date(), newTrans, res, result1);
            }
        );
    },

    findAll: (req, res) => {
        db.Transaction.findAll({
            where: {
                userId: req.user.id
            },
            raw: true
        }).then(results => {
            results.forEach(trans => {
                // mark current transactions for use by front end logic determining which transactions to display in 'Upcoming Bills'
                if (trans.date) trans.isCurrent = isCurrent(trans.date);
            });
            res.json(results);
        });
    },

    // Finds total spent on each transaction category this month.
    getCategoryTotals: (req, res) => {
        let categoryTotals = [];
        for (i = 0; i < 14; i++) categoryTotals.push(0);
        db.Transaction.findAll({
            where: {
                userId: req.user.id
            }
        }).then(results => {
            results.forEach(transaction => {
                if (transaction.date) {
                    const transDate = new Date(transaction.date);
                    const currentDate = new Date();
                    if (transDate.getYear() === currentDate.getYear() && transDate.getMonth() === currentDate.getMonth() && transaction.categoryId) {
                        categoryTotals[transaction.categoryId - 1] += parseFloat(transaction.amount);
                    }
                }
            });
            res.json(categoryTotals);
        });
    },

    update: (req, res) => {
        if (!req.body.id) return res.status(400);
        const updatedTrans = {};
        if (req.body.description) updatedTrans.descripion = req.body.description;
        if (req.body.amount) updatedTrans.amount = req.body.amount;
        if (req.body.categoryId) updatedTrans.categoryId = req.body.categoryId;
        if (req.body.date) updatedTrans.date = req.body.date;
        if (req.body.isReconciled) updatedTrans.isReconciled = req.body.isReconciled;
        if (req.body.isPaid) updatedTrans.isPaid = req.body.isPaid;
        if (req.body.isRecurring) updatedTrans.isRecurring = req.body.isRecurring;
        if (req.body.imageUrl) updatedTrans.imageUrl = req.body.imageUrl;
        if (req.body.dueDate) updatedTrans.dueDate = req.body.dueDate;
        if (req.body.hasReceipt) updatedTrans.hasReceipt = req.body.hasReceipt;
        db.Transaction.update(updatedTrans, {
            where: {
                id: req.body.id,
                userId: req.user.id
            }
        }).then(result => res.json(result));
    },

    markPaid: (req, res) => {
        if (!req.body.id) return res.status(400);
        const transId = req.body.id;
        db.Transaction.findOne({
            where: {
                id: transId,
                userId: req.user.id
            },
            raw: true
        }).then(transaction => {
            if (transaction.isPaid) return res.send("Transaction was already paid. No action taken.");
            db.Transaction.update(
                { isPaid: true },
                {
                    where: { id: transId }
                }
            ).then(result => {
                if (!transaction.isRecurring || !transaction.date) return res.json(result);
                const transDate = new Date(transaction.date);
                const rightNow = new Date();
                delete transaction.id;
                createUpcomingTransactionAndSendResponse(transDate, rightNow, transaction, res);
            });
        });
    },

    createReceipt: (req, res) => {
        try {
            imageUrl = s3.upload(req.body, dbPost);
        }
        catch (err) {
            res.status(500).send(err.message);
        }

        function dbPost(body, image) {
            db.Transaction.create({
                userId: req.user.id,
                description: body.description,
                imageUrl: image,
                hasReceipt: true,
                isReconciled: false,
                isPaid: false,
                isRecurring: false,
                amount: body.amount || null,
                categoryId: body.categoryId || null,
                date: moment().format('MM-DD-YYYY'),
            }).then(result => {
                console.log("post result: " + result);
                res.json(result);
            });
        }
    }
};