import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtyekgVtEy1oTWN6zx1SX62afOFcM5xNY",
  authDomain: "juego-prl.firebaseapp.com",
  databaseURL: "https://juego-prl-default-rtdb.firebaseio.com",
  projectId: "juego-prl",
  storageBucket: "juego-prl.firebasestorage.app",
  messagingSenderId: "555287342465",
  appId: "1:555287342465:web:5e1216d1721185b7f60c80"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
