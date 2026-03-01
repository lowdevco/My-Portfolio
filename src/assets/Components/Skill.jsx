import React from "react";
import Slider from "react-slick";
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
} from "react-icons/si";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/skill.css";

function Skill() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2, 
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const skills = [
    { name: "React", icon: <FaReact className="text-white" /> },
    { name: "Node.js", icon: <DiNodejsSmall className="text-white" /> },
    { name: "Python", icon: <SiPython className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-white" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-white" /> },
  ];

  const tools = [
    { name: "Git", icon: <SiGit className="text-white" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-white" /> },
    { name: "VS Code", icon: <VscVscode className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-white" /> },
  ];

  return (
    <div className="skills-container py-20 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Technical <span className="text-purple-800">Stack</span>
        </h2>

        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
                <span className="text-4xl mb-3">{skill.icon}</span>
                <p className="text-gray-300 font-mono font-medium">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settings} className="mt-10">
          {tools.map((tools, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-900/50 border border-white/5 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
                <span className="text-4xl mb-3">{tools.icon}</span>
                <p className="text-gray-300 font-mono font-medium">
                  {tools.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Skill;
