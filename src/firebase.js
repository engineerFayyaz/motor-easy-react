import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";

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

export const addVehicleDetails = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'vehicleDetails'), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw new Error('Error adding document');
  }
};
export const addPersonalDetails = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'PersonalDetails'), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw new Error('Error adding document');
  }
};
export const addSelectedPlan = async (plan) => {
  try {
    const docRef = await addDoc(collection(db, 'SelectedPlans'), plan);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
export const addModelDetails = async (model) => {
  try {
    const docRef = await addDoc(collection(db, 'selectedModel'), {
      model: model,
    });
    console.log('model submitted is : ', model);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error("Failed to add model details");
  }
};