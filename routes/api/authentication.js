const router = require('express').Router(); // eslint-disable-line new-cap
const userController = require('../../controllers/authentication');

router.post('/', (req, res) => {
    userController.createUser(req.body, (success, message) => {
        let response = "New user was ";
        if (!success) response += "not ";
        response += "created.";
        if (message) response += "<br>" + message;
        res.send(response);
    });
});

module.exports = router;