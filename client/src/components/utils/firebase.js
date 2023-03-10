// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_PUBLICK_AUTH_DOMAIN,
//   projectId: process.env.REACT_PUBLICK_PROJECT_ID,
//   storageBucket: process.env.REACT_PUBLICK_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_PUBLICK_MESS_SENDER_ID,
//   appId: process.env.REACT_PUBLICK_APP_ID,
//   measurementId: process.env.REACT_PUBLICK_MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyA0DKdRuFFhYYGHQCDUOWTXx79i6uUXZgU",
  authDomain: "pixolabai.firebaseapp.com",
  projectId: "pixolabai",
  storageBucket: "pixolabai.appspot.com",
  messagingSenderId: "639862962750",
  appId: "1:639862962750:web:f195d5ba051674a4632f6f",
  measurementId: "G-JNM2EZ1BRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);