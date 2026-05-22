import { db } from "./src/firebase.js"
import { collection, addDoc } from "firebase/firestore"

const guests = [
  "Matheus",
  "Mariana",
  "Marcos",
  "Jorgea",
  "Gabriel",
  "Jullyane"
]

async function importGuests() {
  for (const name of guests) {
    await addDoc(collection(db, "guests"), {
      name,
      confirmed: false
    })
  }

  console.log("Importação concluída 💍")
}

importGuests()