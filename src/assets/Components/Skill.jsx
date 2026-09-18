import React from "react";
import { FaReact } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  SiPython,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiBootstrap,
  SiPostman,
  SiFigma,
  SiDjango,
  SiMysql,
  SiJquery,
  SiSqlite,
} from "react-icons/si";

function Skill() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="w-5 h-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-5 h-5" /> },
        { name: "jQuery", icon: <SiJquery className="w-5 h-5" /> },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Python", icon: <SiPython className="w-5 h-5" /> },
        { name: "Django", icon: <SiDjango className="w-5 h-5" /> },
        { name: "Node.js", icon: <DiNodejsSmall className="w-6 h-6" /> },
        { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
        { name: "SQLite", icon: <SiSqlite className="w-5 h-5" /> },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: <SiGit className="w-5 h-5" /> },
        { name: "VS Code", icon: <VscVscode className="w-5 h-5" /> },
        { name: "Postman", icon: <SiPostman className="w-5 h-5" /> },
        { name: "Figma", icon: <SiFigma className="w-5 h-5" /> },
      ],
    },
  ];

  return (
    <section className="skills-container py-24 relative z-10" id="skills">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f5f5f7] tracking-tight">
            Technical <span className="text-[#A57AFF]">Stack</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#A57AFF] mt-6 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <article
              key={idx}
              className="bg-[#111113] border border-white/5 rounded-3xl p-8 hover:border-[#A57AFF]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(165,122,255,0.05)]"
            >
              <h3 className="text-2xl font-bold text-[#f5f5f7] mb-8 tracking-tight">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-4" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-4 group cursor-default">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#1d1d1f] border border-white/5 text-[#86868b] group-hover:text-[#A57AFF] group-hover:border-[#A57AFF]/20 transition-all duration-300" aria-hidden="true">
                      {skill.icon}
                    </div>
                    <span className="text-[#86868b] font-medium text-lg group-hover:text-[#f5f5f7] transition-colors duration-300">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
