import React from "react";
import ExperienceItem from "@/components/ExperienceItem";

function Experience() {
  const experiences = [
    // Note: To add more experience, Add another object to this array with the appropriate details.

    {
      company: "Freelance / Personal Projects",
      role: "Full Stack Developer",
      duration: "June 2025 - April 2026",
      description:
        "Developing end-to-end web applications including an e-commerce platform with React, focusing on state management and payment integration.",
      skills: ["React", "Node.js", "Tailwind CSS", "Razorpay"],
    },

    {
      company: "Xeventure IT Solutions",
      role: "Full Stack Developer Intern",
      duration: "May 2026 - Present",
      description:
        "Collaborating with senior developers to build and maintain full-stack web applications using React and Django. I assist in translating complex design requirements into functional code while optimizing frontend performance with Tailwind CSS. My role involves developing robust REST APIs and ensuring seamless integration between the database and user interface for Webapps",
      skills: ["React", "Django", "Tailwind CSS", "REST API", "MySQL"],
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
