const router = require('express').Router(); // eslint-disable-line new-cap
const noteRoutes = require('./examples');
const authRoutes = require('./authentication');

const budgetRoutes = require('./budget');
const categoryRoutes = require('./category');
const transRoutes = require('./transactions');

router.use('/examples', noteRoutes);
router.use('/authentication', authRoutes);
router.use('/budget', budgetRoutes);
router.use('/category', categoryRoutes)
router.use('/transactions', transRoutes);

module.exports = router;
