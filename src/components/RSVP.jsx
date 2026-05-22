import { useState } from "react"
import { db } from "../firebase"
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore"

export default function RSVP() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [guests, setGuests] = useState(1)
  const [loading, setLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // 🔍 1. verificar se está na lista de convidados
      const q = query(
        collection(db, "guests"),
        where("name", "==", name)
      )

      const snap = await getDocs(q)

      if (snap.empty) {
        alert("Seu nome não está na lista de convidados 💔")
        setLoading(false)
        return
      }

      const guestDoc = snap.docs[0]
      const guestData = guestDoc.data()

      // 🔒 2. impedir duplicado
      if (guestData.confirmed) {
        alert("Esse convite já foi confirmado 💔")
        setLoading(false)
        return
      }

      // 💾 3. salvar RSVP
      await addDoc(collection(db, "rsvps"), {
        name,
        email,
        guests: Number(guests),
        createdAt: new Date(),
      })

      // ✔ 4. marcar como confirmado na lista
      await updateDoc(doc(db, "guests", guestDoc.id), {
        confirmed: true,
      })

      setConfirmed(true)
    } catch (error) {
      console.log(error)
      alert("Erro ao confirmar presença")
    }

    setLoading(false)
  }

  // 💍 TELA DE SUCESSO
  if (confirmed) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white text-center px-6">
        <div>
          <h2 className="text-4xl font-light mb-4">
            Presença confirmada 💍
          </h2>

          <p className="text-gray-400">
            Obrigado por fazer parte desse momento especial ❤️
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="rsvp"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">

        <h2 className="text-3xl font-light text-center mb-6">
          Confirmar Presença
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome completo"
          className="w-full p-3 rounded bg-zinc-800"
          required
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 rounded bg-zinc-800"
          required
        />

        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800"
        />

        <button
          disabled={loading}
          className="w-full bg-white text-black py-3 rounded hover:scale-105 transition"
        >
          {loading ? "Verificando..." : "Confirmar Presença"}
        </button>

      </form>
    </section>
  )
}