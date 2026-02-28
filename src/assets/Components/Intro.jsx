import React from "react";
import "../css/intro.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import ProfileCard from "@/components/ProfileCard";

function Intro() {
  return (
    <>
      <div className="intro-container h-[99.9vh] flex items-center justify-center">
        <div className="grid grid-cols-1 gap-20 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
          <div className="intro-content">
            <button className="intro-button text-white rounded-2xl bg-blue-500 p-2">
              <h6 className="font-semibold">WELCOME TO MY PORTFOLIO</h6>
            </button>
            <div>
              <h1 className="intro-title text-7xl font-bold mt-4">
                Crafting <span className="text-blue-500">Digital</span>
              </h1>
              <h1 className="intro-title text-6xl font-bold">Masterpieces</h1>
            </div>
            <p className="intro-description mt-4 text-1xl font-bold text-gray-600">
              Hi i am <span className="text-blue-500">Muhammad Irfan</span>, a
              passionate{" "}
              <span className="text-blue-500">Full Stack Developer</span>
              <br />
              Deditcated to building High Performance , User centric Web <br />{" "}
              applications.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="intro-button text-white rounded-2xl bg-gray-800 p-2 flex items-center gap-2">
                <FaGithub size={30} color="#ffff" />
              </button>
              <button className="intro-button text-white rounded-2xl bg-gray-800 p-2 flex items-center gap-2">
                <FaLinkedin size={30} color="#ffff" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-7 mt-5">
              <button className="intro-button text-white rounded-2xl bg-blue-500 p-2">
                Contact Me
              </button>
              <button className="intro-button text-white rounded-2xl bg-gray-800 p-2 flex items-center gap-4 text-center pl-17">
                Get Resume
                <FaDownload size={15} color="#ffff" />
              </button>
            </div>
          </div>

          <div className="left flex items-center justify-center">
            <ProfileCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
