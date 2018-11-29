module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define('users', {
      usersId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      users_fname: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      },
      users_lname: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      }
    });
    return users;
  };