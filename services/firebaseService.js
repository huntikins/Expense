const admin = require("firebase-admin");

const key = process.env;

admin.initializeApp({
    credential: admin.credential.cert({
        type: key.type,
        project_id: key.project_id,
        private_key_id: key.private_key_id,
        private_key: key.private_key,
        client_email: key.client_email,
        client_id: key.client_id,
        auth_url: key.auth_url,
        token_url: key.token_url,
        auth_provider_x509_cert_url: key.auth_provider_x509_cert_url,
        client_x509_cert_url: key.client_x509_cert_url,
    }),
    databaseURL: "https://expense-6e43c.firebaseio.com"
});