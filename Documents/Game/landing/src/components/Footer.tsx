// components/Footer.tsx
import { FaTwitter, FaDiscord, FaSteam, FaYoutube } from "react-icons/fa";
import { pixelFont, medievalFont, bodyFont } from "@/fonts";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-14 text-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Logo del juego con título y subtítulo al mismo nivel */}
        <div className="flex justify-center items-baseline gap-3 mb-8">
          <h2
            className={`${pixelFont.className} text-2xl md:text-3xl 
              bg-gradient-to-b from-[#f5e6a3] via-[#c8a84a] to-[#7a6221] 
              bg-clip-text text-transparent 
              drop-shadow-[0_0_12px_rgba(200,168,74,0.7)]`}
          >
            AXXIS
          </h2>
          <h3
            className={`${medievalFont.className} text-lg md:text-2xl text-[#f5e6a3] italic drop-shadow-[0_0_8px_rgba(200,168,74,0.5)]`}
          >
            El Reino Caído
          </h3>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-8 mb-8 text-2xl md:text-3xl">
          <a
            href="#"
            className="text-gray-400 hover:text-[#c8a84a] transition-colors drop-shadow-[0_0_6px_rgba(200,168,74,0.6)]"
            aria-label="Steam"
          >
            <FaSteam />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#c8a84a] transition-colors drop-shadow-[0_0_6px_rgba(200,168,74,0.6)]"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#c8a84a] transition-colors drop-shadow-[0_0_6px_rgba(200,168,74,0.6)]"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#c8a84a] transition-colors drop-shadow-[0_0_6px_rgba(200,168,74,0.6)]"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Texto legal */}
        <p className={`${bodyFont.className} text-sm text-gray-400`}>
          © {new Date().getFullYear()} AXXIS: El Reino Caído. Todos los derechos
          reservados.
        </p>
        <p className={`${bodyFont.className} text-xs mt-2 text-gray-500`}>
          Desarrollado por{" "}
          <span className="text-[#f5e6a3]">BeboDev</span>.
        </p>
      </div>

      {/* Línea separadora dorada arriba del footer */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#c8a84a] to-transparent shadow-[0_0_12px_rgba(200,168,74,0.8)]" />
    </footer>
  );
}
