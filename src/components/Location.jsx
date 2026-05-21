import { motion } from "framer-motion"

export default function Location() {
  const openMaps = () => {
    window.open(
      "https://www.google.com/maps?q=Igreja+da+Penha+Rio+de+Janeiro",
      "_blank"
    )
  }

  return (
    <section
      id="localizacao"
      className="min-h-screen flex items-center justify-center bg-zinc-900 text-white px-6 py-24"
    >
      <div className="text-center max-w-2xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light mb-6"
        >
          Local da Cerimônia 📍
        </motion.h2>

        <p className="text-gray-300 text-lg">
          Igreja da Penha<br />
          Largo da Penha, s/n - Penha<br />
          Rio de Janeiro - RJ
        </p>

        <p className="text-gray-400 mt-4 text-sm">
          14 de Novembro de 2026 • 17h00
        </p>

        <motion.button
          onClick={openMaps}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          Abrir no Google Maps
        </motion.button>

      </div>
    </section>
  )
}