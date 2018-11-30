module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING
    });
    return User;
};