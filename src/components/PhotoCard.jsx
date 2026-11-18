import React, { useRef } from "react";
import PFP from "../assets/image/Photo.webp";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

function PhotoCard() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const frame = ref.current.querySelector("[data-frame]");
        gsap
          .timeline({ scrollTrigger: { trigger: frame, start: "top 80%", once: true } })
          .from(frame, { clipPath: "inset(100% 0 0 0)", duration: 1.4, ease: "expo.inOut" })
          .from("img", { scale: 1.4, duration: 1.8, ease: "expo.out" }, 0.2);
        gsap.to("img", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <figure ref={ref} className="w-full max-w-[460px] mx-auto lg:mx-0">
      <div
        data-frame
        className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface"
      >
        <img
          src={PFP}
          alt="Portrait of Muhammad Irfan"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-[115%] w-full object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
        />
        <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-fg/80 mix-blend-difference">
          [ irfan.webp ]
        </span>
      </div>
      <figcaption className="label mt-4 flex justify-between">
        <span>Fig. 01</span>
        <span>Kerala, India</span>
      </figcaption>
    </figure>
  );
}

export default PhotoCard;
