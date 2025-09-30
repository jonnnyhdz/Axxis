// components/LoreTimeline.tsx
import { pixelFont, medievalFont, bodyFont } from "@/fonts";
import { GiCrown, GiSwordman, GiMagicSwirl, GiCastle } from "react-icons/gi";

const events = [
  {
    title: "Caída del Rey",
    year: "Año 0",
    desc: "El trono de Axxis se rompe tras la traición de los Consejeros. La oscuridad comienza a expandirse.",
    icon: GiCrown,
  },
  {
    title: "Nacimiento de Luca",
    year: "Año 12",
    desc: "En medio del caos, nace un niño marcado por runas antiguas. El destino del reino recae sobre él.",
    icon: GiMagicSwirl,
  },
  {
    title: "Alzamiento de Petra",
    year: "Año 23",
    desc: "Una guerrera surge del exilio. Petra levanta al pueblo contra los señores oscuros.",
    icon: GiSwordman,
  },
  {
    title: "La Rebelión",
    year: "Año 27",
    desc: "Luca y Petra unen fuerzas. La chispa de la rebelión estalla en las murallas de Axxis.",
    icon: GiCastle,
  },
];

export default function LoreTimeline() {
  return (
    <section
      id="lore"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 overflow-hidden"
    >
      {/* Fondo de runas */}
      <div className="absolute inset-0 opacity-10 bg-[url('/img/fondo/runas.png')] bg-repeat" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título */}
        <h2
          className={`${pixelFont.className} text-3xl md:text-5xl text-center 
            bg-gradient-to-b from-[#f5e6a3] via-[#c8a84a] to-[#7a6221]
            bg-clip-text text-transparent 
            drop-shadow-[0_0_25px_rgba(200,168,74,0.8)] mb-20`}
        >
          Lore del Reino
        </h2>

        {/* Línea de tiempo horizontal */}
        <div className="hidden md:flex relative justify-between items-start">
          {/* Línea base */}
          <div className="absolute top-16 left-0 w-full h-[6px] bg-gradient-to-r from-[#5c4b1f] via-[#c8a84a] to-[#5c4b1f] shadow-[0_0_15px_rgba(200,168,74,0.6)] rounded-full" />

          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center w-1/4 px-4 relative"
              >
                {/* Punto icónico */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black border-4 border-[#c8a84a] shadow-[0_0_25px_rgba(200,168,74,0.7)] z-10 mb-6">
                  <Icon className="text-3xl text-[#f5e6a3]" />
                </div>

                {/* Card */}
                <div className="bg-gray-950/80 border border-[#c8a84a]/30 rounded-lg p-6 shadow-lg hover:shadow-[0_0_25px_rgba(200,168,74,0.5)] transition max-w-xs">
                  <h3
                    className={`${medievalFont.className} text-xl text-[#f5e6a3] mb-2`}
                  >
                    {event.title}
                  </h3>
                  <p
                    className={`${bodyFont.className} text-sm text-[#c8a84a] italic mb-3`}
                  >
                    {event.year}
                  </p>
                  <p
                    className={`${bodyFont.className} text-gray-300 text-sm leading-relaxed`}
                  >
                    {event.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile (vertical) */}
        <div className="md:hidden relative border-l-2 border-[#c8a84a]/40 ml-6 space-y-12">
          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <div key={i} className="ml-6 relative group">
                {/* Punto icónico */}
                <div
                  className="absolute -left-9 top-1 flex items-center justify-center 
                  w-10 h-10 rounded-full bg-black border-2 border-[#c8a84a] shadow-[0_0_15px_rgba(200,168,74,0.8)]"
                >
                  <Icon className="text-lg text-[#f5e6a3]" />
                </div>
                {/* Card */}
                <div className="bg-gray-950/80 border border-[#c8a84a]/30 rounded-lg p-4 shadow-lg">
                  <h3 className={`${medievalFont.className} text-base text-[#f5e6a3] mb-1`}>
                    {event.title}
                  </h3>
                  <p className={`${bodyFont.className} text-xs text-[#c8a84a] italic mb-2`}>
                    {event.year}
                  </p>
                  <p className={`${bodyFont.className} text-gray-300 text-sm`}>
                    {event.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
