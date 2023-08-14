// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF-GTdnlNKFWNUQ8XMkdIBlUQfv8BSI-8",
  authDomain: "chat-app-4cf46.firebaseapp.com",
  projectId: "chat-app-4cf46",
  storageBucket: "chat-app-4cf46.appspot.com",
  messagingSenderId: "752876812645",
  appId: "1:752876812645:web:0843ed0b67bafadb69098c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
