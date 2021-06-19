import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAJhLE8PhMJ-CMabuyYzarNuiaVW8ZwXlA",
  authDomain: "whatsapp-clone-385aa.firebaseapp.com",
  projectId: "whatsapp-clone-385aa",
  storageBucket: "whatsapp-clone-385aa.appspot.com",
  messagingSenderId: "144836037053",
  appId: "1:144836037053:web:dfe85f6f0b2d9b8e3a2ad4",
  measurementId: "G-66T43CY9EV"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref('images');
const audioStorage = firebase.storage().ref('audios');
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp
}

