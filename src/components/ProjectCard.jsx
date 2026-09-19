import React, { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, tags, link, github, image }) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <article 
      onClick={() => setIsTouched(!isTouched)}
      onMouseLeave={() => setIsTouched(false)}
      className={`group relative flex flex-col h-[420px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 hover:border-[#A57AFF]/40 hover:shadow-[0_10px_40px_rgba(165,122,255,0.15)] bg-[#111113] transition-all duration-500 cursor-pointer ${isTouched ? 'border-[#A57AFF]/40 shadow-[0_10px_40px_rgba(165,122,255,0.15)]' : ''}`}
    >
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#000]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-40 ${isTouched ? 'scale-110 opacity-40' : ''}`}
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent opacity-90" />
      </div>

      {/* Top section: Tags */}
      <div className="relative z-10 flex flex-wrap gap-2 p-6 md:p-8 justify-end">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-black/40 text-[#f5f5f7] backdrop-blur-md rounded-full border border-white/10 group-hover:border-[#A57AFF]/40 group-hover:bg-[#A57AFF]/10 group-hover:text-[#A57AFF] transition-all duration-300 shadow-lg ${isTouched ? 'border-[#A57AFF]/40 bg-[#A57AFF]/10 text-[#A57AFF]' : ''}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom section: Content Container */}
      <div className="relative z-10 flex flex-col justify-end p-6 md:p-8 mt-auto overflow-hidden">
        
        {/* Animated Wrapper */}
        <div className={`transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col ${isTouched ? '!translate-y-0' : ''}`}>
          
          {/* Title */}
          <h2 className={`text-3xl md:text-4xl font-extrabold text-[#f5f5f7] mb-3 tracking-tight group-hover:text-[#A57AFF] transition-colors duration-300 drop-shadow-md ${isTouched ? '!text-[#A57AFF]' : ''}`}>
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-[#a1a1a6] text-[15px] md:text-base leading-relaxed line-clamp-2 md:line-clamp-3 mb-6">
            {description}
          </p>

          {/* Action Buttons */}
          <div className={`grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out ${isTouched ? '!opacity-100' : ''}`}>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-4 py-3.5 bg-white/10 hover:bg-white text-[#f5f5f7] hover:!text-black backdrop-blur-md text-sm font-bold rounded-2xl transition-all duration-300 border border-white/10"
            >
              <SiGithub size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-4 py-3.5 bg-[#A57AFF] hover:bg-[#b58eff] text-black text-sm font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(165,122,255,0.3)]"
            >
              <FaExternalLinkAlt size={14} aria-hidden="true" />
              Demo
            </a>
          </div>

        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
