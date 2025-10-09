// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAUPQgC2cnKqNYYJSeIsjLqGhfApvO7J0",
  authDomain: "locky-link.firebaseapp.com",
  databaseURL: "https://locky-link-default-rtdb.firebaseio.com",
  projectId: "locky-link",
  storageBucket: "locky-link.firebasestorage.app",
  messagingSenderId: "834822797013",
  appId: "1:834822797013:web:076d90c9433216e4be545c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
