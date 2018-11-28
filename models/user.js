// let users = [{
//     username: "dave",
//     password: "p"
// }];

// module.exports = users;

module.exports = function(sequelize, DataTypes) {
    const Example = sequelize.define('user', {
      text: DataTypes.STRING,
      description: DataTypes.TEXT,
    });
    return Example;
  };
  