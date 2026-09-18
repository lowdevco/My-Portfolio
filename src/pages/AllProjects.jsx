import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import Footer from "../assets/Components/Footer";
import Navbar from "../assets/Components/Navbar";

function AllProjects() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#000000] text-[#f5f5f7] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <Navbar />
      </div>

      <main className="flex-grow pt-32 pb-20 px-6 w-full max-w-7xl mx-auto relative z-10">
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#f5f5f7] tracking-tight">
            All <span className="text-[#A57AFF]">Projects</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#A57AFF] mt-6 rounded-full" />
          <p className="mt-6 text-[#86868b] text-lg md:text-xl max-w-2xl leading-relaxed">
            A complete collection of my web applications, open-source projects, and experiments.
          </p>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }} 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          role="list"
          aria-label="List of all projects"
        >
          {projects.map((project, index) => (
            <div key={index} role="listitem">
              <ProjectCard {...project} />
            </div>
          ))}
        </motion.div>
      </main>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-8">
        <Footer />
      </div>
    </div>
  );
}

export default AllProjects;
