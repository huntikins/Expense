module.exports = function(sequelize, DataTypes) {
    const budget = sequelize.define('budget', {
      budgetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      budget_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      budget_amount: {
        type: DataTypes.INTEGER,
      }
    });
    return budget;
  };