import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const weddingDate = new Date("2026-11-14T00:00:00")

function getTimeLeft() {
  const now = new Date()
  const diff = Math.max(weddingDate - now, 0)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const box = (value, label) => (
    <div className="rounded-lg border border-white/20 bg-white/10 px-2 py-4 text-center backdrop-blur-sm">
      <div className="text-2xl sm:text-4xl md:text-5xl font-light tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/75 sm:text-xs">
        {label}
      </div>
    </div>
  )

  return (
    <motion.div
      id="cerimonia"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mx-auto mt-10 w-full max-w-3xl"
    >
      <h2 className="text-sm font-normal uppercase tracking-[0.35em] text-white/85">
        Contagem Regressiva
      </h2>

      <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-4">
        {box(timeLeft.days, "Dias")}
        {box(timeLeft.hours, "Horas")}
        {box(timeLeft.minutes, "Min")}
        {box(timeLeft.seconds, "Seg")}
      </div>
    </motion.div>
  )
}
