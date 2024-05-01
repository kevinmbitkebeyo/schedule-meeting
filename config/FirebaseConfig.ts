// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "schedule-meeting-36852.firebaseapp.com",
  projectId: "schedule-meeting-36852",
  storageBucket: "schedule-meeting-36852.appspot.com",
  messagingSenderId: "1099030465255",
  appId: "1:1099030465255:web:b16f88916322bc206b3042"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);