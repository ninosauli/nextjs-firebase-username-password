import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB2_Ku26XY6Z0G4expsGdyCodsBq3esMQ",
  authDomain: "auth-email-d99f3.firebaseapp.com",
  projectId: "auth-email-d99f3",
  storageBucket: "auth-email-d99f3.appspot.com",
  messagingSenderId: "341485430822",
  appId: "1:341485430822:web:2aad5cc8200bc80baa5ee7"
};




// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }