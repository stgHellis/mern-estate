// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-18799.firebaseapp.com",
  projectId: "mern-estate-18799",
  storageBucket: "mern-estate-18799.appspot.com",
  messagingSenderId: "827508035324",
  appId: "1:827508035324:web:95e37613a8cb94e22ed179"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
