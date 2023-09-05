// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHKRdOeDJ7D67rTHkwCE5fclNEsdVzVGo",
  authDomain: "user-authentication-d81f8.firebaseapp.com",
  projectId: "user-authentication-d81f8",
  storageBucket: "user-authentication-d81f8.appspot.com",
  messagingSenderId: "93319657233",
  appId: "1:93319657233:web:45b457240d46b2d09d7eb0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);