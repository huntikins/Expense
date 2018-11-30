const router = require('express').Router(); // eslint-disable-line new-cap
const budgetController = require('../../controllers/budget');
require('../../config/server');
require('../../controllers/passport');

router.post('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    budgetController.create
);

router.get('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    budgetController.findAll
);

router.put('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    budgetController.create
);

module.exports = router;