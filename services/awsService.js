require('dotenv').config();
const keys = process.env;
const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: keys.Secret_Access_Key,
    accessKeyId: keys.Access_Key_ID,
    region: 'us-east-2'
});

const s3Bucket = new aws.S3({ params: { Bucket: keys.S3_Bucket } });

module.exports = {
    upload: (body, cb) => {
        buf = new Buffer(body.image.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        let time = Date.now().toString();
        var data = {
            Key: `receipt-snap-${time}`,
            Body: buf,
            ContentEncoding: 'base64',
            ContentType: 'image/png'
        };

        s3Bucket.upload(data, function (err, data) {
            if (err) {
                console.log('Error uploading data: ', data);
                throw new Error(err);
            } else {
                console.log(data.Location);
                cb(body, data.Location);
                // return data.Location;
            }
        });
    }
};