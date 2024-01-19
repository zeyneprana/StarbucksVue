import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfQMODx5pgQ8giTH-j8X2tjtdr8TETDLw",
  authDomain: "starbucks-9044d.firebaseapp.com",
  projectId: "starbucks-9044d",
  storageBucket: "starbucks-9044d.appspot.com",
  messagingSenderId: "680603040256",
  appId: "1:680603040256:web:43b2375b36b576383d76e5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}