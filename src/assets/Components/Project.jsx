import React from "react";
import "../css/project.css";
import ProjectCard from "@/components/ProjectCard";
import promyc from "../image/project/promyc.png"
import portfolio from "../image/project/portfolio.png"
import weather from "../image/project/weather.png"
import orgado from "../image/project/orgado.png"

function Project() {
  const myProjects = [
    // To add projects add another Object
    {
      title: "Orgado E-Commerce",
      description:
        "A full-stack platform for organic products featuring a Node.js backend and Razorpay integration.",
      tags: ["React", "Node.js", "Express", "Razorpay"],
      github: "https://github.com/lowdevco/Orgado",
      link: "https://orgado-zeta.vercel.app/",
      image: orgado,
    },
    {
      title: "Weather Webapp",
      description:
        "A high-performance weather engine providing real-time meteorological data and environmental analytics through a clean, glassmorphic interface.",
      tags: ["HTML", "Tailwind CSS", "JS", "API"],
      github: "https://github.com/lowdevco/Wheather ",
      link: "https://lowdevco.github.io/Wheather/",
      image: weather,
    },
    {
      title: "Pro MYC",
      description:
        "Pro-myc, is a professional multi-section landing page for a biotech-driven vegan mycoprotein ingredient. It features a modern, high-contrast aesthetic designed to showcase sustainable food technology.",
      tags: ["HTML", "Bootstrap"],
      github: "https://github.com/lowdevco/Pro-myc",
      link: "#https://lowdevco.github.io/Pro-myc/",
      image: promyc,
    },
    {
      title: "Portfolio",
      description:
        "A high-performance personal portfolio built with Vite, featuring custom 3D animations and WebGL backgrounds.",
      tags: ["React", "Tailwind CSS", "Vite", "React Bit"],
      github: "https://github.com/lowdevco/My-Portfolio ",
      link: "https://lowdevco.github.io/Wheather/",
      image: portfolio,
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-5xl font-bold text-white">
          Featured <span className="text-purple-800">Projects</span>
        </h2>
        <div className="h-1.5 w-24 bg-purple-800 mt-4 rounded-full mx-auto lg:mx-0" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Project;
