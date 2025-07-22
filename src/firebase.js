// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVIYyfNk3_4_38PCKUtMNJqHIWVI0k0i4",
  authDomain: "ticketingsystem-ffb1f.firebaseapp.com",
  projectId: "ticketingsystem-ffb1f",
  storageBucket: "ticketingsystem-ffb1f.appspot.com",
  messagingSenderId: "254138192858",
  appId: "1:254138192858:web:your-app-id-here" // optional, not critical for now
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
