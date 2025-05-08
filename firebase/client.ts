import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9OAyhJCO31N_DXmi0KMr40E7abQZKa_0",
  authDomain: "prepwise-d5658.firebaseapp.com",
  projectId: "prepwise-d5658",
  storageBucket: "prepwise-d5658.firebasestorage.app",
  messagingSenderId: "379000571602",
  appId: "1:379000571602:web:db2a10b968bdba5a0e4f0b",
  measurementId: "G-E6ESRQHLKX",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
