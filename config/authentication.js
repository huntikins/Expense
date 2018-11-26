const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');
// const cookieParser = require('cookie-parser');

const User = require('../controllers/authentication');

//=====================================================
// Configure Passport
exports.configurePassport = function(passport) {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.findByUsername(username, function (err, user) {
                console.log(err + "---" + user);
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (user.password !== password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));
    
    // Functions used by Passport to serialize user ID and store in session.
    passport.serializeUser(function (user, done) {
        console.log('serializing user...')
        done(null, user.username);
    });
    
    passport.deserializeUser(function (username, done) {
        User.findByUsername(username, function (err, user) {
            console.log('serializing user...')    
            done(err, user);
        });
    });
}

exports.configureMiddleware = function(app) {
    // app.use(cookieParser("cats"));
    app.use(require('morgan')('combined'));
    app.use(flash());
    app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(passport.initialize());
    app.use(passport.session());
}