// Import the functions you need from the SDKs you need
import { collection, getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWLXwy6qfoyCrBOzWAbQhHiydcdxmG0WU",
  authDomain: "margueritten-6f9a8.firebaseapp.com",
  databaseURL: "https://margueritten-6f9a8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "margueritten-6f9a8",
  storageBucket: "margueritten-6f9a8.appspot.com",
  messagingSenderId: "28094866476",
  appId: "1:28094866476:web:39b3bc91fc35f3d9d45d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log(auth);

export {auth};
export const usersRef = collection(db, "users");




