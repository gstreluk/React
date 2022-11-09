import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyADOziVvlQ1K8r8RavUUkeo44TAmOVXqco",
  authDomain: "ecommerce-1acf5.firebaseapp.com",
  projectId: "ecommerce-1acf5",
  storageBucket: "ecommerce-1acf5.appspot.com",
  messagingSenderId: "936351561997",
  appId: "1:936351561997:web:5c1c296b59a6a362a31844"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);


