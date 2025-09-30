// components/Features.tsx
import { medievalFont, bodyFont } from "@/fonts";
import { GiOpenBook, GiBattleGear, GiWorld } from "react-icons/gi";

const features = [
  {
    title: "Mundo Abierto",
    desc: "Explora reinos pixelados llenos de secretos, ciudades vibrantes y paisajes oscuros en un universo vivo.",
    icon: GiWorld,
  },
  {
    title: "Combate Dinámico",
    desc: "Domina la espada y la magia en batallas fluidas donde cada movimiento puede decidir el destino.",
    icon: GiBattleGear,
  },
  {
    title: "Historia Épica",
    desc: "Tus decisiones escribirán la leyenda. Forja alianzas, enfrenta traiciones y marca el futuro de Axxis.",
    icon: GiOpenBook,
  },
];

const particles = Array.from({ length: 25 });

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2
          className={`${medievalFont.className} text-4xl md:text-5xl text-[#c8a84a] mb-20 drop-shadow-[0_0_20px_rgba(200,168,74,0.9)]`}
        >
          Crónica del Reino
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="relative flex flex-col items-center max-w-xs group"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-28 h-28 rounded-full border-2 border-[#c8a84a]/30 animate-spin-slow" />
                  <div className="absolute w-36 h-36 rounded-full border border-[#c8a84a]/10 animate-spin-slow-reverse" />
                  <div className="relative w-24 h-24 rounded-full border-4 border-[#c8a84a] flex items-center justify-center bg-gray-950 shadow-[0_0_25px_rgba(200,168,74,0.6)] group-hover:scale-110 transition-transform">
                    <Icon className="text-4xl text-[#c8a84a]" />
                  </div>
                </div>

                <h3
                  className={`${medievalFont.className} text-2xl text-[#f5e6a3] mt-6 mb-3`}
                >
                  {f.title}
                </h3>
                <p
                  className={`${bodyFont.className} text-gray-300 text-sm leading-relaxed`}
                >
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_10px_4px_rgba(200,168,74,0.6)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `shooting ${4 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-10 bg-[url('/img/fondo/runas.png')] bg-repeat" />
    </section>
  );
}
