import { initializeApp } from "firebase/app";

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
