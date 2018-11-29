const db = require('./models/budget');

module.exports = {
  findAll: (req, res) => {
    db.budget.findAll({}).then((results) => {
      res.json(results);
    });
  },
  findOne: (req, res) => {
    db.budget.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(res) {
        res.json(res);
      });
  },
  create: (req, res) => {
    db.budget.create({
      name: req.body.name,
      amount: req.body.amount
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  },
  update: (req, res) => {
    db.budget.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  },
  delete: (req, res) => {
    db.budget.destroy({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  },
};
