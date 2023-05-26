import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBTfNLMTitJoMWlPKAYNrxK4uH-YgH-aWY",
  authDomain: "myapp-d15ea.firebaseapp.com",
  projectId: "myapp-d15ea",
  storageBucket: "myapp-d15ea.appspot.com",
  messagingSenderId: "130737031515",
  appId: "1:130737031515:web:3dd295ba23634bfa9ef27e",
  measurementId: "G-HKBJN4D4TD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);