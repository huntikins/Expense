const db = require('../models');

module.exports = {
  create: (req, res) => {
    if (!req.body.categoryId || !req.body.amount) return res.status(400);
    db.Budget.findOne(
      {
        where: {
          userId: req.user.id,
          id: req.body.categoryId
        }
      }).then(result => {
        if (result) {
          db.Budget.update(
            { amount: req.body.amount },
            { where: {
                categoryId: req.body.categoryId,
                userId: req.user.id
              }
            }
          ).then(result => res.json(result));
        }
        else {
          db.Budget.create({
            categoryId: req.body.categoryId,
            amount: req.body.amount,
            userId: req.user.id
          }).then((result) => res.json(result));
        }
      });
  },
  findAll: (req, res) => {
    db.Budget.findAll(
      {
        where: {
          userId: req.user.id
        }
      }).then(results => res.json(results));
  }
};