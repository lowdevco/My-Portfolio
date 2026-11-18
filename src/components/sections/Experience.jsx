import React, { useRef } from "react";
import ExperienceItem from "@/components/ExperienceItem";
import SectionHead from "@/components/SectionHead";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { experiences } from "@/data/experience";


function Experience() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from("[data-branch]", {
          scaleY: 0,
          ease: "none",
          scrollTrigger: { trigger: "[data-log]", start: "top 70%", end: "bottom 70%", scrub: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="wrap py-28 md:py-40">
      <SectionHead
        index="02"
        path="git log --oneline"
        title={
          <>
            Professional <span className="text-accent">journey.</span>
          </>
        }
      />

      <div data-log className="relative">
        <span className="absolute left-0 top-0 h-full w-px bg-line" aria-hidden="true" />
        <span data-branch className="absolute left-0 top-0 h-full w-px origin-top bg-accent" aria-hidden="true" />
        <ol>
          {experiences.map((exp) => (
            <ExperienceItem key={exp.hash} {...exp} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Experience;
