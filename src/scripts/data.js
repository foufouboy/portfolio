import cssIcon from "../assets/css3.svg";
import expressIcon from "../assets/express.svg";
import gitIcon from "../assets/git.svg";
import htmlIcon from "../assets/html5.svg";
import jsIcon from "../assets/js.svg";
import nodejsIcon from "../assets/nodejs.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import viteIcon from "../assets/vitejs.svg";

import mininotesImage from "../assets/mininotes.png";
import babelImage from "../assets/babel.png";
import yummyImage from "../assets/yummy.png";
import membersOnlyImage from "../assets/members_only.png";

export const navItems = [
  { title: "Home", link: "hero" },
  { title: "About", link: "about" },
  { title: "Projects", link: "projects" },
  { title: "Contact", link: "contact" },
];

export const skills = [
  [
    { name: "HTML", icon: htmlIcon },
    { name: "REACT", icon: reactIcon },
    { name: "EXPRESS.JS", icon: expressIcon },
  ],
  [
    { name: "JAVASCRIPT", icon: jsIcon },
    { name: "CSS", icon: cssIcon },
    { name: "POSTGRESQL", icon: postgresqlIcon },
    { name: "GIT", icon: gitIcon },
  ],
  [
    { name: "TAILWIND", icon: tailwindIcon },
    { name: "VITE", icon: viteIcon },
    { name: "NODE.JS", icon: nodejsIcon },
  ],
];

export const projects = [
  {
    title: "Mininotes",
    subtitle: "Note taking app",
    desc: "Full-stack personal note taking app, realised using Express, Pug and PostgreSQL",
    liveLink: "https://odin-mininotes-production.up.railway.app/",
    repoLink: "https://github.com/foufouboy/odin-mininotes",
    image: mininotesImage,
  },
  {
    title: "Babel",
    subtitle: "Book listing app",
    desc: "Front-end book listing multi-page app, realised with Vite/React, React Router, and styled-components",
    liveLink: "https://odin-book-shop.vercel.app/library",
    repoLink: "https://github.com/foufouboy/odin-book-shop",
    image: babelImage,
  },
  {
    title: "Yummy Memory",
    subtitle: "Memory card game",
    desc: "Front-end memory card game (single page app) realised with Vite/React and styled-components",
    liveLink: "https://foufouboy.github.io/odin-memory-game/",
    repoLink: "https://github.com/foufouboy/odin-memory-game",
    image: yummyImage,
  },
  {
    title: "Members Only",
    subtitle: "Message board app",
    desc: "Message board app, implementing user authentication, realised using Express, Pug and PostgreSQL, and PassportJS",
    liveLink: "https://odin-mininotes-production.up.railway.app/",
    repoLink: "https://odin-members-only-production-bfe8.up.railway.app/",
    image: membersOnlyImage,
  },
];
