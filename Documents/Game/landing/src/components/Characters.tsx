// components/Characters.tsx
import { medievalFont, bodyFont } from "@/fonts";

const characters = [
  {
    name: "Luca",
    role: "Hechicero Errante",
    img: "/img/characters/luca.png",
    desc: "Maestro de los hechizos prohibidos, destinado a romper el ciclo del Reino Caído.",
  },
  {
    name: "Petra",
    role: "Guerrera de Axxis",
    img: "/img/characters/petra.png",
    desc: "Una guerrera indomable que blande su espada contra la oscuridad y la traición.",
  },
  {
    name: "Drael",
    role: "Señor de las Sombras",
    img: "/img/characters/drael.png",
    desc: "Antiguo guardián que sucumbió a la magia oscura. Ahora comanda legiones sombrías.",
  },
];

export default function Characters() {
  return (
    <section
      id="characters"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 overflow-hidden"
    >
      {/* Fondo de runas */}
      <div className="absolute inset-0 opacity-10 bg-[url('/img/fondo/runas.png')] bg-repeat" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título */}
        <h2
          className={`${medievalFont.className} text-4xl md:text-5xl text-center 
            bg-gradient-to-b from-[#f5e6a3] via-[#c8a84a] to-[#7a6221]
            bg-clip-text text-transparent 
            drop-shadow-[0_0_20px_rgba(200,168,74,0.7)] mb-16`}
        >
          Personajes Jugables
        </h2>

        {/* Grid de personajes */}
        <div className="grid md:grid-cols-3 gap-10">
          {characters.map((char, i) => (
            <div
              key={i}
              className="group relative bg-gray-950 border border-[#c8a84a]/40 rounded-xl shadow-[0_0_20px_rgba(200,168,74,0.3)] overflow-hidden transform hover:scale-105 transition-all"
            >
              {/* Imagen */}
              <div className="relative w-full h-72 flex items-center justify-center bg-black/60">
                <img
                  src={char.img}
                  alt={char.name}
                  className="h-60 object-contain drop-shadow-[0_0_25px_rgba(200,168,74,0.5)] transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3
                  className={`${medievalFont.className} text-2xl text-[#f5e6a3] mb-2`}
                >
                  {char.name}
                </h3>
                <p
                  className={`${bodyFont.className} text-sm italic text-[#c8a84a] mb-4`}
                >
                  {char.role}
                </p>
                <p
                  className={`${bodyFont.className} text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-500`}
                >
                  {char.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
