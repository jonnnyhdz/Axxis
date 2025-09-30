// components/CTA.tsx
import { medievalFont, bodyFont } from "@/fonts";
import { FaSteam } from "react-icons/fa";
import { GiBroadsword } from "react-icons/gi";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-32 bg-gradient-to-b from-[#0a0a0a] via-gray-900 to-black text-center text-gray-100 overflow-hidden"
    >
      {/* Fondo con runas */}
      <div className="absolute inset-0 opacity-10 bg-[url('/img/fondo/runas.png')] bg-repeat" />

      {/* Glow épico */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c8a84a]/15 via-transparent to-[#c8a84a]/15" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Título */}
        <h2
          className={`${medievalFont.className} text-3xl md:text-5xl text-[#f5e6a3] mb-6 drop-shadow-[0_0_25px_rgba(200,168,74,0.7)]`}
        >
          ¿Listo para reclamar tu destino?
        </h2>

        {/* Subtítulo */}
        <p
          className={`${bodyFont.className} text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto`}
        >
          El reino de <span className="text-[#c8a84a] font-semibold">AXXIS</span> te espera.  
          Descarga la demo gratuita o añade el juego a tu lista de deseos en Steam.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-[#c8a84a] hover:bg-[#9b7e2a] text-black px-8 py-4 rounded-lg font-bold shadow-[0_0_25px_rgba(200,168,74,0.6)] transition-transform hover:scale-105 text-lg"
          >
            <GiBroadsword className="text-2xl" />
            Descargar Demo
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-black/80 border border-[#c8a84a] hover:bg-[#1a1a1a] text-[#f5e6a3] px-8 py-4 rounded-lg font-bold shadow-[0_0_20px_rgba(200,168,74,0.4)] transition-transform hover:scale-105 text-lg"
          >
            <FaSteam className="text-2xl text-[#c8a84a]" />
            Wishlist en Steam
          </a>
        </div>
      </div>
    </section>
  );
}
