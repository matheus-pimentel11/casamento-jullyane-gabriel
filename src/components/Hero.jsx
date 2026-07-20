import { motion } from "framer-motion"
import Countdown from "./Countdown"

function Hero() {
    return (
        <section id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-28"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 scale-110 bg-cover bg-center blur-sm"
                style={{ backgroundImage: "url('/fotos/foto-1.jpg')" }}
            ></div>

            <img
                src="/fotos/foto-1.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-contain object-center opacity-80"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/65"></div>

            {/* Conteúdo */}
            <motion.div
                className="relative z-10 w-full max-w-4xl text-center text-white"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <motion.p
                    className="uppercase tracking-[6px] mb-4 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Nosso Casamento
                </motion.p>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Jullyane & Gabriel
                </motion.h1>

                <motion.p
                    className="mt-6 text-xl md:text-2xl text-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    14 de Novembro de 2026
                </motion.p>

                <Countdown />

                <motion.button
                    className="mt-10 px-8 py-4 border border-white text-white rounded-full bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const el = document.getElementById("rsvp")
                        if (el) {
                            el.scrollIntoView({ behavior: "smooth" })
                        }
                    }}
                >
                    Confirmar Presença
                </motion.button>
            </motion.div>
        </section>
    )
}

export default Hero
