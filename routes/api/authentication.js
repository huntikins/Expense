const router = require('express').Router(); // eslint-disable-line new-cap
const userController = require('../../controllers/authentication');
require('../../config/server');
require('../../controllers/passport');

router.post('/signup', (req, res) => {
    userController.createUser(req.body, (success, message) => {
        let response = "New user was ";
        response = success ? "Success! " + response : response + "not ";
        response += "created. ";
        if (message) response += message;
        res.send(response);
    });
});

router.post('/login',
    require('../../config/server').passport.authenticate('local', { failureRedirect: '/api/authentication/fail', failureFlash: true }),
    function(req, res) {
        res.send(true);
    }
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