module.exports = function(sequelize, DataTypes) {
  const Transactions = sequelize.define('Transactions', {
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
  return Transactions;
};