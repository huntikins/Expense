const router = require('express').Router(); // eslint-disable-line new-cap
const noteRoutes = require('./examples');
const authRoutes = require('./authentication');
const budgetRoutes = require('./budget');
router.use('/examples', noteRoutes);
router.use('/authentication', authRoutes);
router.use('/budget', budgetRoutes);

module.exports = router;
