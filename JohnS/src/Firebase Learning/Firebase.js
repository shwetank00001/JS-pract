
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"   // connecting fire store with react app

const firebaseConfig = {
  apiKey: "AIzaSyAdKJ0zIjm-Nwa-X1VThGHpkuhFzTJX_kU",
  authDomain: "todo-shwetank.firebaseapp.com",
  projectId: "todo-shwetank",
  storageBucket: "todo-shwetank.firebasestorage.app",
  messagingSenderId: "662263904801",
  appId: "1:662263904801:web:5af22c023bc8139c8c0160",
  measurementId: "G-MFC9HZ1JHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore= getFirestore(app)
// now we can access this firestore in our other components

//this app contains the initialization of our FIREBASE config


