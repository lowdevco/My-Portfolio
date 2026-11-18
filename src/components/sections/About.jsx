import React from "react";
import PhotoCard from "@/components/PhotoCard";
import SectionHead from "@/components/SectionHead";

const FACTS = [
  { k: "location", v: '"Kerala, India"' },
  { k: "focus", v: '"Full Stack Web Apps"' },
  { k: "currently", v: '"Xeventure IT Solutions"' },
];

function About() {
  return (
    <div className="wrap py-28 md:py-40">
      <SectionHead
        index="01"
        path="~/about"
        title={
          <>
            Behind the <span className="text-accent">code.</span>
          </>
        }
      />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <PhotoCard />
        </div>

        <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
          <p data-words className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.025em]">
            Hi, I'm Muhammad Irfan — a Full Stack Developer passionate about building the future, one
            high-performance, user-centric web application at a time.
          </p>
          <p data-reveal className="mt-10 max-w-xl text-lg leading-relaxed text-muted">
            With a solid foundation in both front-end and back-end technologies, I thrive on creating
            seamless digital experiences that captivate users and drive results. My commitment to
            excellence fuels my ability to deliver innovative solutions for the evolving digital
            landscape.
          </p>

          <dl data-reveal className="mt-12 border-t border-line font-mono text-sm">
            {FACTS.map(({ k, v }) => (
              <div key={k} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4">
                <dt className="text-muted">{k}:</dt>
                <dd className="text-[#a6e3a1]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default About;
