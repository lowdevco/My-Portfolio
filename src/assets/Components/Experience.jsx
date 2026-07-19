import React from "react";
import ExperienceItem from "@/components/ExperienceItem";

function Experience() {
  const experiences = [
    {
      company: "Freelance / Personal Projects",
      role: "Full Stack Developer",
      duration: "June 2025 - April 2026",
      description: [
        "Developed end-to-end web applications including an e-commerce platform with React, focusing on state management and user experience. Worked on various personal projects to expand portfolio, while simultaneously studying new languages and frameworks to enhance technical expertise.",
      ],
      skills: ["React", "Django", "python", "JavaScript", "Tailwind CSS"],
    },
    {
      company: "Xeventure IT Solutions",
      role: "Full Stack Development Intern",
      duration: "May 2026 - July 2026",
      description: [
        "Collaborated with senior developers to design, build, and deploy a full-featured website and CMS.",
        "Contributed to developing functional full-stack web applications across frontend and backend components.",
        "Built a billing and maintenance web application to streamline invoicing and service-tracking workflows.",
      ],
      skills: ["React", "Django", "Tailwind CSS", "REST API", "MySQL"],
    },
    {
      company: "Xeventure IT Solutions",
      role: "Python Full Stack Developer",
      duration: "July 2026 - Present",
      description: [
        "Designed, developed, and deployed production-grade full-stack applications using Python, Django, and React, with a focus on scalable architecture and maintainable code.",
        "Owned end-to-end feature delivery from database schema design through responsive frontend implementation, while participating in code reviews and deployment workflows to improve application reliability and maintainability.",
      ],
      skills: ["React", "Django", "SQL", "DevOps", "Tutoring"],
    },
  ];

  return (
    <section className="experience-section py-20 px-6 w-[90%] xl:w-[70%] mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Professional <span className="text-purple-800">Journey</span>
        </h2>
        <div className="h-1.5 w-24 bg-purple-800 mt-4 rounded-full" />
      </div>

      <div className="flex flex-col px-0 md:px-10 lg:px-20">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
