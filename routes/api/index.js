const router = require('express').Router(); // eslint-disable-line new-cap
const noteRoutes = require('./examples');
const authRoutes = require('./authentication');
router.use('/examples', noteRoutes);
router.use('/authentication', authRoutes);

module.exports = router;
