import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import LocalTime from "@/components/LocalTime";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { scrollToTarget } from "@/lib/scroll";
import resumeFile from "@/assets/Resume/Resume.pdf";
import { EMAIL, SOCIALS } from "@/data/profile";


function Footer() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const split = SplitText.create("[data-wordmark]", { type: "chars", mask: "chars" });
        gsap.from(split.chars, {
          yPercent: 100,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 85%", end: "bottom bottom", scrub: 0.6 },
        });
      });
    },
    { scope: ref },
  );

  const linkCls = "text-fg/80 transition-colors hover:text-accent";

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line pt-20">
      <div className="wrap grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-5">
          <p className="label">Have an idea?</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 inline-block text-2xl md:text-3xl font-semibold tracking-tight transition-colors hover:text-accent"
          >
            Let's talk ↗
          </a>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <p className="label">Index</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className={linkCls}>Home</Link></li>
            <li><Link to="/projects" className={linkCls}>Projects</Link></li>
            <li><Link to="/terminal" className={linkCls}>Terminal</Link></li>
            <li><a href={resumeFile} download="Irfan-Resume.pdf" className={linkCls}>Résumé</a></li>
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <p className="label">Socials</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${s.name} profile`}
                  className={linkCls}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-3 lg:flex-col lg:items-end lg:justify-start">
          <p className="label">
            Local time — <LocalTime />
          </p>
          <button
            onClick={() => scrollToTarget(0)}
            className="btn btn-ghost size-12 px-0"
            aria-label="Back to top"
          >
            <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>

      <p
        data-wordmark
        aria-hidden="true"
        className="mt-16 select-none whitespace-nowrap text-center text-[21vw] font-semibold leading-[0.78] tracking-[-0.075em] text-fg"
      >
        lowdevco<span className="text-accent">.</span>
      </p>

      <div className="wrap flex flex-col gap-2 border-t border-line py-6 font-mono text-[11px] text-muted sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Muhammad Irfan — Full Stack Developer</span>
        <span>
          Built with <span className="text-accent">React</span> + <span className="text-accent">GSAP</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
