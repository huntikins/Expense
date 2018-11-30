const s3 = require('../services/awsService');

module.exports = {
    post: (req, res) => {
        try {
            imageUri = s3.upload(req.body.image);
            console.log(imageUri);
            // res.send(imageUri);
        }
        catch (err) {
            res.status(500).send(err.message)
        }

        // db save
        // .then(()=> res.send())
        // move this to transaction controller

    }
};