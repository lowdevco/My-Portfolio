import React from "react";

function ExperienceItem({ company, role, duration, description, skills }) {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Line Connect  */}

      <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-800 group-last:h-2" />

      {/* Dot  */}

      <div className="absolute left-[-4px] top-0 h-[10px] w-[10px] rounded-full bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.8)] border-2 border-white group-hover:scale-125 transition-transform duration-300" />

      {/*  CONTENT */}

      <div className="flex flex-col gap-1">
        <span className="text-purple-500 font-mono text-sm font-bold uppercase tracking-wider mb-1">
          {duration}
        </span>

        <div className="bg-gray-900/40 border border-white/5 p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-300 shadow-xl">
          <div className="flex flex-col mb-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {role}
            </h3>
            <p className="text-gray-400 font-medium italic opacity-80">
              {company}
            </p>
          </div>

          <p className="text-gray-400 mt-2 leading-relaxed text-lg">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold rounded-md bg-white/5 text-gray-300 border border-white/10 hover:bg-purple-500/10 hover:text-purple-400 hover:border-purple-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
