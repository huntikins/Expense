module.exports = function(sequelize, DataTypes) {
    const budget = sequelize.define('budget', {
      budgetId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      limit: DataTypes.INTEGER,
      current: DataTypes.INTEGER
    });
    return budget;
  };