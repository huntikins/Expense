module.exports = function(sequelize, DataTypes) {
  const transactions_Id = sequelize.define('transactions_Id', {G,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    // payment_due_date: DataTypes.Date,
    // payment_paid_date: DataTypes.Date,
    amount: DataTypes.INTEGER,
    isPaid: DataTypes.Boolean,
    isRecurring: DataTypes.Boolean,
    imageUrl: DataTypes.STRING
  });
  return transactions_Id;
};