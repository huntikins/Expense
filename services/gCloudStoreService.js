require('dotenv').config();
const keys = process.env;
const { Storage } = require('@google-cloud/storage');
const projectID = keys.project_id;
// const keyFile = require('../config/expense-6e43c-32be1cf6ddf6.json');
// const keyFile = require('/config/expense-6e43c-32be1cf6ddf6.json')

const gcs = new Storage({
    projectID: projectID,
    keyFileName: './config/expense-6e43c-32be1cf6ddf6.json',
    key: keys.key,
});

const bucket = gcs.bucket('expense-6e43c.appspot.com');

module.exports = bucket;


// const app = admin.initializeApp({
//     credential: admin.credential.cert({
//         type: keys.type,
//         project_id: keys.project_id,
//         private_key_id: keys.private_key_id,
//         private_key: keys.private_key,
//         client_email: keys.client_email,
//         client_id: keys.client_id,
//         auth_url: keys.auth_url,
//         token_url: keys.token_url,
//         auth_provider_x509_cert_url: keys.auth_provider_x509_cert_url,
//         client_x509_cert_url: keys.client_x509_cert_url,
//     }),
//     databaseURL: "https://expense-6e43c.firebaseio.com",
//     storageBucket: 'expense-6e43c.appspot.com',
// });

// const bucket = admin.storage().bucket();

// module.exports = app;