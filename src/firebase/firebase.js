// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE5bLw-SFY3gYIDf93qwIVwYwc9Xj0WjQ",
  authDomain: "fremd-app.firebaseapp.com",
  projectId: "fremd-app",
  storageBucket: "fremd-app.appspot.com",
  messagingSenderId: "628556885663",
  appId: "1:628556885663:web:6909c9f2bbab2b44823caa",
  measurementId: "G-2BKCW8SDBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 

export { app,auth }; 