import React from "react";
import ExperienceItem from "@/components/ExperienceItem";

function Experience() {
  const experiences = [
  
  // Note: To add more experience, simply add another object to this array with the appropriate details. 
  
    {
      company: "Freelance / Personal Projects",
      role: "Full Stack Developer",
      duration: "Feb 2024 - Present",
      description:
        "Developing end-to-end web applications including an e-commerce platform with React, focusing on state management and payment integration.",
      skills: ["React", "Node.js", "Tailwind CSS", "Razorpay"],
    },

  ];

  return (
    <section className="experience-section py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Professional <span className="text-purple-800">Journey</span>
        </h2>
        <div className="h-1.5 w-24 bg-purple-800 mt-4 rounded-full" />
      </div>

      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
