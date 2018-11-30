module.exports = function (sequelize, DataTypes) {
  const transactions_Id = sequelize.define('transactions_Id', {
    categoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    // payment_due_date: DataTypes.Date,
    // payment_paid_date: DataTypes.Date,
    amount: DataTypes.INTEGER,
    isPaid: DataTypes.BOOLEAN,
    isRecurring: DataTypes.BOOLEAN,
    imageUrl: DataTypes.STRING
  });
  return transactions_Id;
};