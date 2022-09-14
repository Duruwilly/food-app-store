import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "foodweb-app.firebaseapp.com",
  projectId: "foodweb-app",
  storageBucket: "foodweb-app.appspot.com",
  messagingSenderId: "667891555540",
  appId: process.env.REACT_APP_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();