// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_-4elNC3QNHhdsnxUKGS9_j-XbAYpVZU",
  authDomain: "miniproyecto2-c5efb.firebaseapp.com",
  projectId: "miniproyecto2-c5efb",
  storageBucket: "miniproyecto2-c5efb.appspot.com",
  messagingSenderId: "51019422071",
  appId: "1:51019422071:web:a0cbf511eb69a56bde2972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });