import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB3YQxWMwB5WCWJ63Orr96kNW58xxAAle0",
  authDomain: "note-app-9cb6d.firebaseapp.com",
  projectId: "note-app-9cb6d",
  storageBucket: "note-app-9cb6d.appspot.com",
  messagingSenderId: "853984299128",
  appId: "1:853984299128:web:7f69e445c53636d1ab458d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
