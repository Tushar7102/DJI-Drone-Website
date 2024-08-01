// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEHhov_31Hx1tK1F1xU2M0xhKbXisIbU8",
  authDomain: "dji-drone-37d9d.firebaseapp.com",
  projectId: "dji-drone-37d9d",
  storageBucket: "dji-drone-37d9d.appspot.com",
  messagingSenderId: "631770107077",
  appId: "1:631770107077:web:10be83c3cddbfc4db374ac",
  measurementId: "G-8EDNMR3TSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);