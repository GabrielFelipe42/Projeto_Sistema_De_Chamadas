import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCg9HJfFmy_iUVbOTSVKd_DEL3jBN8w_ic",
  authDomain: "projeto-lista-de-chamadas.firebaseapp.com",
  projectId: "projeto-lista-de-chamadas",
  storageBucket: "projeto-lista-de-chamadas.appspot.com",
  messagingSenderId: "894660703221",
  appId: "1:894660703221:web:7917fdc0f11896ad87e6bc",
  measurementId: "G-Z5C1S3937T",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
