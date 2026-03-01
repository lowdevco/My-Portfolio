import React, { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, tags, link, github, image }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;

    // Smooth tilt calculation
    setRotate({ x: y / -20, y: x / 20 });
  };

  return (
    <div
      className="relative group [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      <div
        className="bg-gray-900/40 border border-white/10 rounded-3xl p-6 transition-all duration-200 ease-out shadow-2xl backdrop-blur-sm"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Project Image Container */}
        <div
          className="w-full h-48 bg-black/50 rounded-2xl mb-6 overflow-hidden border border-white/5"
          style={{ transform: "translateZ(20px)" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Content Section */}
        <div style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl border border-white/10 transition-all active:scale-95"
            >
              <SiGithub size={18} />
              GitHub
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-700 hover:bg-purple-600 text-white text-sm font-semibold rounded-xl shadow-[0_0_15px_rgba(126,34,206,0.3)] transition-all active:scale-95"
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
