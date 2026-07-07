import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import { useSmoothScroll } from "../Hook/scrollToSection";
import { motion } from "motion/react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const scroll = useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "/#about", target: "about" },
    { name: "Experience", href: "/#experience", target: "experience" },
    { name: "Skills", href: "/#skills", target: "skills" },
    { name: "Projects", href: "/projects", target: "projects" },
    { name: "Contact", href: "/#contact", target: "contact" },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("projects");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Trigger when the section enters the top/middle third of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sectionIds = ["intro", "about", "experience", "skills", "projects", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (e, link) => {
    // If we're on home page and it's a hash link, use smooth scroll
    if (pathname === "/" && link.href.startsWith("/#")) {
      e.preventDefault();
      scroll(link.target);
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] xl:w-[70%] 
                    h-16 px-8 flex items-center justify-between
                    bg-gray-900/40 backdrop-blur-md border border-white/10 
                    rounded-lg shadow-2xl transition-all duration-300"
    >
      <Link to="/" className="text-white font-bold text-xl tracking-tighter cursor-pointer">
        <span className="text-purple-500">PORTFOLIO</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === "/projects" 
            ? link.target === "projects" 
            : activeSection === link.target;
            
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`relative text-sm font-medium transition-colors group ${
                isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Hamburger Icon Mobile Version */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 z-[1001]"
        onClick={() => setIsOpen(!isOpen)} 
      >
        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile Menu List */}
      <div
        className={`absolute top-20 left-0 w-full bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === "/projects" 
            ? link.target === "projects" 
            : activeSection === link.target;
            
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-lg font-medium border-b border-white/5 pb-2 ${
                isActive ? "text-purple-400" : "text-gray-300 hover:text-purple-500"
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}

export default Navbar;
