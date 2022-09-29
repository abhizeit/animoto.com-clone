// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK6DsbnwHm8IALcuHnyKnwzOHXq8LYJQE",
  authDomain: "animoto-630ff.firebaseapp.com",
  projectId: "animoto-630ff",
  storageBucket: "animoto-630ff.appspot.com",
  messagingSenderId: "450036739908",
  appId: "1:450036739908:web:360787afa48809bef83111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);