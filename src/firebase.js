// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyCRlHVkV616BHpW0AZOoPfTzdAP6X1OXFM",
    authDomain: "news-aa254.firebaseapp.com",
    projectId: "news-aa254",
    storageBucket: "news-aa254.appspot.com",
    messagingSenderId: "725435641716",
    appId: "1:725435641716:web:417e4054054ad3020ac621"
  };
  


// Initialize the first Firebase app with a unique name
const app = initializeApp(firebaseConfig, "app");



// Initialize Firebase Authentication and get a reference to the service for app1
export const auth = getAuth(app);
export const db = getFirestore(app);


