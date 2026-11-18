import React, { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import WindowBar from "@/components/WindowBar";

const C = {
  kw: "text-[#ff7ab2]",
  ty: "text-[#e5c07b]",
  key: "text-[#7dd3fc]",
  str: "text-[#a6e3a1]",
  fn: "text-accent",
  p: "text-fg/60",
};

const LINES = [
  [["kw", "class "], ["ty", "Developer"], ["p", ":"]],
  [["key", "    name"], ["p", " = "], ["str", '"Muhammad Irfan"']],
  [["key", "    role"], ["p", " = "], ["str", '"Full Stack Developer"']],
  [["key", "    stack"], ["p", " = ["], ["str", '"Python"'], ["p", ", "], ["str", '"Django"'], ["p", ", "], ["str", '"React"'], ["p", "]"]],
  [["key", "    location"], ["p", " = "], ["str", '"Kerala, IN"']],
  [["key", "    available"], ["p", " = "], ["kw", "True"]],
  [],
  [["kw", "    def "], ["fn", "ship"], ["p", "("], ["key", "self"], ["p", ") -> "], ["ty", "str"], ["p", ":"]],
  [["kw", "        return "], ["str", '"Build with purpose"']],
  [],
  [["kw", "if "], ["key", "__name__"], ["p", " == "], ["str", '"__main__"'], ["p", ":"]],
  [["p", "    "], ["ty", "Developer"], ["p", "()."], ["fn", "ship"], ["p", "()"]],
];

function ProfileCard() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.matchMedia().add(`(pointer: fine) and ${MOTION_OK}`, () => {
      const el = ref.current;
      gsap.set(el, { transformPerspective: 1000 });
      const rx = gsap.quickTo(el, "rotationX", { duration: 0.8, ease: "power3" });
      const ry = gsap.quickTo(el, "rotationY", { duration: 0.8, ease: "power3" });
      const move = (e) => {
        const r = el.getBoundingClientRect();
        rx(((e.clientY - r.top) / r.height - 0.5) * -8);
        ry(((e.clientX - r.left) / r.width - 0.5) * 8);
      };
      const leave = () => {
        rx(0);
        ry(0);
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
    <div
      ref={ref}
      className="w-full overflow-hidden rounded-2xl border border-line bg-surface/80 backdrop-blur-md shadow-[0_40px_120px_-40px_rgba(165,122,255,0.35)]"
    >
      <WindowBar title="developer.py" meta="UTF-8 · Python" />

      <pre className="overflow-x-auto p-5 font-mono text-[12px] sm:text-[13px] lg:text-[12px] xl:text-[13px] leading-[1.9]">
        <code>
          {LINES.map((tokens, i) => (
            <span key={i} data-code-line className="flex">
              <span className="w-8 shrink-0 select-none text-muted/50" aria-hidden="true">
                {i + 1}
              </span>
              <span className={i === LINES.length - 1 ? "caret" : ""}>
                {tokens.map(([c, t], j) => (
                  <span key={j} className={C[c]}>
                    {t}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export default ProfileCard;
