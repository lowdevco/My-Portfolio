import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export const PRELOADER_SECONDS = 1.5;

export default function Preloader() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const count = { v: 0 };
      const num = ref.current.querySelector("[data-num]");
      gsap
        .timeline({
          onComplete: () => {
            sessionStorage.setItem("booted", "1");
            gsap.set(ref.current, { display: "none" });
          },
        })
        .from("[data-line]", { autoAlpha: 0, x: -10, stagger: 0.18, duration: 0.3 })
        .to(
          count,
          {
            v: 100,
            duration: 1.1,
            ease: "power2.inOut",
            onUpdate: () => (num.textContent = String(Math.round(count.v)).padStart(3, "0")),
          },
          0,
        )
        .to(ref.current, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "+=0.1");
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-[2000] flex flex-col justify-between bg-bg p-6 md:p-10 font-mono text-xs md:text-sm text-muted"
    >
      <div className="space-y-1.5">
        <p data-line>
          <span className="text-accent">$</span> npm run lowdevco
        </p>
        <p data-line>&gt; compiling components…</p>
        <p data-line>&gt; warming up animations…</p>
        <p data-line className="text-ok">✓ ready in 1.2s</p>
      </div>
      <div className="flex items-end justify-between gap-6">
        <span>muhammad irfan — portfolio ©{new Date().getFullYear()}</span>
        <span
          data-num
          className="font-sans text-[clamp(4.5rem,16vw,13rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-fg"
        >
          000
        </span>
      </div>
    </div>
  );
}
