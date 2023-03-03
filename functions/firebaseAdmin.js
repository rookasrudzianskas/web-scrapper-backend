const admin = require('firebase-admin');
const getApps = require("firebase-admin/app" );
const serviceAccount = require('./serviceAccountKey.json');

if(!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

const adminDb = admin.firestore();

module.exports = adminDb;
