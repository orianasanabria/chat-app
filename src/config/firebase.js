import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyByFoNxrmU6w09muTgx8PoEVOA0Wn-_29g",
  authDomain: "vcoolprojects.firebaseapp.com",
  projectId: "vcoolprojects",
  storageBucket: "vcoolprojects.appspot.com",
  messagingSenderId: "1029845419415",
  appId: "1:1029845419415:web:dc55c47a1e6cb9dc7370d2",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { app, db, auth, provider }
