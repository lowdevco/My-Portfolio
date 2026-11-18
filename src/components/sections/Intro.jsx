import React, { useRef } from "react";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import ProfileCard from "@/components/ProfileCard";
import Magnetic from "@/components/Magnetic";
import LocalTime from "@/components/LocalTime";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useSmoothScroll } from "@/lib/scroll";
import resumeFile from "@/assets/Resume/Resume.pdf";

const TAGLINE =
  "I build fast, scalable web apps with React, Django & Python — from database schema to the last pixel.";

function Intro({ delay = 0.2 }) {
  const scroll = useSmoothScroll();
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const name = SplitText.create("[data-hero-name]", { type: "words,chars", mask: "chars" });
        const typed = ref.current.querySelector("[data-typed]");
        gsap.set(typed, { textContent: "" });

        gsap
          .timeline({ delay })
          .from(name.chars, { yPercent: 120, duration: 1.4, ease: "expo.out", stagger: 0.04 })
          .from("[data-hero-fade]", { autoAlpha: 0, y: 24, duration: 1, ease: "expo.out", stagger: 0.08 }, "-=1.1")
          .from("[data-code-line]", { autoAlpha: 0, x: -12, duration: 0.5, stagger: 0.05, ease: "power3.out" }, "-=0.8")
          .to(typed, { duration: 1.6, scrambleText: { text: TAGLINE, chars: "01<>/{}", speed: 0.5 } }, "-=1");

        gsap.to("[data-hero-name]", {
          yPercent: -20,
          opacity: 0.2,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
        });

        const xTo = gsap.quickTo(ref.current, "--mx", { duration: 0.8, ease: "power3" });
        const yTo = gsap.quickTo(ref.current, "--my", { duration: 0.8, ease: "power3" });
        const move = (e) => {
          const r = ref.current.getBoundingClientRect();
          xTo(e.clientX - r.left);
          yTo(e.clientY - r.top);
        };
        ref.current.addEventListener("pointermove", move);
        return () => ref.current?.removeEventListener("pointermove", move);
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden pt-32 pb-16 [--mx:900] [--my:300]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_circle_at_calc(var(--mx)*1px)_calc(var(--my)*1px),rgba(165,122,255,0.14),transparent_70%)]"
      />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-6 xl:col-span-7">
          <div data-hero-fade className="label flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2.5">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
                <span className="relative size-2 rounded-full bg-ok" />
              </span>
              Available for work
            </span>
            <span>
              Kerala, IN — <LocalTime />
            </span>
          </div>

          <h1 className="mt-10">
            <span data-hero-fade className="block font-mono text-sm md:text-base text-accent">
              <span aria-hidden="true">// </span>Full Stack Developer
            </span>{" "}
            <span
              data-hero-name
              className="mt-5 block text-[clamp(3.25rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.06em]"
            >
              Muhammad
            </span>{" "}
            <span
              data-hero-name
              className="block text-[clamp(3.25rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.06em]"
            >
              Irfan<span className="text-accent">.</span>
            </span>
          </h1>

          <p data-hero-fade className="mt-10 font-mono text-sm text-muted">
            <span className="text-accent">~$</span> whoami
          </p>
          <p className="mt-3 max-w-xl text-lg md:text-xl leading-relaxed text-fg/85 min-h-[3.5em]">
            <span data-typed>{TAGLINE}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <button onClick={() => scroll("contact")} className="btn btn-primary">
                <span className="roll">
                  <span data-text="Let's work together">Let's work together</span>
                </span>
                <FiArrowDownRight aria-hidden="true" />
              </button>
            </Magnetic>
            <Magnetic>
              <a href={resumeFile} download="Irfan-Resume.pdf" className="btn btn-ghost">
                <span className="roll">
                  <span data-text="Résumé">Résumé</span>
                </span>
                <FiDownload aria-hidden="true" />
              </a>
            </Magnetic>
            {[
              { label: "GitHub Profile", href: "https://github.com/lowdevco", Icon: SiGithub },
              { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/muhammadirfank/", Icon: SiLinkedin },
            ].map(({ label, href, Icon }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="btn btn-ghost size-13 px-0"
                >
                  <Icon aria-hidden="true" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div data-hero-fade className="min-w-0 lg:col-span-6 xl:col-span-5">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default Intro;
