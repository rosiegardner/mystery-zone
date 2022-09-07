import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const imgStorage = getStorage(app);

export { db, imgStorage };


// import * as firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';


//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   const projectStorage = firebase.storage();
//   const projectFirestore = firebase.firestore();
//   const timestamp = firebase.firestore.FieldValue.serverTimestamp;

//   export { projectStorage, projectFirestore, timestamp }