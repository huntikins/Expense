const db = require('../models');

module.exports = {
  create: (req, res) => {
    if (!req.body.categoryId || !req.body.amount) return res.status(400);
    db.Category.findOne(
      {
        where: {
          id: req.body.categoryId,
          name: req.body.name
        }
      }).then(result => {
        if (result) {
          db.Category.update(
            { amount: req.body.amount },
            { where: {
                categoryId: req.body.categoryId
              }
            }
          ).then(result => res.json(result));
        }
        else {
          db.Category.create({
            categoryId: req.body.categoryId,
            name: req.body.name,
          }).then((result) => res.json(result));
        }
      });
  },
  findAll: (req, res) => {
    db.Catgeory.findAll(
      {
        where: {
          id: req.user.id
        }
      }).then(results => res.json(results));
  }
};