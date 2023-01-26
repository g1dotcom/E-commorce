import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm3lJYViw6B5DA_qeFVwmg6s3EHpt9_YA",
  authDomain: "ecommers-32b68.firebaseapp.com",
  projectId: "ecommers-32b68",
  storageBucket: "ecommers-32b68.appspot.com",
  messagingSenderId: "576918796500",
  appId: "1:576918796500:web:2e8420bdbb29a7caf9a341",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
