// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB265Ck_fy_79yQH0hGPVo3_o_6DcXHcjA",
  authDomain: "personal-c66fa.firebaseapp.com",
  projectId: "personal-c66fa",
  storageBucket: "personal-c66fa.appspot.com",
  messagingSenderId: "317626412668",
  appId: "1:317626412668:web:bcd7dadacef9f5d287e3f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;