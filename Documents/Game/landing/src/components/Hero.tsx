// components/Hero.tsx
import { FaSteam } from "react-icons/fa";
import { pixelFont, medievalFont, bodyFont } from "../fonts";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/fondo/bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1
            className={`${pixelFont.className} text-4xl md:text-6xl 
              bg-gradient-to-b from-[#f5e6a3] via-[#c8a84a] to-[#7a6221] 
              bg-clip-text text-transparent 
              drop-shadow-[0_0_20px_rgba(200,168,74,0.7)] mb-6`}
          >
            AXXIS
          </h1>

          <h2
            className={`${medievalFont.className} text-2xl md:text-4xl text-[#f5e6a3] italic mb-6 drop-shadow-[0_0_10px_rgba(200,168,74,0.5)]`}
          >
            El Reino Caído
          </h2>

          <p
            className={`${bodyFont.className} text-gray-300 text-base md:text-lg leading-relaxed max-w-md mb-8`}
          >
            Sumérgete en un mundo{" "}
            <span className="text-[#c8a84a] font-semibold">pixelado</span> lleno
            de batallas épicas, secretos ocultos y un destino que cambiará la historia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className={`${bodyFont.className} bg-[#c8a84a] hover:bg-[#9b7e2a] text-black px-6 py-3 rounded-lg font-bold shadow-lg transition-transform hover:scale-105`}
            >
              Descargar Demo
            </a>
            {/* <a
              href="#"
              className={`${bodyFont.className} bg-black/70 border border-[#c8a84a] px-6 py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-colors`}
            >
              <FaSteam className="text-xl text-[#c8a84a]" />
              Wishlist en Steam
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
