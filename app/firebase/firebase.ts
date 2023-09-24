// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKUq4kaMrYnSqzsTxV0em4x8XkmswYXog",
  authDomain: "ecommerce-store-d7e10.firebaseapp.com",
  projectId: "ecommerce-store-d7e10",
  storageBucket: "ecommerce-store-d7e10.appspot.com",
  messagingSenderId: "10114260791",
  appId: "1:10114260791:web:e07a43842bc81c412744b2"
};

// Initialize Firebase
const app = getApps().length?   getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app);
export {auth, db, storage, app}