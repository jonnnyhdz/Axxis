"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { pixelFont } from "@/fonts";

const navLinks = [
  { label: "Inicio", href: "hero" },
  { label: "Historia", href: "about" },
  { label: "Características", href: "features" },
  { label: "Galería", href: "gallery" },
  { label: "Tráiler", href: "trailer" },
  { label: "Jugar", href: "cta" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-[#c8a84a]/40 shadow-[0_0_15px_rgba(200,168,74,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 transition-all duration-700">
        <a
          href="#hero"
          className={`${pixelFont.className} text-xl md:text-2xl tracking-wide text-[#c8a84a] drop-shadow-[0_0_8px_rgba(200,168,74,0.7)] transition-all duration-700 ${
            scrolled
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-6 pointer-events-none"
          }`}
        >
          AXXIS
        </a>

        <ul
          className={`${pixelFont.className} hidden md:flex text-xs uppercase transition-all duration-700 ${
            scrolled ? "space-x-4 ml-auto" : "space-x-6 mx-auto"
          }`}
        >
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.href}`}
                className={`relative transition-all duration-300 px-1 ${
                  active === link.href
                    ? "text-[#f5e6a3] drop-shadow-[0_0_6px_rgba(200,168,74,0.8)]"
                    : "text-gray-300 hover:text-[#c8a84a]"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#c8a84a] shadow-[0_0_6px_rgba(200,168,74,0.7)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl text-[#c8a84a] drop-shadow-[0_0_6px_rgba(200,168,74,0.6)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`md:hidden bg-black/95 text-center border-t border-[#c8a84a]/40 transform transition-all duration-500 ease-in-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul
          className={`${pixelFont.className} flex flex-col py-4 space-y-3 text-sm`}
        >
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.href}`}
                className={`block transition-colors ${
                  active === link.href
                    ? "text-[#f5e6a3] drop-shadow-[0_0_6px_rgba(200,168,74,0.8)]"
                    : "text-gray-300 hover:text-[#c8a84a]"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
