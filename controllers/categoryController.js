const db = require('../models/category');

module.exports = {
  findAll: (req, res) => {
    db.category.findAll({}).then((results) => {
      res.json(results);
    });
  },
  findOne: (req, res) => {
    db.category.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(res) {
        res.json(res);
      });
  },
  create: (req, res) => {
    db.category.create({
      name: req.body.name,
    })
      .then(function(res) {
        res.json(res);
      });
  },
  update: (req, res) => {
    db.category.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(res) {
        res.json(res);
      });
  },
  delete: (req, res) => {
    db.category.destroy({ where: { id: req.params.id } }).then((results) => {
      res.json(results);
    });
  },
};
