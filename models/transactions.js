module.exports = function(sequelize, DataTypes) {
  const Transaction = sequelize.define('Transaction', {
    description: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10, 2),
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    isReconciled: DataTypes.BOOLEAN,
    isPaid: DataTypes.BOOLEAN,
    isRecurring: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    imageUrl: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    hasReceipt: DataTypes.BOOLEAN
  });
  return Transaction;
};