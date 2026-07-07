import React, { useState } from "react";
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
import { motion, AnimatePresence } from "motion/react";

function Skill() {
  const allSkills = [
    { name: "React", icon: <FaReact className="w-full h-full" />, type: "skill" },
    { name: "Django", icon: <SiDjango className="w-full h-full" />, type: "skill" },
    { name: "Python", icon: <SiPython className="w-full h-full" />, type: "skill" },
    { name: "Tailwind", icon: <SiTailwindcss className="w-full h-full" />, type: "skill" },
    { name: "JavaScript", icon: <SiJavascript className="w-full h-full" />, type: "skill" },
    { name: "Node.js", icon: <DiNodejsSmall className="w-full h-full" />, type: "skill" },
    { name: "MySQL", icon: <SiMysql className="w-full h-full" />, type: "skill" },
    { name: "SQLite", icon: <SiSqlite className="w-full h-full" />, type: "skill" },
    { name: "Git", icon: <SiGit className="w-full h-full" />, type: "tool" },
    { name: "Bootstrap", icon: <SiBootstrap className="w-full h-full" />, type: "tool" },
    { name: "VS Code", icon: <VscVscode className="w-full h-full" />, type: "tool" },
    { name: "Postman", icon: <SiPostman className="w-full h-full" />, type: "tool" },
    { name: "Figma", icon: <SiFigma className="w-full h-full" />, type: "tool" },
    { name: "jQuery", icon: <SiJquery className="w-full h-full" />, type: "tool" },
  ];

  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="skills-container py-20 bg-transparent overflow-hidden relative z-10" id="skills">
      <div className="w-[90%] xl:w-[70%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-purple-600">Stack</span>
          </h2>
          <div className="h-1.5 w-24 bg-purple-600 mt-6 mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center max-w-4xl mx-auto">
          {allSkills.map((skill, idx) => {
            const isActive = activeSkill === skill.name;

            return (
              <motion.button
                key={idx}
                layout
                onClick={() => setActiveSkill(isActive ? null : skill.name)}
                className={`relative flex items-center justify-center h-16 md:h-20 rounded-full transition-colors duration-300 border backdrop-blur-md overflow-hidden ${
                  isActive
                    ? "bg-purple-600/20 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] text-purple-400 px-6 md:px-8"
                    : "bg-gray-900/50 border-white/10 hover:border-purple-500/50 text-gray-400 hover:text-white w-16 md:w-20"
                }`}
              >
                <motion.div layout className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                  {skill.icon}
                </motion.div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: "auto", marginLeft: 16 }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap flex flex-col items-start overflow-hidden"
                    >
                      <span className="text-lg md:text-xl font-bold text-white leading-tight">
                        {skill.name}
                      </span>
                      <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-purple-400 mt-0.5">
                        {skill.type}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skill;
