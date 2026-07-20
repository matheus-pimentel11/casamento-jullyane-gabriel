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
          Nossa história começou de um jeito simples, mas Deus já havia preparado cada detalhe. Entre conversas, risadas, aprendizados e muitos momentos especiais, fomos construindo um amor baseado no respeito, na amizade e na fé.
          Hoje, olhamos para tudo o que vivemos com gratidão e alegria. Cada etapa nos trouxe até aqui, e agora nos preparamos para dizer o nosso “sim” diante de Deus, iniciando um novo capítulo das nossas vidas, cercados pelas pessoas que mais amamos.
        </motion.p>

      </div>

    </section>
  )
}