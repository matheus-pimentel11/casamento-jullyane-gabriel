import { motion } from "framer-motion"

function Hero() {
    return (
        <section id="home"
            className="h-screen bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070&auto=format&fit=crop')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Conteúdo */}
            <motion.div
                className="relative z-10 text-center text-white px-4"
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