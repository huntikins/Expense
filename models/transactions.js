module.exports = function(sequelize, DataTypes) {
  const transactions_Id = sequelize.define('Transactions', {
    description: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10, 2),
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    isReconciled: DataTypes.BOOLEAN,
    isPaid: DataTypes.BOOLEAN,
    isRecurring: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    imageUrl: DataTypes.STRING,
    dueDate: DataTypes.DATE
  });
  return transactions_Id;
};