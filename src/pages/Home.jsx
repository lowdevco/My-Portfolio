import React from "react";
import About from "../assets/Components/About";
import Contact from "../assets/Components/Contact";
import Experience from "../assets/Components/Experience";
import Footer from "../assets/Components/Footer";
import Intro from "../assets/Components/Intro";
import Navbar from "../assets/Components/Navbar";
import Project from "../assets/Components/Project";
import Skill from "../assets/Components/Skill";

function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-[#000000] text-[#f5f5f7] overflow-hidden">
        
        {/* Apple-like polished container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <Navbar />
          <main>
            <section id="intro" aria-label="Introduction">
              <Intro />
            </section>
            <section id="about" aria-label="About Me">
              <About />
            </section>
            <section id="experience" aria-label="Work Experience">
              <Experience />
            </section>
            <section id="skills" aria-label="Technical Skills">
              <Skill />
            </section>
            <section id="projects" aria-label="Featured Projects">
              <Project />
            </section>
            <section id="contact" aria-label="Contact Information">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
