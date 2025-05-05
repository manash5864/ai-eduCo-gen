// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorafe, getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-e467f.firebaseapp.com",
  projectId: "ai-course-generator-e467f",
  storageBucket: "ai-course-generator-e467f.firebasestorage.app",
  messagingSenderId: "791357760564",
  appId: "1:791357760564:web:0752911a14deb3eb981661",
  measurementId: "G-9CWK7QB373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); 