const router = require('express').Router(); // eslint-disable-line new-cap
const userController = require('../../controllers/authentication');
const { passport } = require('../../config/server');
require('../../controllers/passport');

router.post('/signup', (req, res) => {
    userController.createUser(req.body, (success, message) => {
        let response = { message: "New user was ", success };
        response.message = success ? "Success! " + response.message : response.message + "not ";
        response.message += "created. ";
        if (message) response.message += message;
        res.send(response);
    });
});

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/api/authentication/fail', failureFlash: true }),
    function(req, res) {
        console.log(req)
        res.send({ success: true, message: 'Successful authentication.' });
    }
);

router.post(
    '/guest-login',
    (req, res, next) => {
        console.log('\n---------------------------------\n')
        req.body = {
            email: 'nobody@fakemail.org',
            password: process.env.GUEST_PASSWORD
        };
        next();
    },
    passport.authenticate('local', { failureRedirect: '/api/auth/fail', failureFlash: true }),
    (req, res) => res.json({ success: true, message: 'Successful authentication.' })
);

router.get('/fail', (req, res) => {
    const errorFlash = req.flash();
    if (errorFlash.error) return res.send(errorFlash.error[0]);
    res.status(401);
    res.send({ success: false, message: 'You are NOT authenticated' });
});

router.get('/test-login',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    function(req, res) {
        console.log(req.user);
        res.send({ success: true, message: 'You are authenticated' });
    }
);

router.get('/user',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    function(req, res) {
        const user = req.user;
        // Remove password before sending user info
        const cleanedUser = {
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        }
        res.send(cleanedUser);
    }
);

router.post('/logout',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    function(req, res){
        req.logout();
        res.send(true);
});

module.exports = router;