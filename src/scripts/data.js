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
  { title: "Around", link: "around" },
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
    subtitle: "A note taking app",
    desc: "A note taking app, realised using Express, Pug and PostgreSQL",
    liveLink: "https://odin-mininotes-production.up.railway.app/",
    repoLink: "https://github.com/foufouboy/odin-mininotes",
    image: mininotesImage,
  },
  {
    title: "Babel",
    subtitle: "A book listing multi-page app",
    desc: "A book listing multi-page app, realised with React and React Router",
    liveLink: "https://odin-mininotes-production.up.railway.app/",
    repoLink: "https://github.com/foufouboy/odin-mininotes",
    image: babelImage,
  },
  {
    title: "Yummy Yummy Memory",
    subtitle: "A note taking app",
    desc: "A note taking app, realised using Express, Pug and PostgreSQL",
    liveLink: "https://odin-mininotes-production.up.railway.app/",
    repoLink: "https://github.com/foufouboy/odin-mininotes",
    image: yummyImage,
  },
  {
    title: "Members Only",
    subtitle: "A note taking app",
    desc: "A note taking app, realised using Express, Pug and PostgreSQL",
    liveLink: "https://odin-mininotes-production.up.railway.app/",
    repoLink: "https://github.com/foufouboy/odin-mininotes",
    image: membersOnlyImage,
  },
];
