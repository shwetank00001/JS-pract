// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAuILfz83n-PaDRwoSVv-lZ2TyBZyctMlA",
  authDomain: "shwetank-movies-firebase.firebaseapp.com",
  projectId: "shwetank-movies-firebase",
  storageBucket: "shwetank-movies-firebase.firebasestorage.app",
  messagingSenderId: "823227718811",
  appId: "1:823227718811:web:fc17a4f53060770c497a3e",
  measurementId: "G-NJ0MMGGPRR"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const store = getFirestore(app) 