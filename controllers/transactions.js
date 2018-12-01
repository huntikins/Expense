const db = require('../models');
const s3 = require('../services/awsService'); //AWS S3 Service

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
            } else {
                db.Transaction.create({
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

    update: (req, res) => {
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
    },

    createReceipt: (req, res) => {
        try {
            imageUrl = s3.upload(req.body.image);
            console.log(`public image url: ${imageUrl}`);
        }
        catch (err) {
            res.status(500).send(err.message);
        }

        db.Transaction.create({
            description: req.body.description,
            imageUrl: imageUrl,
        }).then(result => res.json(result));
    }
}
