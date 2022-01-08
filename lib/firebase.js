import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDj1F1CAQ_NikftQDsoFbktezYtnlvYuH4",
  authDomain: "fireship-next-tutorial-c0261.firebaseapp.com",
  projectId: "fireship-next-tutorial-c0261",
  storageBucket: "fireship-next-tutorial-c0261.appspot.com",
  messagingSenderId: "3595074771",
  appId: "1:3595074771:web:49024b4575371d098a2826",
  measurementId: "G-2HGDJ4NP9Z",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
