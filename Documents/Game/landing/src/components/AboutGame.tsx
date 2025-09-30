// components/AboutGame.tsx
import { medievalFont, bodyFont } from "@/fonts";

export default function AboutGame() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-gray-100"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Texto */}
        <div>
          <h2
            className={`${medievalFont.className} text-4xl md:text-5xl text-[#c8a84a] mb-8 drop-shadow-[0_0_15px_rgba(200,168,74,0.6)]`}
          >
            La Crónica de Luca
          </h2>

          <p
            className={`${bodyFont.className} text-lg leading-relaxed text-gray-300 mb-6`}
          >
            Luca, heredero de <span className="text-[#c8a84a]">Axxis</span>, nació
            destinado a portar la corona. Pero en su viaje descubrió una verdad
            prohibida: los desterrados, marginados por no tener magia, ocultaban un
            poder ancestral capaz de desafiar a los reyes hechiceros.
          </p>

          <p
            className={`${bodyFont.className} text-lg leading-relaxed text-gray-300 mb-6`}
          >
            Su amor por <span className="text-[#c8a84a]">Petra</span> y su rebeldía
            contra la tiranía lo condenaron a la traición. El asesinato de su
            prometida y su exilio al Reino del Éather marcaron el inicio de su
            caída… y el nacimiento de una venganza que cambiará el destino del
            mundo.
          </p>

          <p
            className={`${bodyFont.className} italic text-[#f5e6a3] mt-8 text-lg`}
          >
            La verdadera historia apenas comienza…
          </p>
        </div>

        {/* Imagen del personaje */}
        <div className="flex justify-center">
          <img
            src="/img/personajes/luca.png"
            alt="Luca - Heredero de Axxis"
            className="w-72 md:w-96 drop-shadow-[0_0_25px_rgba(200,168,74,0.5)]"
          />
        </div>
      </div>

      {/* Fondo decorativo opcional */}
      <div className="absolute inset-0 opacity-5 bg-[url('/axxis-logo.png')] bg-center bg-no-repeat bg-contain" />
    </section>
  );
}
