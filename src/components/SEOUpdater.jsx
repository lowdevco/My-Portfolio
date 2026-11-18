import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://lowdevco.vercel.app";

// Tags that change per route. The values in index.html are the homepage defaults.
const TAGS = {
  title: null,
  description: 'meta[name="description"]',
  robots: 'meta[name="robots"]',
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  ogUrl: 'meta[property="og:url"]',
  twTitle: 'meta[property="twitter:title"]',
  twDescription: 'meta[property="twitter:description"]',
  twUrl: 'meta[property="twitter:url"]',
};
const DEFAULTS = Object.fromEntries(
  Object.entries(TAGS).map(([k, sel]) => [k, sel ? document.querySelector(sel)?.content : document.title]),
);

const PAGES = {
  "/": {},
  "/projects": {
    title: "Projects | Muhammad Irfan — Full Stack Developer",
    description:
      "Web applications built by Muhammad Irfan with React, Django and Python — including Xeflow, ResoniQ, Movie Box and Orgado.",
  },
  "/terminal": {
    title: "Terminal | Muhammad Irfan — Full Stack Developer",
    description:
      "Explore Muhammad Irfan's portfolio from an interactive terminal: projects, skills, experience and contact, the developer way.",
  },
};
const NOT_FOUND = { title: "404 — Page not found | Muhammad Irfan", robots: "noindex, follow" };

function SEOUpdater() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = PAGES[path] ?? NOT_FOUND;
    const url = `${SITE}${path === "/" ? "/" : path}`;
    const title = page.title ?? DEFAULTS.title;
    const desc = page.description;

    const values = {
      title,
      description: desc ?? DEFAULTS.description,
      robots: page.robots ?? DEFAULTS.robots,
      ogTitle: page.title ?? DEFAULTS.ogTitle,
      ogDescription: desc ?? DEFAULTS.ogDescription,
      ogUrl: url,
      twTitle: page.title ?? DEFAULTS.twTitle,
      twDescription: desc ?? DEFAULTS.twDescription,
      twUrl: url,
    };
    document.title = title;
    for (const [k, sel] of Object.entries(TAGS)) {
      if (sel) document.querySelector(sel)?.setAttribute("content", values[k]);
    }

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [pathname]);

  return null;
}

export default SEOUpdater;
