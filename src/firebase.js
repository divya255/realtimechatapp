// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Sq8h68LZmSo40poi_mQohEpNEycyX2M",
  authDomain: "msg-app-78124.firebaseapp.com",
  projectId: "msg-app-78124",
  storageBucket: "msg-app-78124.appspot.com",
  messagingSenderId: "79808196968",
  appId: "1:79808196968:web:5455589201de0739da26dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)