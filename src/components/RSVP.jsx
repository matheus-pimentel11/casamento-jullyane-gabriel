import { useState } from "react"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore"

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: 1,
  })

  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addDoc(collection(db, "rsvps"), {
      ...form,
      createdAt: new Date()
    })

    setSent(true)
    setForm({ name: "", email: "", guests: 1 })
  }

  return (
    <section id="rsvp" className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-24">

      <div className="max-w-xl w-full text-center">

        <h2 className="text-4xl font-light mb-10">
          Confirme sua presença
        </h2>

        {sent ? (
          <p className="text-green-400">Presença confirmada 💍</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              name="name"
              placeholder="Nome"
              value={form.name}
              onChange={handleChange}
              className="p-3 bg-zinc-800 rounded"
              required
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 bg-zinc-800 rounded"
              required
            />

            <input
              name="guests"
              type="number"
              min="1"
              value={form.guests}
              onChange={handleChange}
              className="p-3 bg-zinc-800 rounded"
            />

            <button className="bg-white text-black py-3 rounded">
              Confirmar
            </button>

          </form>
        )}

      </div>
    </section>
  )
}