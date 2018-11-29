const router = require('express').Router(); // eslint-disable-line new-cap
const expenseRoutes = require('./expense');
const authRoutes = require('./authentication');
router.use('/expense', expenseRoutes);
router.use('/authentication', authRoutes);

module.exports = router;
