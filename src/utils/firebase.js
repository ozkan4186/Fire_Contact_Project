// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChE1taMLAV7PawOcZfRohAY3_LFRdq-oA",
  authDomain: "fire-contact-app-99022.firebaseapp.com",
  databaseURL: "https://fire-contact-app-99022-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-99022",
  storageBucket: "fire-contact-app-99022.appspot.com",
  messagingSenderId: "1038017606458",
  appId: "1:1038017606458:web:6976318f49aede20021603"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
