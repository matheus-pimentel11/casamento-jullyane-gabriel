import { motion } from "framer-motion"

export default function Story() {
  return (
    <section id="historia" className="min-h-screen flex items-center justify-center bg-white px-6 py-24">

      <div className="max-w-3xl text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-light text-gray-900"
        >
          Nossa História
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-gray-600 text-lg leading-relaxed"
        >
          Tudo começou de forma simples, mas especial. Dois caminhos diferentes
          que se cruzaram no momento certo. Entre conversas, risadas e sonhos
          compartilhados, nasceu algo que hoje celebramos com muito amor.
        </motion.p>

      </div>

    </section>
  )
}