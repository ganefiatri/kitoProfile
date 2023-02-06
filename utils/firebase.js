// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLCBAZc3AlM57Q1l-GuhlEIGIBrMiBoM8",
  authDomain: "phone-auth-9cbc3.firebaseapp.com",
  projectId: "phone-auth-9cbc3",
  storageBucket: "phone-auth-9cbc3.appspot.com",
  messagingSenderId: "287204914959",
  appId: "1:287204914959:web:a4bfad48bd62ca109cf07a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default {auth};