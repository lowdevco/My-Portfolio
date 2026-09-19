import React, { useState } from "react";

function ExperienceItem({ company, role, duration, description, skills }) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <article 
      onClick={() => setIsTouched(!isTouched)}
      onMouseLeave={() => setIsTouched(false)}
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 border-t border-white/10 first:border-transparent transition-all duration-500 hover:bg-gradient-to-r hover:from-[#A57AFF]/10 hover:via-transparent hover:to-transparent px-4 md:px-8 -mx-4 md:-mx-8 rounded-3xl overflow-hidden cursor-pointer"
    >
      
      {/* Animated Left Accent Line */}
      <div className={`absolute left-0 top-8 bottom-8 w-1.5 bg-[#A57AFF] rounded-r-full opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-500 ease-out shadow-[0_0_20px_rgba(165,122,255,0.8)] ${isTouched ? '!opacity-100 !scale-y-100' : ''}`} />

      {/* Left side: Duration & Company */}
      <div className={`md:col-span-4 flex flex-col gap-2 md:mt-1 transition-transform duration-500 ease-out group-hover:translate-x-3 ${isTouched ? '!translate-x-3' : ''}`}>
        <time className="text-[#A57AFF] font-mono text-sm md:text-sm font-semibold tracking-widest uppercase mb-1">
          {duration}
        </time>
        <div className="text-xl md:text-2xl font-bold text-[#f5f5f7]">{company}</div>
      </div>

      {/* Right side: Role, Description, Skills */}
      <div className="md:col-span-8 flex flex-col">
        <h3 className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-6 transition-all duration-500 ease-out text-[#f5f5f7] group-hover:text-[#A57AFF] group-hover:translate-x-3 ${isTouched ? '!text-[#A57AFF] !translate-x-3' : ''}`}>
          {role}
        </h3>

        <div className="text-[#86868b] leading-relaxed text-[15px] md:text-lg mb-8">
          {Array.isArray(description) ? (
            <ul className="flex flex-col gap-4">
              {description.map((desc, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-[#A57AFF]/60 mt-1.5 text-[14px]" aria-hidden="true">
                    ✦
                  </span>
                  <span className="flex-1">{desc}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 mt-auto" aria-label="Skills used">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full bg-[#A57AFF]/10 text-[#A57AFF] border border-[#A57AFF]/20 transition-all hover:bg-[#A57AFF]/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceItem;
