import { ScrollSmoother, prefersMotion } from "@/lib/gsap";

export const scrollToTarget = (target) => {
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (target !== 0 && !el) return;
  const smoother = ScrollSmoother.get();
  if (smoother) return smoother.scrollTo(el ?? 0, true, "top top");
  const behavior = prefersMotion() ? "smooth" : "auto";
  el ? el.scrollIntoView({ behavior, block: "start" }) : window.scrollTo({ top: 0, behavior });
};

export const useSmoothScroll = () => scrollToTarget;
