const bucket = require('../services/awsService');

module.exports = {
    post: (req, res) => {
        buf = new Buffer(req.body.image.replace(/^data:image\/\w+;base64,/, ""), 'base64')
        var data = {
            Key: 'key1234w1',
            Body: buf,
            ContentEncoding: 'base64',
            ContentType: 'image/png'
        };
        
        // bucket.putObject(data, function (err, data) {
        bucket.upload(data, function (err, data) {
            if (err) {
                console.log(err);
                console.log('Error uploading data: ', data);
                return res.status(500).send(err.message);
            } else {
                console.log(data);
                console.log('succesfully uploaded the image!');
                console.log(data.Location);
                return res.send(200);
            }
        });
    }
};