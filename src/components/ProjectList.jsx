import React, { useRef } from "react";
import { SiGithub } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ProjectList({ projects, headingLevel: H = "h3" }) {
  const ref = useRef(null);
  const n = projects.length;

  const { contextSafe } = useGSAP(
    () => {
      gsap.matchMedia().add("(pointer: fine) and (min-width: 768px)", () => {
        const list = ref.current;
        const preview = list.querySelector("[data-preview]");
        gsap.set(preview, { xPercent: -50, yPercent: -50, scale: 0.6, autoAlpha: 0 });
        const xTo = gsap.quickTo(preview, "x", { duration: 0.7, ease: "power3" });
        const yTo = gsap.quickTo(preview, "y", { duration: 0.7, ease: "power3" });
        const move = (e) => {
          const r = list.getBoundingClientRect();
          xTo(e.clientX - r.left);
          yTo(e.clientY - r.top);
        };
        list.addEventListener("pointermove", move);
        return () => list.removeEventListener("pointermove", move);
      });
    },
    { scope: ref },
  );

  const show = contextSafe((i) => {
    gsap.to("[data-preview]", { scale: 1, autoAlpha: 1, duration: 0.5, ease: "expo.out", overwrite: "auto" });
    gsap.to("[data-strip]", { yPercent: (-100 * i) / n, duration: 0.8, ease: "expo.out" });
  });
  const hide = contextSafe(() => gsap.to("[data-preview]", { scale: 0.6, autoAlpha: 0, duration: 0.4, ease: "power3", overwrite: "auto" }));

  return (
    <div ref={ref} className="relative" onPointerLeave={hide}>
      <ul className="border-b border-line [&:hover>li]:opacity-35 [&>li:hover]:!opacity-100">
        {projects.map((p, i) => (
          <li
            key={p.title}
            onPointerEnter={() => show(i)}
            className="group relative border-t border-line transition-opacity duration-500"
          >
            <div data-reveal className="grid grid-cols-12 items-start gap-x-4 gap-y-5 py-8 md:items-center md:py-10">
              <span className="col-span-2 pt-2 font-mono text-xs text-muted md:col-span-1 md:pt-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <img
                src={p.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="col-span-10 aspect-video w-full rounded-xl border border-line object-cover md:hidden"
              />

              <div className="col-span-12 col-start-3 md:col-span-6 md:col-start-auto">
                <H className="text-[clamp(2rem,4.6vw,4.25rem)] font-semibold leading-none tracking-[-0.045em] transition-transform duration-700 ease-[var(--ease-expo)] md:group-hover:translate-x-4">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-accent focus-visible:after:rounded-lg"
                  >
                    {p.title}
                    <span className="sr-only"> — live demo</span>
                  </a>
                </H>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted line-clamp-2">{p.description}</p>
              </div>

              <p className="col-span-12 col-start-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-3 md:col-start-auto">
                {p.tags.join(" / ")}
              </p>

              <div
                onPointerEnter={hide}
                onPointerLeave={() => show(i)}
                className="relative z-30 col-span-12 col-start-3 flex gap-2 md:col-span-2 md:col-start-auto md:justify-end"
              >
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} source code on GitHub`}
                  className="btn btn-ghost size-11 bg-bg px-0"
                >
                  <SiGithub aria-hidden="true" />
                </a>
                <span
                  className="btn btn-ghost size-11 bg-bg px-0 transition-transform duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-bg"
                  aria-hidden="true"
                >
                  <FiArrowUpRight />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div
        data-preview
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 top-0 z-20 hidden aspect-[4/3] w-[26rem] overflow-hidden rounded-xl border border-line shadow-2xl md:block"
      >
        <div data-strip>
          {projects.map((p) => (
            <img key={p.title} src={p.image} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
}
