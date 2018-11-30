const router = require('express').Router(); // eslint-disable-line new-cap
const categoryController = require('../../controllers/category');
require('../../config/server');
require('../../controllers/passport');

router.post('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    categoryController.create
);

router.get('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    categoryController.findAll
);

router.put('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    categoryController.create
);

module.exports = router;