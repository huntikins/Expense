const router = require('express').Router(); // eslint-disable-line new-cap
const noteRoutes = require('./examples');
router.use('/examples', noteRoutes);

module.exports = router;
