// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAazlpCJ-ab-ugAjtXMBLcTltgRfVU3350",
  authDomain: "hireflow-81e99.firebaseapp.com",
  projectId: "hireflow-81e99",
  storageBucket: "hireflow-81e99.firebasestorage.app",
  messagingSenderId: "41893772942",
  appId: "1:41893772942:web:228caa345dd52a673093df",
  measurementId: "G-9E96HVYP76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);