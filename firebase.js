// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Fill With Your Firebase Config",
  authDomain: "Fill With Your Firebase Config",
  projectId: "Fill With Your Firebase Config",
  storageBucket: "Fill With Your Firebase Config",
  messagingSenderId: "Fill With Your Firebase Config",
  appId: "Fill With Your Firebase Config",
  measurementId: "Fill With Your Firebase Config"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };