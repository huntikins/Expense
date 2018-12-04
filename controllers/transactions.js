const db = require('../models');
const s3 = require('../services/awsService'); //AWS S3 Service
const moment = require('moment');

function parseDateString(dateString) {
    const dateStringArray = dateString.split('.');
    const transDay = dateStringArray[0];
    const transMonth = dateStringArray[1];
    const transMonthIndex = parseInt(transMonth) - 1;
    const transYear = dateStringArray[2];

    const transDate = new Date(transYear, transMonthIndex, transDay);
    return transDate;
}

module.exports = {
    create: (req, res) => {
        const newTrans = {
            userId: req.user.id,
            description: req.body.description || null,
            amount: req.body.amount || null,
            categoryId: req.body.categoryId || null,
            date: req.body.date || null,
            isReconciled: req.body.isReconciled || null,
            isPaid: req.body.isPaid || null,
            isRecurring: req.body.isRecurring || null,
            imageUrl: req.body.imageUrl || null,
            dueDate: req.body.dueDate || null,
            hasReceipt: req.body.hasReceipt || null
        }
        db.Transaction.create(newTrans).then(result1 => 
            {
                // Creates a new upcoming transaction if the transaction is recurring and the date has passed.
                if (req.body.isRecurring) {
                    const transDate = parseDateString(req.body.date);
                    console.log(transDate)
                    const rightNow = new Date();
                    // If date has not yet occurred, no further action is necessary
                    if (transDate.getTime() > rightNow.getTime()) return res.json (result1);
                    function findNextTransactionDate(transDate, currentDate) {
                        // console.log(transDate)
                        // console.log(currentDate)
                        let nextDate = transDate;
                        if (transDate.getTime() < currentDate.getTime()) {
                            nextDate.setMonth(transDate.getMonth() + 1);
                            // Make sure a month wasn't skipped (e.g. Jan 31 -> March 3)
                            if (nextDate.getMonth() - transDate.getMonth() > 1) nextDate.setDate(0);
                            return findNextTransactionDate(nextDate, currentDate);
                        }
                        return nextDate;
                    }
                    const nextTransDate = findNextTransactionDate(transDate, rightNow);
                    console.log(nextTransDate);
                    const nextTransDateString = nextTransDate.getDate() + "." + (nextTransDate.getMonth() + 1) + "." + (nextTransDate.getYear() + 1900);
                    console.log(nextTransDateString)
                    const nextTrans = newTrans;
                    nextTrans.date = nextTransDateString;
                    nextTrans.isPaid = false;
                    db.Transaction.create(newTrans).then(result2 => {
                        res.json({
                            current: result1,
                            upcoming: result2
                        })
                    });
                }
                else res.json(result1);
            });
    },

    findAll: (req, res) => {
        db.Transaction.findAll({
            where: {
                userId: req.user.id
            },
            raw: true
        }).then(results => {
            results.forEach(trans => {
                if (trans.date) { 
                    trans.parsedDate = parseDateString(trans.date);
                    console.log(trans.id + "-------------------------------")
                    console.log(trans.parsedDate.getTime())
                    console.log(new Date().getTime());
                    console.log(trans.parsedDate.getTime() < new Date().getTime())
                    trans.hasHappened = trans.parsedDate.getTime() < new Date().getTime();
                }
            });
            res.json(results)
        });
    },

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
                    const transMonth = transaction.date.slice(3, 5);
                    const transYear = transaction.date.slice(8);
                    const thisMonth = ((new Date().getMonth()) + 1).toString();
                    const thisYear = (new Date().getYear()).toString().slice(1);
                    // console.log(transYear === thisYear && transYear === thisYear)
                    if (transYear === thisYear && transMonth === thisMonth && transaction.categoryId) {
                        categoryTotals[transaction.categoryId - 1] += parseFloat(transaction.amount);
                    }
                }
            });
            res.json(categoryTotals);
        });
    },

    update: (req, res) => {
        if (!req.body.id) return res.status(400);
        const updatedTrans = { }
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
                id: req.body.id
            }
        }).then(result => res.json(result));
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
                date: moment().format('D.M.YYYY'),
            }).then(result => {
                console.log("post result: " + result);
                res.json(result)
            });
        }
    }
};