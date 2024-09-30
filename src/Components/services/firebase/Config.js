// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhkdNt0heHt-f79CcDGMmkIZNk7CB4nzI",
  authDomain: "sef-academyy.firebaseapp.com",
  projectId: "sef-academyy",
  storageBucket: "sef-academyy.appspot.com",
  messagingSenderId: "1045244771430",
  appId: "1:1045244771430:web:a8a098eacc739bd56a01a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
