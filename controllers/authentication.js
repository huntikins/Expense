let User = require('../models/user');

exports.findByUsername = function(username, cb) {
    for (i = 0; i < User.length; i++) {
        if (User[i].username = username) return cb(null, User[i]);
    }
    return cb(null, null);
}

exports.createUser = function(newUser, cb) {
    if (!newUser.username || !newUser.password) return cb(false, "Missing username or password.");
    for (i = 0; i < User.length; i++) {
        if (User[i].username = username) return cb(false, "Username not available.");
    }
    User.push(newUser);
    return cb(true);
}