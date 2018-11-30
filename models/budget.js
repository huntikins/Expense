module.exports = function(sequelize, DataTypes) {
    const Budget = sequelize.define('Budget', {
        categoryId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        amount: DataTypes.DECIMAL(10,2)
    });
    return Budget;
};