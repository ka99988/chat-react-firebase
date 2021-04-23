import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env. REACT_APP_MEASUREMENT_ID
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const db = firebaseApp.firestore();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();

export default auth;