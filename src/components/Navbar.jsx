import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { gsap, ScrollTrigger, ScrollSmoother, useGSAP, scramble } from "@/lib/gsap";
import { scrollToTarget } from "@/lib/scroll";

const NAV_LINKS = [
  { name: "About", target: "about" },
  { name: "Experience", target: "experience" },
  { name: "Skills", target: "skills" },
  { name: "Projects", target: "projects" },
  { name: "Contact", target: "contact" },
  { name: "Terminal", target: "terminal" },
];

function Navbar() {
  const ref = useRef(null);
  const menuTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [observed, setObserved] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeSection = pathname === "/" ? observed : pathname.slice(1);
  const hrefFor = (t) => (t === "terminal" ? "/terminal" : `/#${t}`);

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setObserved(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ["intro", ...NAV_LINKS.map((l) => l.target)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useGSAP(
    () => {
      gsap.to("[data-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });
      const bar = ref.current.querySelector("[data-bar]");
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => bar.classList.toggle("is-scrolled", self.scroll() > 40),
      });

      menuTl.current = gsap
        .timeline({ paused: true })
        .set("[data-menu]", { autoAlpha: 1 })
        .fromTo(
          "[data-menu]",
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "expo.inOut" },
        )
        .from("[data-menu-link]", { yPercent: 110, duration: 0.8, stagger: 0.06, ease: "expo.out" }, "-=0.3")
        .from("[data-menu-foot]", { autoAlpha: 0, duration: 0.4 }, "-=0.5");
    },
    { scope: ref },
  );

  useEffect(() => {
    const tl = menuTl.current;
    if (!tl) return;
    isOpen ? tl.timeScale(1).play() : tl.timeScale(1.6).reverse();
    ScrollSmoother.get()?.paused(isOpen);
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const go = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    if (target === "terminal") navigate("/terminal");
    else if (pathname === "/") scrollToTarget(target);
    else navigate(target === "projects" ? "/projects" : `/#${target}`);
  };

  return (
    <header ref={ref} className="fixed inset-x-0 top-0 z-[1000]">
      <div
        data-progress
        className="absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-accent"
        aria-hidden="true"
      />

      <div
        data-bar
        className="relative z-10 border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-500 [&.is-scrolled]:border-line [&.is-scrolled]:bg-bg/70 [&.is-scrolled]:backdrop-blur-xl"
      >
        <nav aria-label="Main Navigation" className="wrap flex h-18 items-center justify-between">
          <Link
            to="/"
            onClick={(e) => {
              setIsOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                scrollToTarget(0);
              }
            }}
            className="relative z-[1001] whitespace-nowrap font-mono text-sm tracking-tight"
            aria-label="lowdevco — Muhammad Irfan, go to homepage"
          >
            <span className="text-accent">&gt;_</span> lowdevco
          </Link>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.target;
              return (
                <li key={link.name}>
                  <a
                    href={hrefFor(link.target)}
                    onClick={(e) => go(e, link.target)}
                    onMouseEnter={(e) => scramble(e.currentTarget.lastChild, link.name)}
                    aria-current={isActive ? "location" : undefined}
                    className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    <span className={`mr-1.5 hidden xl:inline ${isActive ? "text-accent" : "text-muted/60"}`}>0{i + 1}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="/#contact"
            onClick={(e) => go(e, "contact")}
            className="btn btn-ghost hidden lg:inline-flex h-10 whitespace-nowrap px-5 text-sm"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
              <span className="relative size-2 rounded-full bg-ok" />
            </span>
            <span className="roll">
              <span data-text="Let's talk">Let's talk</span>
            </span>
          </a>

          <button
            className="group relative z-[1001] grid size-12 place-items-center rounded-full border border-line bg-bg/60 backdrop-blur-md transition-colors hover:border-accent lg:hidden"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span
                className={`absolute right-0 h-0.5 w-5 rounded-full bg-fg transition-all duration-500 ease-[var(--ease-expo)] ${
                  isOpen ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute right-0 h-0.5 rounded-full bg-accent transition-all duration-500 ease-[var(--ease-expo)] ${
                  isOpen ? "bottom-[5px] w-5 -rotate-45" : "bottom-0 w-3 group-hover:w-5"
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        data-menu
        className="invisible fixed inset-0 bg-bg lg:hidden flex flex-col justify-between pt-28 pb-10 wrap"
      >
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <li key={link.name} className="overflow-hidden">
              <a
                data-menu-link
                href={hrefFor(link.target)}
                onClick={(e) => go(e, link.target)}
                className="flex items-baseline gap-4 text-[clamp(2.75rem,13vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div data-menu-foot className="label flex justify-between">
          <span>Kerala, IN</span>
          <a href="mailto:muhammadirfank2007@gmail.com" className="text-fg">
            Say hello ↗
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
