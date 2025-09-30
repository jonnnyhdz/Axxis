// components/Trailer.tsx
import { medievalFont, bodyFont } from "@/fonts";

export default function Trailer() {
  return (
    <section
      id="trailer"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-[#0a0a0a] text-center text-gray-100 overflow-hidden"
    >
      {/* Fondo con runas */}
      <div className="absolute inset-0 opacity-10 bg-[url('/img/fondo/runas.png')] bg-repeat" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Título */}
        <h2
          className={`${medievalFont.className} text-4xl md:text-5xl text-[#c8a84a] mb-12 drop-shadow-[0_0_25px_rgba(200,168,74,0.8)]`}
        >
          Tráiler Oficial
        </h2>

        {/* Contenedor del tráiler */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-[#c8a84a]/60 shadow-[0_0_45px_rgba(200,168,74,0.6)]">
          {/* Marco decorativo extra */}
          <div className="absolute inset-0 rounded-2xl border-4 border-[#f5e6a3]/20 pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Video */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/E3Huy2cdih0" // Elden Ring Trailer
            title="Game Trailer"
            allowFullScreen
          />
        </div>

        {/* Texto debajo */}
        <p
          className={`${bodyFont.className} mt-8 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed`}
        >
          Sumérgete en el oscuro universo de{" "}
          <span className="text-[#c8a84a] font-semibold">AXXIS: El Reino Caído</span>.  
          Un viaje marcado por la traición, la magia y batallas épicas que definirán el destino de los reinos.
        </p>
      </div>
    </section>
  );
}
