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
    <section className="py-20 px-6 w-[90%] xl:w-[70%] mx-auto">
      <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-5xl font-bold text-white">
            Featured <span className="text-purple-800">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-purple-800 mt-4 rounded-full mx-auto lg:mx-0" />
        </div>
        <Link to="/projects">
          <button className="px-6 py-3 rounded-full bg-purple-800/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600 hover:text-white transition-all font-semibold tracking-wide shadow-lg">
            View All Projects →
          </button>
        </Link>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
}

export default Project;
