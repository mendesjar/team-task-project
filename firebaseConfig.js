// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-DeHW2t1j0qRc7AmD3WXOtWh6IAaq8IE",
  authDomain: "team-task-69e25.firebaseapp.com",
  projectId: "team-task-69e25",
  storageBucket: "team-task-69e25.appspot.com",
  messagingSenderId: "292845961420",
  appId: "1:292845961420:web:c521f0301baca6b2aac269",
  measurementId: "G-XV7J7726PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics
// const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);