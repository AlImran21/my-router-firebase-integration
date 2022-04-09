// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeGj0R4A0N9WrmkvPWkBJ0z9f-sR_9ML0",
  authDomain: "my-router-firebase-integration.firebaseapp.com",
  projectId: "my-router-firebase-integration",
  storageBucket: "my-router-firebase-integration.appspot.com",
  messagingSenderId: "949519317363",
  appId: "1:949519317363:web:00e8cbfed2a10675c1ad06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;