import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestores";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMaOuw9B5ww7KwQJFbSnwjj2AZlhpr1K8",
  authDomain: "databuch-72f03.firebaseapp.com",
  projectId: "databuch-72f03",
  storageBucket: "databuch-72f03.appspot.com",
  messagingSenderId: "44621346400",
  appId: "1:44621346400:web:c15ab148c968885de03505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBuch= getFirestore(app);