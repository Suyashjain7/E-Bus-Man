// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSfkxnt6hfQdEC0LIRNY3yxAj1BpIqh8s",
  authDomain: "ebus-3410e.firebaseapp.com",
  projectId: "ebus-3410e",
  storageBucket: "ebus-3410e.firebasestorage.app",
  messagingSenderId: "1061810588220",
  appId: "1:1061810588220:web:fde5b789c734ec9162d139",
  measurementId: "G-NKX97CL023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);