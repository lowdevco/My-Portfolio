import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.matchMedia().add(`(pointer: fine) and ${MOTION_OK}`, () => {
      const el = ref.current;
      const ease = { duration: 0.8, ease: "elastic.out(1, 0.4)" };
      const xTo = gsap.quickTo(el, "x", ease);
      const yTo = gsap.quickTo(el, "y", ease);
      const move = (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * strength);
        yTo((e.clientY - r.top - r.height / 2) * strength);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      };
    });
  });

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
