import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrygQOrktAClKRefL3u1H0aPklHU8hci8",
  authDomain: "foodweb-app.firebaseapp.com",
  projectId: "foodweb-app",
  storageBucket: "foodweb-app.appspot.com",
  messagingSenderId: "667891555540",
  appId: "1:667891555540:web:199a7868a3e56bef3b6f41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();