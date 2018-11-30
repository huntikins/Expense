const router = require('express').Router(); // eslint-disable-line new-cap
const noteRoutes = require('./examples');
const authRoutes = require('./authentication');
const awsRoutes = require('./awsRoute');

router.use('/examples', noteRoutes);
router.use('/authentication', authRoutes);
router.use('/aws', awsRoutes);

module.exports = router;
