import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYRl7Pcr9xT-VPMQ5503F3UF5K18YSJA0",
  authDomain: "motor-easy-99969.firebaseapp.com",
  projectId: "motor-easy-99969",
  storageBucket: "motor-easy-99969.appspot.com",
  messagingSenderId: "716031045861",
  appId: "1:716031045861:web:8d5ada8a59e6d337c9640c",
  measurementId: "G-HGMBQ254H5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {app, auth, storage, db}