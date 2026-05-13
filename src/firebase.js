import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace this with the config object from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBfICB-9uBENlHEkLcYTuZWGziXXzbBmWs",
  authDomain: "pramod-events-web.firebaseapp.com",
  projectId: "pramod-events-web",
  storageBucket: "pramod-events-web.firebasestorage.app",
  messagingSenderId: "499928849072",
  appId: "1:499928849072:web:ed4b2aec25e9cfafbf3975",
  measurementId: "G-7YQ9E9NTSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore
export const db = getFirestore(app);
// Initialize Cloud Storage
export const storage = getStorage(app);