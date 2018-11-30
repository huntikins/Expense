const db = require('../models');

module.exports = {
    create: (req, res) => {
        if (!req.body.transactionId || !req.body.userId) return res.status(400);
        db.Transactions.findOne({
            where: {
                id: req.body.categoryId,
                descritpion: req.body.description,
                amount: req.body.amount,
                isPaid: req.body.isPaid,
                isRecurring: req.body.isRecurring,
                imageUrl: req.body.imageUrl
            }
        }).then(result => {
            if (result) {
                db.Category.update({
                    description: req.body.description,
                    amount: req.body.amount,
                    isPaid: req.body.isPaid,
                    isRecurring: req.body.isRecurring
                }, {
                    where: {
                        id: req.body.Id
                    }
                }).then(result => res.json(result));
            } else {
                db.Category.create({
                    transactionId: req.body.transactionId,
                    description: req.body.description,
                    amount: req.body.amount,
                    isPaid: req.body.isPaid,
                    isRecurring: req.body.isRecurring,
                    imageUrl: req.body.imageUrl
                }).then((result) => res.json(result));
            }
        });
    },

    findAll: (req, res) => {
        db.Catgeory.findAll({
            where: {
                id: req.user.id
            }
        }).then(results => res.json(results));
    },

    Update: (req, res) => {
        db.Transaction.update({
            description: req.body.description,
            amount: req.body.amount,
            isPaid: req.body.isPaid,
            isRecurring: req.body.isRecurring
        }, {
            where: {
                id: req.body.Id
            }
        }).then(result => res.json(result));
    }
}
