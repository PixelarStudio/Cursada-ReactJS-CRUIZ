import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD1PFQ1-T66vMidSh8dILqYYaxUR-iyaLw",
  authDomain: "progamer-852e5.firebaseapp.com",
  projectId: "progamer-852e5",
  storageBucket: "progamer-852e5.appspot.com",
  messagingSenderId: "245498951596",
  appId: "1:245498951596:web:43564fe4a33cf6a577ec09"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export default db
