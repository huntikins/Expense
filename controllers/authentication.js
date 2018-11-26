const users = require('../models/user');

module.exports = {
    findByUsername: (username, cb) => {
        for (i = 0; i < users.length; i++) {
            if (users[i].username === username) return cb(null, users[i]);
        }
        return cb(null, null);
    },
    createUser: (newUser, cb) => {
        if (!newUser.username || !newUser.password) return cb(false, "Missing username or password.");
        console.log(newUser.username);
        for (i = 0; i < users.length; i++) {
            if (users[i].username === newUser.username) return cb(false, "That username is not available.");
        }
        users.push(newUser);
        return cb(true);
    }
}