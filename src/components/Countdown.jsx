import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Countdown() {
  const weddingDate = new Date("2026-11-14T00:00:00")

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date()
    const diff = weddingDate - now

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const box = (value, label) => (
    <div className="text-center">
      <div className="text-4xl md:text-6xl font-light">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-sm uppercase tracking-widest text-gray-500 mt-2">
        {label}
      </div>
    </div>
  )

  return (
    <section id="cerimonia" className="min-h-screen flex items-center justify-center bg-black text-white px-6">

      <div className="text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light mb-12"
        >
          Contagem Regressiva
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {box(timeLeft.days, "Dias")}
          {box(timeLeft.hours, "Horas")}
          {box(timeLeft.minutes, "Min")}
          {box(timeLeft.seconds, "Seg")}
        </div>

      </div>

    </section>
  )
}