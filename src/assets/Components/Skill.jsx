import React from "react";
import Slider from "react-slick";


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
    { name: "React", icon: `⚛️` },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Tailwind", icon: "🌊" },
    { name: "JavaScript", icon: "📜" },
    { name: "MongoDB", icon: "🍃" },
  ];

  const tools = [
    { name: "Git", icon: "🔧" },
    { name: "Bootstrap", icon: "🐳" },
    { name: "VS Code", icon: "🖥️" },
    { name: "Postman", icon: "📬" },
    { name: "Figma", icon: "🎨" },
    { name: "Vite", icon: "💳" },
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
