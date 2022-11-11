// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore, query, where, doc, getDoc} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCluXgjKjVWu8G9mrdQ7UgupybgdZ0zHOg",
  authDomain: "ecommerce-streluk.firebaseapp.com",
  projectId: "ecommerce-streluk",
  storageBucket: "ecommerce-streluk.appspot.com",
  messagingSenderId: "922123848441",
  appId: "1:922123848441:web:e31a14b09b84de62deb028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (category) => {
  let q;
  if(category) {
    q = query(collection(db, "products"), where('category', '==', category))
  } else {
    q = query(collection(db, "products"))
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  return dataFromFirestore
}

export const firestoreOneFetch = async (item) => {
  const docRef = doc(db, "products", item);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {id: docSnap.id, ...docSnap.data()};
  } else {
    console.log("No such document!");
  }
}

export const signInFirebase = async (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
}