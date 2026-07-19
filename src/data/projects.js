import promyc from "../assets/image/project/promyc.png";
import MovieBox from "../assets/image/project/movie.png";
import weather from "../assets/image/project/weather.png";
import orgado from "../assets/image/project/orgado.png";
import xeflow from "../assets/image/project/xeflow.png";
import resoniq from "../assets/image/project/resoniq.png";
import dailydish from "../assets/image/project/dailydish.png";
import eclat from "../assets/image/project/eclat.png";

// HOW TO SELECT FEATURED PROJECTS FOR THE HOME PAGE:

// Simply add the property `featured: true` to any project object below.
// The featured projects section on the Home page will automatically display
// up to 4 projects that have `featured: true`. All other projects will only
// appear on the "All Projects" page.

export const projects = [
  {
    title: "Orgado E-Commerce",
    description:
      "A modern, responsive e-commerce frontend for organic farm produce. Built with React, Vite, and Bootstrap, featuring a dynamic shopping cart, wishlist, and mobile-friendly navigation.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/lowdevco/Orgado",
    link: "https://orgado-zeta.vercel.app/",
    image: orgado,
    featured: true,
  },
  {
    title: "Weather Webapp",
    description:
      "A high-performance weather engine providing real-time meteorological data and environmental analytics through a clean, glassmorphic interface.",
    tags: ["HTML", "Tailwind CSS", "JS", "API"],
    github: "https://github.com/lowdevco/Wheather",
    link: "https://lowdevco.github.io/Wheather/",
    image: weather,
  },
  {
    title: "Pro MYC",
    description:
      "Pro-myc, is a professional multi-section landing page for a biotech-driven vegan mycoprotein ingredient. It features a modern, high-contrast aesthetic designed to showcase sustainable food technology.",
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/lowdevco/Pro-myc",
    link: "https://lowdevco.github.io/Pro-myc/",
    image: promyc,
  },
  {
    title: "Movie Box",
    description:
      "A sleek movie discovery application built with React and Vite, featuring live OMDb API search and a modern glassmorphic interface.",
    tags: ["React", "JS", "Vite", "API"],
    github: "https://github.com/lowdevco/Movie-Box",
    link: "https://movie-box-kappa-sand.vercel.app/",
    image: MovieBox,
    featured: true,
  },
  {
    title: "Xeflow",
    description:
      "service-oriented billing web application engineered to streamline complex client invoicing, dynamic tax calculations, financial status tracking, and secure print-ready PDF generation.",
    tags: ["React", "Django", "SQL", "Tailwind", "Rest API"],
    github: "https://github.com/lowdevco/XeFlow",
    link: "https://xeflow.vercel.app/",
    image: xeflow,
    featured: true,
  },
  {
    title: "ResoniQ",
    description:
      "Resoniq is a collaborative music listening web application that lets multiple people listen to music together in real time.",
    tags: ["React", "Django", "Websocket"],
    github: "https://github.com/lowdevco/ResoniQ",
    link: "https://resoniq-music.vercel.app/",
    image: resoniq,
    featured: true,
  },
  {
    title: "Daily Dish",
    description:
      "A sleek and responsive recipe browsing platform where users can discover recipes from around the world, search for their favorite dishes, and filter meals by category or cuisine.",
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/lowdevco/Daily-Dish",
    link: "https://lowdevco.github.io/Daily-Dish/",
    image: dailydish,
  },
  {
    title: "Eclat Cafe",
    description:
      "This project showcases an elegant navigation bar, interactive menu cards, and a stylish layout with HTML and CSS. Built with a minimal aesthetic",
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/lowdevco/Eclat-Cafe",
    link: "https://lowdevco.github.io/Eclat-Cafe/",
    image: eclat,
  },
];
