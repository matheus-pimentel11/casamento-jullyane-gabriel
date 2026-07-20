import { motion } from "framer-motion"

const images = [
  "/fotos/foto-1.jpg",
  "/fotos/foto-2.jpg",
  "/fotos/foto-3.jpg",
  "/fotos/foto-4.jpg",
  "/fotos/foto-5.jpg",
]

export default function Gallery() {
  return (
    <section id="galeria" className="min-h-screen bg-white px-6 py-24">

      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-gray-900 mb-12"
        >
          Nossa Galeria
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt={`Foto ${index + 1} de Jullyane e Gabriel`}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}
