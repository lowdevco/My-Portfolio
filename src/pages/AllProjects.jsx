import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import LiquidEther from "../components/LiquidEther";
import Footer from "../assets/Components/Footer";
import Navbar from "../assets/Components/Navbar";

function AllProjects() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="fixed inset-0 -z-10 bg-[#060606]">
        <LiquidEther
          colors={["#2563eb", "#3b82f6", "#000000"]}
          mouseForce={20}
          autoDemo={true}
        />
      </div>

      <Navbar />

      <div className="flex-grow pt-32 pb-20 px-6 w-[90%] xl:w-[70%] mx-auto relative z-10">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            All <span className="text-purple-600">Projects</span>
          </h1>
          <div className="h-1.5 w-24 bg-purple-600 mt-6 rounded-full" />
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A complete collection of my web applications, open-source projects, and experiments.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default AllProjects;
