import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh7JXnYhKBsaaFM61rGvqdpsETOjq1CwQ",
  authDomain: "wattodo-fab25.firebaseapp.com",
  projectId: "wattodo-fab25",
  storageBucket: "wattodo-fab25.appspot.com",
  messagingSenderId: "771305057589",
  appId: "1:771305057589:web:7e4904c6750d885500b07c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
