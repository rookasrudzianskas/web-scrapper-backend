import {adminDb} from "./firebaseAdmin";

const functions = require("firebase-functions");
import * as admin from 'firebase-admin';

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const fetchResults = async (id) => {
  const api_key = 'AIzaSyB0XZ0Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4';
}

exports.onScraperComplete = functions.https.onRequest(async(request, response) => {
  console.log('SCRAPE COMPLETE >>>>>> :', request.body);

  const { success, id } = request.body;

  if(!success) {
    await adminDb.collection('searches').doc(id).set({
      status: 'error',
      updatedAt: admin.firestore.Timestamp.now(),
    }, { merge: true });
  }

  const data = await fetchResults(id);

  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


// https://19fb-88-135-27-201.ngrok.io/rookas-big-dataa/us-central1/onScraperComplete
