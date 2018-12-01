const router = require('express').Router(); // eslint-disable-line new-cap
const transactionsController = require('../../controllers/transactions');
require('../../config/server');
require('../../controllers/passport');

router.post('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    transactionsController.create
);

router.get('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    transactionsController.findAll
);

router.put('/',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    transactionsController.update
);

router.post('/newReceipt',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    transactionsController.createReceipt
);

module.exports = router;