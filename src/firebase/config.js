
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDMaOuw9B5ww7KwQJFbSnwjj2AZlhpr1K8",
  authDomain: "databuch-72f03.firebaseapp.com",
  projectId: "databuch-72f03",
  storageBucket: "databuch-72f03.appspot.com",
  messagingSenderId: "44621346400",
  appId: "1:44621346400:web:9d9116d12bb81ccde03505"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);