// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIXFq192es09mPK5eqhkpfPdSgOwm8hx8",
  authDomain: "miniblog-4c33f.firebaseapp.com",
  projectId: "miniblog-4c33f",
  storageBucket: "miniblog-4c33f.appspot.com",
  messagingSenderId: "964452929039",
  appId: "1:964452929039:web:337af00628e192a88ddd7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};