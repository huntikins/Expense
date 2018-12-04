const db = require('../models');
const s3 = require('../services/awsService'); //AWS S3 Service
const Moment = require('moment')

module.exports = {
    create: (req, res) => {
        // if (req.body.date) {
        //     const inDate = req.body.date;
        //     let outDate = inDate.slice(6, 10);
        //     outDate += "-" + inDate.slice(3, 5);
        //     outDate =+ "-" + inDate.slice(0, 2);
        //     req.body.date = outDate;
        // }
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
        db.Transaction.create(newTrans).then(result => res.json(result));
    },

    findAll: (req, res) => {
        db.Transaction.findAll({
            where: {
                userId: req.user.id
            }
        }).then(results => res.json(results));
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
                        console.log('aewfjiowpaejfopj')
                    }
                }
            });
            res.json(categoryTotals);
        });
    },

    update: (req, res) => {
        if (!req.body.id) return res.status(400);
        const updatedTrans = {
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
        db.Transaction.update(updatedTrans, {
            where: {
                id: req.body.Id
            }
        })
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
                description: body.description,
                imageUrl: image,
                hasReceipt: true,
            }).then(result => {
                console.log("post result: " + result);
                res.json(result)
            });
        }

    }
};