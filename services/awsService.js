require('dotenv').config();
const keys = process.env;

const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: keys.Secret_Access_Key,
    accessKeyId: keys.Access_Key_ID,
    region: 'us-east-2'
});

const s3Bucket = new aws.S3({ params: { Bucket: keys.S3_Bucket } });

module.exports = s3Bucket;