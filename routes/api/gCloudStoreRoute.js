const router = require('express').Router();
const gCloudStoreController = require('../../controllers/gCloudStoreController');

router.post('/create', gCloudStoreController.post);

module.exports = router;