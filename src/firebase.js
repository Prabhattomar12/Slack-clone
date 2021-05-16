import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDKMPZ0JhCwwW3Bww7539w1lR0HVYWV2R0",
  authDomain: "slack-clone-3b99a.firebaseapp.com",
  projectId: "slack-clone-3b99a",
  storageBucket: "slack-clone-3b99a.appspot.com",
  messagingSenderId: "194720577075",
  appId: "1:194720577075:web:f921f89e24d2244f185546"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;