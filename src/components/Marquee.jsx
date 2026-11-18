import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";

const WORDS = ["React", "Django", "Python", "JavaScript", "Tailwind CSS", "Node.js", "REST APIs", "WebSockets", "MySQL", "Git"];

export default function Marquee() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const loop = gsap.to("[data-track]", { xPercent: -50, ease: "none", duration: 40, repeat: -1 });
        const skew = gsap.quickTo("[data-track]", "skewX", { duration: 0.5, ease: "power3" });
        ScrollTrigger.create({
          onUpdate(self) {
            const v = self.getVelocity();
            skew(gsap.utils.clamp(-8, 8, v / -300));
            gsap.to(loop, {
              timeScale: 1 + Math.min(Math.abs(v) / 250, 5),
              duration: 0.2,
              overwrite: true,
              onComplete: () => gsap.to(loop, { timeScale: 1, duration: 1.2, overwrite: true }),
            });
          },
        });
      });
    },
    { scope: ref },
  );

  const row = WORDS.map((w, i) => (
    <span key={i} className="flex items-center gap-10 pr-10">
      <span className={i % 2 ? "text-outline" : ""}>{w}</span>
      <span className="text-accent text-[0.4em]">✦</span>
    </span>
  ));

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="overflow-hidden border-y border-line py-6 md:py-8 select-none"
    >
      <div
        data-track
        className="flex w-max whitespace-nowrap text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-none tracking-[-0.04em]"
      >
        {row}
        {row}
      </div>
    </div>
  );
}
