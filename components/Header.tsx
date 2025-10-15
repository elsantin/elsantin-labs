"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    // Aquí implementarás la lógica para cambiar idiomas
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] px-8 h-[70px] flex items-center bg-[rgba(13,17,23,0.8)] backdrop-blur-[10px] border-b border-[var(--color-dev-hub-border)] transition-colors duration-300">
      <nav className="flex justify-between items-center w-full max-w-[1200px] mx-auto gap-4 h-full pointer-events-auto">
        {/* Logo */}
        <Link href="#" className="font-[var(--font-heading)] text-[1.8rem] font-bold no-underline relative inline-flex items-center flex-shrink-0 pointer-events-auto group">
          <span className="text-accent-gold inline-block transition-transform duration-500 ease-out group-hover:-translate-x-3">
            {"{"}
          </span>
          <span className="text-accent-gold inline-block mx-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
            _
          </span>
          <span className="text-accent-gold inline-block transition-transform duration-500 ease-out group-hover:translate-x-3">
            {"}"}
          </span>
        </Link>

        {/* Nav Menu */}
        <div className="flex items-center gap-8 flex-grow justify-center pointer-events-auto mx-5">
          <ul
            className={`flex gap-7 list-none m-0 p-0 items-center pointer-events-auto flex-grow justify-center
              max-md:${isMenuOpen ? "flex" : "hidden"} max-md:flex-col max-md:w-full max-md:absolute max-md:top-[70px] max-md:left-0 
              max-md:bg-[rgba(13,17,23,0.95)] max-md:backdrop-blur-[20px] max-md:border-b max-md:border-[var(--color-dev-hub-border)] 
              max-md:py-4 max-md:text-center max-md:shadow-[0_10px_30px_rgba(0,0,0,0.3)] max-md:z-[1000] 
              max-md:opacity-100 max-md:translate-y-0 max-md:transition-all max-md:duration-300`}
          >
            <li>
              <Link
                href="#services"
                className="text-[var(--color-dev-hub-text-secondary)] no-underline transition-colors duration-300 font-medium text-[0.95rem] whitespace-nowrap py-2 px-3 pointer-events-auto cursor-pointer rounded-md hover:text-[var(--color-accent-gold)] hover:bg-[rgba(212,175,55,0.08)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="#add-ons"
                className="text-[var(--color-dev-hub-text-secondary)] no-underline transition-colors duration-300 font-medium text-[0.95rem] whitespace-nowrap py-2 px-3 pointer-events-auto cursor-pointer rounded-md hover:text-[var(--color-accent-gold)] hover:bg-[rgba(212,175,55,0.08)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Add-ons
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="text-[var(--color-dev-hub-text-secondary)] no-underline transition-colors duration-300 font-medium text-[0.95rem] whitespace-nowrap py-2 px-3 pointer-events-auto cursor-pointer rounded-md hover:text-[var(--color-accent-gold)] hover:bg-[rgba(212,175,55,0.08)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#process"
                className="text-[var(--color-dev-hub-text-secondary)] no-underline transition-colors duration-300 font-medium text-[0.95rem] whitespace-nowrap py-2 px-3 pointer-events-auto cursor-pointer rounded-md hover:text-[var(--color-accent-gold)] hover:bg-[rgba(212,175,55,0.08)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Proceso
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-[var(--color-dev-hub-text-secondary)] no-underline transition-colors duration-300 font-medium text-[0.95rem] whitespace-nowrap py-2 px-3 pointer-events-auto cursor-pointer rounded-md hover:text-[var(--color-accent-gold)] hover:bg-[rgba(212,175,55,0.08)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>

          {/* Language Toggle */}
          <div className="flex gap-[0.15rem] bg-[rgba(22,27,34,0.8)] rounded-[10px] p-[2px] border border-[rgba(255,255,255,0.08)] backdrop-blur-[4px] flex-shrink-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-auto hover:border-[var(--color-accent-gold)] hover:bg-[rgba(22,27,34,0.9)]">
            <button
              onClick={() => toggleLanguage("es")}
              className={`py-[6px] px-[14px] border-none rounded-[18px] cursor-pointer font-medium text-[12px] transition-all duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1)] min-w-[24px] text-center pointer-events-auto
                ${
                  currentLanguage === "es"
                    ? "bg-[var(--color-accent-gold)] text-[var(--color-text-on-gold)] font-semibold scale-[1.02] border border-[var(--color-accent-gold)] shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
                    : "bg-transparent text-[rgba(255,255,255,0.75)] hover:text-white hover:bg-[rgba(255,255,255,0.1)]"
                }`}
            >
              ES
            </button>
            <button
              onClick={() => toggleLanguage("en")}
              className={`py-[6px] px-[14px] border-none rounded-[18px] cursor-pointer font-medium text-[12px] transition-all duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1)] min-w-[24px] text-center pointer-events-auto
                ${
                  currentLanguage === "en"
                    ? "bg-[var(--color-accent-gold)] text-[var(--color-text-on-gold)] font-semibold scale-[1.02] border border-[var(--color-accent-gold)] shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
                    : "bg-transparent text-[rgba(255,255,255,0.75)] hover:text-white hover:bg-[rgba(255,255,255,0.1)]"
                }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden cursor-pointer bg-none border-none flex-shrink-0 pointer-events-auto"
          onClick={toggleMenu}
        >
          <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-[var(--color-dev-hub-text-primary)] transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-[var(--color-dev-hub-text-primary)] transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-[var(--color-dev-hub-text-primary)] transition-all duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>
    </header>
  );
}
