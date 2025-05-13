import Words1Img from "@assets/images/projects.svg";
import Words2Img from "@assets/images/code.svg";
import Words3Img from "@assets/images/learning.svg";
import Words4Img from "@assets/images/growth.svg";

import AbilitLearningImg from "@assets/images/learning.png";
import AbilitCodeImg from "@assets/images/code.png";
import AbilitTeamImg from "@assets/images/team.png";

import TechImgPython from "@assets/images/tech-logos/python.webp";
import TechModelPython from "@assets/models/python-transformed.glb";

import TechImgReact from "@assets/images/tech-logos/react.webp";
import TechModelReact from "@assets/models/react_logo-transformed.glb";

import TechImgDocker from "@assets/images/tech-logos/docker.webp";
import TechModelDocker from "@assets/models/docker-transformed.glb";

import TechImgGit from "@assets/images/tech-logos/git.webp";
import TechModelGit from "@assets/models/git-svg-transformed.glb";

import TechImgHtml from "@assets/images/tech-logos/html.webp";
import TechModelHtml from "@assets/models/html-css-js-transformed.glb";

import ExpBVImg from "@assets/images/logo-bv.png";

import ProjectSwitcherImg from "@assets/images/switcher.webp";
import ProjectBuenaventuraImg from "@assets/images/buenaventura.webp";
import ProjectGraphImg from "@assets/images/graph.webp";

import SocialGithubImg from "@assets/images/github.png";
import SocialLinkedinImg from "@assets/images/linkedin.png";

const navLinks = [
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
];

const words = [
  { text: "Projects", imgPath: Words1Img },
  { text: "Code", imgPath: Words2Img },
  { text: "Learning", imgPath: Words3Img },
  { text: "Growth", imgPath: Words4Img },
  { text: "Projects", imgPath: Words1Img },
  { text: "Code", imgPath: Words2Img },
  { text: "Learning", imgPath: Words3Img },
  { text: "Growth", imgPath: Words4Img },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Completed Projects" },
  { value: 1, suffix: "", label: "React Developer Certificate" },
];

const abilities = [
  {
    imgPath: AbilitLearningImg,
    title: "Fast Learner",
    desc: "Quickly adapts to new technologies and keeps improving skills.",
  },
  {
    imgPath: AbilitCodeImg,
    title: "Clean Code",
    desc: "Focus on writing clean, maintainable and scalable code.",
  },
  {
    imgPath: AbilitTeamImg,
    title: "Team Player",
    desc: "Experience collaborating in agile environments with Scrum and Git workflow.",
  },
];

const techStackList = [
  {
    name: "Python (Django, FastAPI)",
    imgPath: TechImgPython,
    modelPath: TechModelPython,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "React",
    imgPath: TechImgReact,
    modelPath: TechModelReact,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Docker",
    imgPath: TechImgDocker,
    modelPath: TechModelDocker,
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    imgPath: TechImgGit,
    modelPath: TechModelGit,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "HTML, CSS & JavaScript",
    imgPath: TechImgHtml,
    modelPath: TechModelHtml,
    scale: 0.03,
    rotation: [1.5, 0, 0],
  },
];

const expCards = [
  {
    review: "",
    imgPath: "",
    logoPath: ExpBVImg,
    title: "Full Stack Developer - Buenaventura Agronegocios",
    date: "June 2021 - May 2024",
    responsibilities: [
      "Developed modules using Django and maintained backend systems.",
      "Implemented frontend designs with Materialize, jQuery, and CSS.",
      "Managed database models and AWS hosting.",
      "Applied agile methodologies (Scrum) and used Git workflow daily.",
      "Configured Docker containers for development and production.",
    ],
  },
];

const projects = [
  {
    name: "El Switcher (Backend + Frontend)",
    description:
      "Real-time multiplayer game built with React and FastAPI using WebSockets. I developed both the frontend and backend.",
    imgPath: ProjectSwitcherImg,
    repoLink: "https://github.com/Ctrl-Z-2024",
    bgColor: "#e1f2eb",
  },
  {
    name: "Buenaventura Agronegocios",
    imgPath: ProjectBuenaventuraImg,
    repoLink: "https://github.com/tobiasjpalacios/Buenaventura",
    bgColor: "#f6f1e7",
  },
  {
    name: "Graph Coloring Tool",
    imgPath: ProjectGraphImg,
    repoLink: "https://github.com/juampiludu/discreta2-proyecto",
    bgColor: "#eeeeee",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: SocialLinkedinImg,
    url: "https://www.linkedin.com/in/juan-pablo-luduena/",
  },
  {
    name: "github",
    imgPath: SocialGithubImg,
    url: "https://github.com/juampiludu",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  projects,
  socialImgs,
  techStackList,
  navLinks,
};
