const router = require('express').Router(); // eslint-disable-line new-cap
const budgetController = require('../../controllers/budget');
require('../../config/server');
require('../../controllers/passport');

router.post('/', (req, res) => {
    require('../../config/server').passport.authenticate('local', { failureRedirect: '/api/authentication/fail', failureFlash: true }),
    function(req, res) {
        if (!req.body.categoryId || !req.body.amount) return res.status(400);
        budgetController.create({
            categoryId: req.body.categoryId,
            amount: req.body.amount,
            userId: req.user.id
        },
        result => {
            console.log(result);
            res.send(result);
        });
    }
});

module.exports = router;