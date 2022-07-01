// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABfFO8S7_Y9wVe83w6jLmpL6qKgif1rMY",
  authDomain: "task-list-f9e1b.firebaseapp.com",
  projectId: "task-list-f9e1b",
  storageBucket: "task-list-f9e1b.appspot.com",
  messagingSenderId: "32153628089",
  appId: "1:32153628089:web:d5c228f9a2568e14d99a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;