// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmd0XnxP3Nn5ehbaf1fRabsqzlePUSjbs",
  authDomain: "inventory-manager-163a1.firebaseapp.com",
  projectId: "inventory-manager-163a1",
  storageBucket: "inventory-manager-163a1.appspot.com",
  messagingSenderId: "1069065436639",
  appId: "1:1069065436639:web:4deca795ae8d8d718f986a",
  measurementId: "G-GRWZBMSPT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };