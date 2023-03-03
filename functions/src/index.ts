// @ts-nocheck
import {adminDb} from "./firebaseAdmin";

const functions = require("firebase-functions");
import * as admin from 'firebase-admin';

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const fetchResults: any = async (id) => {
  const api_key = process.env.BRIGHTDATA_API_KEY;

  const res = await fetch(`https://api.brightdata.com/dca/dataset?id=${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
  });

  const data = await res.json();
  console.log('DEBUG #1')

  if(data.status === "building" || data.status === "collecting") {
    console.log('NOT COMPLETE YET >>>>>, TRYING AGAIN', data.status);
    return fetchResults(id);
  }
  console.log('DEBUG #2');
  return data;
}

exports.onScraperComplete = functions.https.onRequest(async(request, response) => {
  console.log('SCRAPE COMPLETE >>>>>> :', request.body);

  const { success, id, finished } = request.body;

  if(!success) {
    await adminDb.collection('searches').doc(id).set({
      status: 'error',
      updatedAt: finished,
      // updatedAt: admin.firestore.Timestamp.now(),
    }, { merge: true });
  }

  const data = await fetchResults(id);

  await adminDb.collection('searches').doc(id).set({
    status: 'complete',
    // updatedAt: admin.firestore.Timestamp.now(),
    updatedAt: finished,
    results: data,
  }, { merge: true });

  console.log('<><><><><><> FULL CIRCLE <><><><><><><>');

  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Scraping function have finished!");
});


// https://acb0-88-135-27-201.ngrok.io/rookas-big-dataa/us-central1/onScraperComplete
