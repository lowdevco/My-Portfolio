import React from "react";
import "../css/about.css";
import PhotoCard from "@/components/PhotoCard";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-12 w-[90%] xl:w-[70%] my-24 mx-auto relative z-10">
      {/* Text Section */}
      <div className="order-2 lg:order-1 text-center lg:text-left">
        <h1 className="about-title text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          About <span className="text-purple-600">The Developer</span>
        </h1>
        <div className="h-1.5 w-20 bg-purple-600 my-6 mx-auto lg:mx-0 rounded-full" />

        <p className="about-description text-xl md:text-2xl font-medium text-gray-400 leading-relaxed">
          Hi, I'm <span className="text-white">Muhammad Irfan</span>. I am a
          passionate Full Stack Developer with a strong dedication to crafting
          high-performance, user-centric web applications.
          <br />
          <br />
          With a solid foundation in both front-end and back-end technologies, I
          thrive on creating seamless digital experiences that captivate users
          and drive results. My commitment to excellence fuels my ability to
          deliver innovative solutions for the evolving digital landscape.
        </p>
      </div>

      {/* Photo Section */}
      <div className="order-1 lg:order-2 flex justify-center perspective-2000">
        <PhotoCard />
      </div>
    </div>
  );
}

export default About;
