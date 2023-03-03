import * as admin from 'firebase-admin';
const serviceAccount = require('../serviceAccountKey.json');
// @ts-ignore
import { getApps } from 'firebase-admin/app';

if(!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
