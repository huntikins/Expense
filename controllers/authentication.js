const User = require('../models/user');

exports = {
    findByUsername: (username, cb) => {
        for (i = 0; i < users.length; i++) {
            if (users[i].username = username) return cb(null, users[i]);
        }
        return cb(null, null);
    },
    createUser: (newUser, cb) => {
        if (!newUser.username || !newUser.password) return cb(false, "Missing username or password.");
        for (i = 0; i < users.length; i++) {
            if (users[i].username = username) return cb(false, "Username not available.");
        }
        users.push(newUser);
        return cb(true);
    }
}