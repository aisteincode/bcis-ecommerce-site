import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqD6GaO7AXjfwD1PA_qhvKCm0eIysVk94",
  authDomain: "bcis-ecommerce-store.firebaseapp.com",
  projectId: "bcis-ecommerce-store",
  storageBucket: "bcis-ecommerce-store.appspot.com",
  messagingSenderId: "775279644346",
  appId: "1:775279644346:web:b64f98f57dc1dbc9d1bc83",
  measurementId: "G-2QEV6E6L11",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
