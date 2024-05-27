// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjNv_-Uq-aVDL325MF2a1r_vQSyz8xpVU",
  authDomain: "authdemo-18977.firebaseapp.com",
  projectId: "authdemo-18977",
  storageBucket: "authdemo-18977.appspot.com",
  messagingSenderId: "1066747413866",
  appId: "1:1066747413866:web:29fe2a4fa3f6a6583b5113",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
