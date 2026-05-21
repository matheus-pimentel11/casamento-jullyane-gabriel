import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8_WfZUyaQkT5s2l_QA_diBt_eOvdGIUE",
  authDomain: "casamento-e9983.firebaseapp.com",
  projectId: "casamento-e9983",
  storageBucket: "casamento-e9983.firebasestorage.app",
  messagingSenderId: "403650873301",
  appId: "1:403650873301:web:14a6bd0d7525dfe3669f5c",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)