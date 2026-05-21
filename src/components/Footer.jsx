export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 px-6">

      <div className="max-w-5xl mx-auto text-center">

        {/* NOMES */}
        <h3 className="text-2xl md:text-3xl font-light tracking-wide">
          Jullyane & Gabriel
        </h3>

        {/* FRASE ROMÂNTICA */}
        <p className="text-gray-400 mt-3 text-sm md:text-base italic">
          “O amor não consiste em olhar um para o outro, mas sim em olhar juntos na mesma direção.”
        </p>

        {/* DATA */}
        <p className="text-gray-500 mt-6 text-sm">
          14 de Novembro de 2026 • Um dia para sempre 💍
        </p>

        {/* DIVISOR */}
        <div className="mt-8 border-t border-gray-800 pt-6">

          {/* CRÉDITO */}
          <p className="text-xs text-gray-500">
            Site desenvolvido por{" "}
            <span className="text-white font-medium">
              Matheus Pimentel
            </span>
          </p>

        </div>

      </div>

    </footer>
  )
}