const User = require('../models').User;

module.exports = {
    findByEmail: (email, cb) => {
        User.findOne({
            where: {
                email
            }
        }).then(function(result) {
            if (result) return cb(null, {
                id: result.dataValues.id,
                email: result.dataValues.email,
                password: result.dataValues.password,
                firstname: result.dataValues.firstname,
                lastname: result.dataValues.lastname
            });
            cb(null, null);
        });
    },
    createUser: function(newUser, cb) {
        if (!newUser.email || !newUser.password) return cb(false, "Missing email or password.");
        console.log(newUser.email);
        this.findByEmail(newUser.email, (err, result) => {
            if (result) return cb(false, "Sorry, that email is not available.")
            User.create({
                email: newUser.email,
                password: newUser.password,
                firstname: newUser.firstname,
                lastname: newUser.lastname
            }).then(result => {
                console.log(result.dataValues.id);
                newUser.id = result.dataValues.id;
                cb(true);
            });
        });
    },
    findById: (id, cb) => {
        User.findOne({
            where: {
                id
            }
        }).then(function(result) {
            if (result) return cb({
                id: result.dataValues.id,
                email: result.dataValues.email,
                password: result.dataValues.password,
                firstname: result.dataValues.firstname,
                lastname: result.dataValues.lastname
            })
        });
    }
}