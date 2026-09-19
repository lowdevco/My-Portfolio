import React from "react";
import "../css/project.css";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

function Project() {

  // Filters for projects marked with "featured: true" in data/projects.js (up to 4 max)
  
  const featuredProjects = projects.filter(project => project.featured).slice(0, 4);

  return (
    <section className="py-24 w-full relative z-10">
      <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f5f5f7] tracking-tight">
            Featured <span className="text-[#A57AFF]">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#A57AFF] mt-6 rounded-full mx-auto lg:mx-0" />
        </div>
        <Link 
          to="/projects"
          className="px-6 py-3 rounded-full bg-[#111113] text-[#f5f5f7] border border-white/10 hover:border-[#A57AFF]/50 hover:text-[#A57AFF] transition-all duration-300 font-semibold tracking-wide shadow-lg flex items-center gap-2 group cursor-pointer"
        >
          View All Projects 
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
}

export default Project;
