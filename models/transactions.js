module.exports = function(sequelize, DataTypes) {
  const transactions_Id = sequelize.define('transactions_Id', {
    transactions_Id: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    payment_due_date: DataTypes.Date,
    payment_paid_date: DataTypes.Date,
    payment_amount: DataTypes.INTEGER,
    image_url: DataTypes.STRING
  });
  return transactions_Id;
};
