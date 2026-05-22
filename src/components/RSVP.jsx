import { useState } from "react"
import { db } from "../firebase"
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: 1,
  })

  const [loading, setLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    // 🔍 verifica duplicado
    const q = query(
      collection(db, "rsvps"),
      where("name", "==", form.name)
    )

    const snapshot = await getDocs(q)

    if (!snapshot.empty) {
      alert("Esse nome já confirmou presença 💔")
      setLoading(false)
      return
    }

    // 💾 salva no Firebase
    await addDoc(collection(db, "rsvps"), {
      name: form.name,
      email: form.email,
      guests: Number(form.guests),
      createdAt: new Date(),
    })

    setConfirmed(true)
    setForm({ name: "", email: "", guests: 1 })
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
            Obrigado por fazer parte desse momento tão especial ❤️
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="min-h-screen flex items-center justify-center bg-black text-white px-6">

      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">

        <h2 className="text-3xl font-light text-center mb-6">
          Confirmar Presença
        </h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome completo"
          className="w-full p-3 rounded bg-zinc-800"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 rounded bg-zinc-800"
          required
        />

        <input
          name="guests"
          type="number"
          min="1"
          value={form.guests}
          onChange={handleChange}
          className="w-full p-3 rounded bg-zinc-800"
        />

        <button
          disabled={loading}
          className="w-full bg-white text-black py-3 rounded hover:scale-105 transition"
        >
          {loading ? "Enviando..." : "Confirmar Presença"}
        </button>

      </form>

    </section>
  )
}