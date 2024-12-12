
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAozrYqq-DlCcKPApW5YecjdzatlsphcWo",
  authDomain: "news-paper-8b25c.firebaseapp.com",
  projectId: "news-paper-8b25c",
  storageBucket: "news-paper-8b25c.firebasestorage.app",
  messagingSenderId: "850191877497",
  appId: "1:850191877497:web:6e113b57e06d408c955ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth