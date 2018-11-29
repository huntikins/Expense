module.exports = function(sequelize, DataTypes) {
  const transactions_Id = sequelize.define('transactions_Id', {
    transactions_Id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    payment_due_date: {
      type: DataTypes.Date,
    },
    payment_paid_date: {
      type: DataTypes.Date,
    },
    payment_amount: {
      type: DataTypes.INTEGER,
    },
    payment_paid: {
      type: DataTypes.Boolean,
      default: false
    },
    recurring: {
      type: DataTypes.Boolean,
      default: false
    },
    image_url: {
      type: DataTypes.STRING
    }
  });
  return transactions_Id;
};
