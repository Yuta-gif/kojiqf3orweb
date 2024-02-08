// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByJ-p-GEQvgLzQIN_IP6k9W4GHES7c4bw",
  authDomain: "kojiq3-a0dbd.firebaseapp.com",
  projectId: "kojiq3-a0dbd",
  storageBucket: "kojiq3-a0dbd.appspot.com",
  messagingSenderId: "38635906681",
  appId: "1:38635906681:web:7517f5520afd2cab7756a8",
  measurementId: "G-M3ZFMLGH69",
  databaseURL: "https://kojiq3-a0dbd-default-rtdb.firebaseio.com",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig); // ここに 'export' を追加
export const analytics = getAnalytics(app);
export const database = getDatabase(app);