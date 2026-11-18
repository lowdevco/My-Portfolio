import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText, ScrambleTextPlugin);

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const prefersMotion = () => window.matchMedia(MOTION_OK).matches;

export const scramble = (el, text) =>
  prefersMotion() &&
  gsap.to(el, {
    duration: 0.6,
    overwrite: true,
    scrambleText: { text, chars: "01<>/{}[]=+*#", speed: 0.6 },
  });

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, useGSAP };
