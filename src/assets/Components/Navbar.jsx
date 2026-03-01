import React, { useState } from "react";
import "../css/navbar.css";
import { useSmoothScroll } from "../Hook/scrollToSection";

function Navbar() {

  const scroll = useSmoothScroll();

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-5xl 
                    h-16 px-8 flex items-center justify-between
                    bg-gray-900/40 backdrop-blur-md border border-white/10 
                    rounded-2xl shadow-2xl transition-all duration-300"
    >
      <h1 className="text-white font-bold text-xl tracking-tighter cursor-pointer" onClick={() => scroll('intro')}>
        <span className="text-purple-500">PORTFOLIO</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
          >
            {link.name}
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 
                             transition-all duration-300 group-hover:w-full"
            />
          </a>
        ))}
      </div>

      {/* Hamburger Icon Mobile Version */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 z-[1001]"
        onClick={() => setIsOpen(!isOpen)} 
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile Menu List */}
      <div
        className={`absolute top-20 left-0 w-full bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-300 hover:text-purple-500 text-lg font-medium border-b border-white/5 pb-2"
            onClick={() => setIsOpen(false)} 
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
