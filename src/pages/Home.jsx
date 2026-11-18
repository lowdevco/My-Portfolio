import React, { useState } from "react";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Intro from "@/components/sections/Intro";
import Project from "@/components/sections/Project";
import Skill from "@/components/sections/Skill";
import Layout from "@/components/Layout";
import Marquee from "@/components/Marquee";
import Preloader, { PRELOADER_SECONDS } from "@/components/Preloader";
import { prefersMotion } from "@/lib/gsap";

function Home() {
  const [showLoader] = useState(() => prefersMotion() && !sessionStorage.getItem("booted"));

  return (
    <>
      {showLoader && <Preloader />}
      <Layout>
        <main>
          <section id="intro" aria-label="Introduction">
            <Intro delay={showLoader ? PRELOADER_SECONDS : 0.2} />
          </section>
          <Marquee />
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
      </Layout>
    </>
  );
}

export default Home;
