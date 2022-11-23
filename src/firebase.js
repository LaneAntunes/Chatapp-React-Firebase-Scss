// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyVE2h3rPZt-ulUg7l8Ll1yi4Q-ulZy9o",
    authDomain: "chatapp-ac856.firebaseapp.com",
    projectId: "chatapp-ac856",
    storageBucket: "chatapp-ac856.appspot.com",
    messagingSenderId: "885239919716",
    appId: "1:885239919716:web:2e009b85a708feccd91b71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()