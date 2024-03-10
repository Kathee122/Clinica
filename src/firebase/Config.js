// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGzl1YLbUNJ8Ay07ATdXXR3sJEKMsRmBM",
  authDomain: "clinica-c479b.firebaseapp.com",
  projectId: "clinica-c479b",
  storageBucket: "clinica-c479b.appspot.com",
  messagingSenderId: "490170082076",
  appId: "1:490170082076:web:117b26af94b0b84d0590d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);