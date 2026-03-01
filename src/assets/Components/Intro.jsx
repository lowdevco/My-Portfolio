import React from "react";
import "../css/intro.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import ProfileCard from "@/components/ProfileCard";
import { useSmoothScroll } from "../Hook/scrollToSection";

function Intro() {

  const scroll = useSmoothScroll();
  return (
    <div className="intro-container min-h-screen flex items-center justify-center px-6 lg:mt-10 md:mt-30  mt-30 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center max-w-7xl">
        <div className="intro-content text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-800/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">
              Welcome to my portfolio
            </span>
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              Crafting <span className="text-purple-600">Digital</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-2">
              Masterpieces
            </h1>
          </div>

          <p className="mt-6 text-lg md:text-xl text-gray-400 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm <span className="text-white">Muhammad Irfan</span>, a
            dedicated{" "}
            <span className="text-purple-500">Full Stack Developer</span>{" "}
            focused on building high-performance, user-centric web applications.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <a href="https://github.com/lowdevco" target="_blank">
              <button className="p-3 rounded-xl bg-gray-900 border border-white/10 text-white hover:bg-purple-800 transition-all shadow-lg">
                <FaGithub size={24} />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadirfank/"
              target="_blank"
            >
              <button className="p-3 rounded-xl bg-gray-900 border border-white/10 text-white hover:bg-purple-800 transition-all shadow-lg">
                <FaLinkedin size={24} />
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <button
              onClick={() => scroll("contact")}
              className="py-4 px-8 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(126,34,206,0.3)]"
            >
              Contact Me
            </button>

            <button className="py-4 px-8 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl border border-white/10 flex items-center justify-center gap-3 transition-all">
              <a
                href=""
                target="_blank"
                className="flex items-center justify-center gap-3 transition-all"
              >
                Get Resume
                <FaDownload size={16} />
              </a>
            </button>
          </div>
        </div>

        {/* Profile Card Section */}

        <div className="flex justify-center items-center">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default Intro;
