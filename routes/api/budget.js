const router = require('express').Router(); // eslint-disable-line new-cap
const budgetController = require('../../controllers/budget');
const transactionsController = require('../../controllers/transactions');
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

router.get('/category-totals',
    require('connect-ensure-login').ensureLoggedIn('/api/authentication/fail'),
    transactionsController.getCategoryTotals
);

module.exports = router;