import "./App.css";
import About from "./assets/Components/About";
import Contact from "./assets/Components/Contact";
import Experience from "./assets/Components/Experience";
import Footer from "./assets/Components/Footer";
import Intro from "./assets/Components/Intro";
import Navbar from "./assets/Components/Navbar";
import Project from "./assets/Components/Project";
import Skill from "./assets/Components/Skill";
import LiquidEther from "./components/LiquidEther";

function App() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        <div className="fixed inset-0 -z-10 bg-[#060606]">
          <LiquidEther
            colors={["#2563eb", "#3b82f6", "#000000"]}
            mouseForce={20}
            autoDemo={true}
          />
        </div>

        <div className="relative z-10">
          <Navbar />
          <section id="intro">
            <Intro />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skill />
          </section>
          <section id="projects">
            <Project />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
