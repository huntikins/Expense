const db = require('../models');

module.exports = {
  create: (item, cb) => {
    db.Budget.create(item).then((result) => {
      cb(result);
    });
  }
};