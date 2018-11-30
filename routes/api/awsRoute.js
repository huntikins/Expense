const router = require('express').Router();
const awsController = require('../../controllers/awsController');

router.post('/image', awsController.post);
// router.get('/image/:id', awsController.get);

const upload = require('../../services/awsService');

module.exports = router;    