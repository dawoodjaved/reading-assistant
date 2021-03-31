import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtBoMEQgxPK6SjFf560OwNHO21lpK8e-8",
  authDomain: "readingassistant-249a3.firebaseapp.com",
  projectId: "readingassistant-249a3",
  storageBucket: "readingassistant-249a3.appspot.com",
  messagingSenderId: "521613038093",
  appId: "1:521613038093:web:181cc0bdc11a63fd737b44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;