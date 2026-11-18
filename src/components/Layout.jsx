import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap, ScrollSmoother, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { scrollToTarget } from "@/lib/scroll";

// Rendered first so the smoother exists before any child creates a ScrollTrigger
// (layout effects run child-first, siblings in order).
function Smoother() {
  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.1,
        effects: true,
        smoothTouch: false,
      });
      // Focusing an off-screen element (Tab key, typing) makes the browser scroll the
      // overflow:hidden wrapper itself; hand that offset back to the smoother.
      const wrapper = smoother.wrapper();
      const onScroll = () => {
        const y = wrapper.scrollTop;
        if (!y) return;
        wrapper.scrollTop = 0;
        smoother.scrollTop(smoother.scrollTop() + y);
      };
      wrapper.addEventListener("scroll", onScroll);
      return () => wrapper.removeEventListener("scroll", onScroll);
    });
  });
  return null;
}

// Opt-in scroll animations: data-split (lines), data-reveal (fade up), data-words (scrubbed words).
export default function Layout({ children }) {
  const root = useRef(null);
  const { hash } = useLocation();

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.utils.toArray("[data-split]").forEach((el) =>
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.2,
                stagger: 0.09,
                ease: "expo.out",
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              }),
          }),
        );

        gsap.utils.toArray("[data-reveal]").forEach((el) =>
          gsap.from(el, {
            y: 40,
            autoAlpha: 0,
            duration: 1.1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }),
        );

        gsap.utils.toArray("[data-words]").forEach((el) =>
          SplitText.create(el, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.words, {
                opacity: 0.15,
                stagger: 0.1,
                ease: "none",
                scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true },
              }),
          }),
        );
      });

      if (hash) setTimeout(() => scrollToTarget(hash.slice(1)), 150);
    },
    { scope: root },
  );

  return (
    <>
      <Smoother />
      <Navbar />
      <div id="smooth-wrapper" ref={root}>
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
