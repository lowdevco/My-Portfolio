import React, { useRef } from "react";
import "../css/intro.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import ProfileCard from "@/components/ProfileCard";
import { useSmoothScroll } from "../Hook/scrollToSection";  
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import resumeFile from "../Resume/Resume.pdf"; 

function Intro() {
  const scroll = useSmoothScroll();
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".intro-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" }
    )
    .fromTo(
      ".intro-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(
      ".intro-buttons",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 },
      "-=0.3"
    )
    .fromTo(
      ".profile-card-container",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="intro-container min-h-screen flex items-center justify-center relative z-10 pt-36 pb-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-20 lg:gap-16 xl:gap-24 w-full max-w-7xl mx-auto">
        <div className="intro-content text-center lg:text-left flex-1 mt-4 md:mt-0">
          <div>
            <h1 className="intro-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f5f5f7] tracking-tight leading-tight">
              Crafting <span className="text-[#a57aff]">Digital</span>
            </h1>
            <h1 className="intro-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f5f5f7] mt-1 leading-tight">
              Masterpieces.
            </h1>
          </div>

          <p className="intro-text mt-6 text-lg md:text-xl text-[#86868b] font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm <span className="text-[#f5f5f7]">Muhammad Irfan</span>, a
            dedicated{" "}
            <span className="text-[#a57aff]">Full Stack Developer</span>{" "}
            focused on building high-performance, user-centric web applications.
          </p>

          <div className="intro-buttons flex justify-center lg:justify-start gap-4 mt-10">
            <a
              href="https://github.com/lowdevco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-2xl bg-[#1d1d1f] border border-white/5 text-[#f5f5f7] hover:bg-[#2d2d2f] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
            >
              <FaGithub size={22} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadirfank/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-2xl bg-[#1d1d1f] border border-white/5 text-[#f5f5f7] hover:bg-[#2d2d2f] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
            >
              <FaLinkedin size={22} aria-hidden="true" />
            </a>
          </div>

          <div className="intro-buttons flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
            <button
              onClick={() => scroll("contact")}
              className="w-full sm:w-auto py-4 px-8 bg-[#f5f5f7] hover:bg-white text-black font-semibold rounded-2xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              Contact Me
            </button>

            <a
              href={resumeFile}
              download="Irfan-Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 bg-[#1d1d1f] hover:bg-[#2d2d2f] text-[#f5f5f7] font-semibold rounded-2xl border border-white/5 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] min-h-[48px] min-w-[48px]"
            >
              Get Resume
              <FaDownload size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="profile-card-container flex justify-center lg:justify-end items-center flex-1 w-full max-w-[480px]">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default Intro;
