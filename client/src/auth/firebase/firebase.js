import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwUDc2osMfGMYyyhsZD5M3OTfRBS9KpiA",
  authDomain: "algumprojetobemlegal.firebaseapp.com",
  projectId: "algumprojetobemlegal",
  storageBucket: "algumprojetobemlegal.appspot.com",
  messagingSenderId: "469331349216",
  appId: "1:469331349216:web:9d281aaaf7633064b50a85",
  measurementId: "G-J6BWDC406R"
};

export const app = initializeApp(firebaseConfig);
