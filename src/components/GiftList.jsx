import { useEffect, useState } from "react"
import { db } from "../firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

const gifts = [
  "Airfryer 💖",
  "Vale pizza 🍕",
  "Cafeteira ☕",
  "Lua de mel ✈️",
  "PIX do amor 💸",
  "Netflix 🎬",
  "Jantar sem lavar louça 🍝",
  "Robô aspirador dos sonhos 🧹",
  "Kit pipoca e cobertor 🍿",
  "Cota mercado pós-casamento 🛒",
  "Panela para receitas corajosas 🍲",
  "Cota sofá dos cochilos 🛋️",
  "Vale date night 🌙",
  "Cota plantas que sobrevivam 🌿",
  "Primeiro boleto juntos 🧾",
  "Caixa de ferramentas do casal 🔧",
  "Kit café da manhã preguiçoso 🥐",
  "Fundo emergencial do delivery 🛵",
]

async function getTakenGifts() {
  const snap = await getDocs(collection(db, "giftClaims"))
  return snap.docs.map((doc) => doc.data().gift)
}

export default function GiftList() {
  const [name, setName] = useState("")
  const [takenGifts, setTakenGifts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let active = true

    getTakenGifts().then((giftNames) => {
      if (active) {
        setTakenGifts(giftNames)
      }
    })

    return () => {
      active = false
    }
  }, [])

  const refreshTakenGifts = async () => {
    const giftNames = await getTakenGifts()
    setTakenGifts(giftNames)
  }

  const claimGift = async (gift) => {
    if (!name.trim()) return alert("Digite seu nome 😄")

    if (takenGifts.includes(gift)) {
      alert("Esse presente já foi escolhido 💔")
      return
    }

    setLoading(true)

    try {
      await addDoc(collection(db, "giftClaims"), {
        name: name.trim(),
        gift,
        createdAt: new Date(),
      })

      setName("")
      await refreshTakenGifts()
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="presentes" className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 py-24">

      <div className="max-w-4xl mx-auto text-center">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
          Lista de Presentes
        </h2>

        <p className="text-gray-500 mb-10">
          Escolha um presente para nos ajudar nessa nova fase 💍
        </p>

        {/* INPUT */}
        <div className="flex justify-center mb-12">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome"
            className="p-3 w-full max-w-sm border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {gifts.map((gift) => {
            const taken = takenGifts.includes(gift)

            return (
              <button
                key={gift}
                onClick={() => claimGift(gift)}
                disabled={taken || loading}
                className={`
                  relative p-6 rounded-2xl border transition-all duration-300
                  shadow-sm hover:shadow-lg text-left
                  ${taken
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white hover:-translate-y-1 hover:border-black"
                  }
                `}
              >

                <div className="text-lg font-medium">
                  {gift}
                </div>

                <div className="text-sm text-gray-400 mt-1">
                  {taken ? "Já escolhido 💔" : "Clique para escolher"}
                </div>

              </button>
            )
          })}

        </div>

      </div>

    </section>
  )
}
