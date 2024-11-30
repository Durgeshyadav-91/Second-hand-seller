// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b300d.firebaseapp.com",
  projectId: "mern-estate-b300d",
  storageBucket: "mern-estate-b300d.appspot.com",
  messagingSenderId: "546387879289",
  appId: "1:546387879289:web:7618c4364dae95af36fba8",
  measurementId: "G-LLL3XXYL77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);