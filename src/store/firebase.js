import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_BROWSER_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export function db() {
  const fireDb = firebase.firestore();
  return fireDb;
}

export function analytics() {
  return firebase.analytics();
}

export function auth() {
  return firebase.auth();
}
export function auth2() {
  return firebase.auth;
}

export function storage() {
  return firebase.storage();
}
