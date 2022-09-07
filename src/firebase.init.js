// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-SWhWow58qA1WPqxOYCyreVt7XvrWMVE",
  authDomain: "shoe-shop-auth.firebaseapp.com",
  projectId: "shoe-shop-auth",
  storageBucket: "shoe-shop-auth.appspot.com",
  messagingSenderId: "9898324425",
  appId: "1:9898324425:web:5847bd1354c86da3397818",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
