import { pixelFont, medievalFont } from "@/fonts";

const images = [
  {
    src: "/img/fondo/gale1.png",
    desc: "Luca luchando contra criaturas sombrías en el bosque maldito.",
    size: "row-span-2",
  },
  {
    src: "/img/fondo/gale2.png",
    desc: "Ciudad iluminada con antorchas, mercados activos y un castillo al fondo.",
    size: "row-span-3",
  },
  {
    src: "/img/fondo/gale3.png",
    desc: "Petra blandiendo su espada y Luca lanzando un hechizo verde en plena batalla.",
    size: "row-span-2",
  },
  {
    src: "/img/fondo/gale4.png",
    desc: "Ruinas ancestrales cubiertas de runas doradas brillantes.",
    size: "row-span-3",
  },
  {
    src: "/img/fondo/gale5.png",
    desc: "Multitud en Axxis reunida en rebelión bajo un ambiente oscuro.",
    size: "row-span-3",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/img/decorations/runes.png')] bg-repeat" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2
          className={`${pixelFont.className} text-4xl md:text-5xl text-[#c8a84a] text-center mb-16 drop-shadow-[0_0_20px_rgba(200,168,74,0.7)]`}
        >
          Galería de AXXIS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-xl border-2 border-[#c8a84a]/40 shadow-[0_0_25px_rgba(200,168,74,0.3)] ${img.size}`}
            >
              <img
                src={img.src}
                alt={`Screenshot ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-3 text-sm text-[#f5e6a3] opacity-0 group-hover:opacity-100 transition">
                {img.desc}
              </span>
            </div>
          ))}

          <div className="relative flex items-center justify-center text-center p-6 border-2 border-[#c8a84a]/50 rounded-xl shadow-[0_0_25px_rgba(200,168,74,0.5)] row-span-2 col-span-2 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/img/fondo/runas.png')] bg-cover bg-center opacity-20" />
            
            <p
              className={`${medievalFont.className} relative z-10 text-[#f5e6a3] text-xl md:text-2xl leading-relaxed drop-shadow-[0_0_15px_rgba(200,168,74,0.5)]`}
            >
              “Solo en la oscuridad más profunda brillan las llamas de la
              verdadera esperanza.”
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_15px_5px_rgba(200,168,74,0.8)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `shooting ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
