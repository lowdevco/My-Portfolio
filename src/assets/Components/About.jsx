import React from "react";
import "../css/about.css";
import PhotoCard from "@/components/PhotoCard";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FiMapPin, FiTerminal, FiLayers } from "react-icons/fi";

function About() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid items-center justify-center grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-20 w-full py-24 relative z-10">
      
      {/* Photo Section */}
      <div className="order-1 lg:order-1 lg:col-span-5 flex justify-center perspective-2000 relative">
        {/* Solid ambient glow (non-gradient) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#A57AFF]/15 blur-[80px] rounded-full pointer-events-none opacity-80" />
        <PhotoCard />
      </div>

      {/* Text Section */}
      <div className="order-2 lg:order-2 lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
        <h2 className="text-[#A57AFF] font-mono text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
          Behind the Code
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#f5f5f7] tracking-tight leading-tight mb-8">
          Passionate about <br className="hidden md:block" />
          <span className="text-[#A57AFF]">building the future.</span>
        </h1>

        <div className="space-y-6 text-lg text-[#86868b] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
          <p>
            Hi, I'm <span className="text-[#f5f5f7] font-bold">Muhammad Irfan</span>. I am a
            Full Stack Developer with a strong dedication to crafting
            high-performance, user-centric web applications.
          </p>
          <p>
            With a solid foundation in both front-end and back-end technologies, I
            thrive on creating seamless digital experiences that captivate users
            and drive results. My commitment to excellence fuels my ability to
            deliver innovative solutions for the evolving digital landscape.
          </p>
        </div>

        {/* Quick Stats / Info Pills */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-12">
          {[
            { label: "Location", value: "Kerala, India", icon: <FiMapPin className="w-5 h-5" /> },
            { label: "Experience", value: "Full Stack", icon: <FiTerminal className="w-5 h-5" /> },
            { label: "Focus", value: "Web Apps", icon: <FiLayers className="w-5 h-5" /> }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#111113] border border-white/5 shadow-xl hover:border-[#A57AFF]/30 transition-colors duration-300">
              <div className="text-[#A57AFF]">
                {stat.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[#86868b] text-[10px] font-mono uppercase tracking-widest mb-1">{stat.label}</span>
                <span className="text-[#f5f5f7] font-bold text-sm tracking-wide">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}

export default About;
