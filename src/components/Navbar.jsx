import { useEffect, useState } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/60 backdrop-blur-md py-3" : "bg-transparent py-6"}
      `}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        <h1 className="text-white text-xl font-semibold tracking-wide">
          Jullyane & Gabriel
        </h1>

        <nav className="hidden md:flex gap-8 text-white text-sm">
          <a href="#home" className="hover:text-gray-300 transition">Início</a>
          <a href="#historia" className="hover:text-gray-300 transition">História</a>
          <a href="#cerimonia" className="hover:text-gray-300 transition">Contagem</a>
          <a href="#galeria" className="hover:text-gray-300 transition">Fotos</a>
          <a href="#localizacao" className="hover:text-gray-300 transition">Localização</a>
          <a href="#presentes" className="hover:text-gray-300 transition">Presentes</a>
          <a href="#rsvp" className="hover:text-gray-300 transition">RSVP</a>
        </nav>

      </div>
    </header>
  )
}

export default Navbar