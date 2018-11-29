const router = require('express').Router(); // eslint-disable-line new-cap
const noteRoutes = require('./examples');
const authRoutes = require('./authentication');
const gCloudStoreRoutes = require('./gCloudStoreRoute');

router.use('/examples', noteRoutes);
router.use('/authentication', authRoutes);
router.use('/gCloudStore', gCloudStoreRoutes);

module.exports = router;
