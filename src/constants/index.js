const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
];

const words = [
  { text: "Projects", imgPath: "/images/projects.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Learning", imgPath: "/images/learning.svg" },
  { text: "Growth", imgPath: "/images/growth.svg" },
  { text: "Projects", imgPath: "/images/projects.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Learning", imgPath: "/images/learning.svg" },
  { text: "Growth", imgPath: "/images/growth.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Completed Projects" },
  { value: 1, suffix: "", label: "React Developer Certificate" },
];

const abilities = [
  {
    imgPath: "/images/learning.png",
    title: "Fast Learner",
    desc: "Quickly adapts to new technologies and keeps improving skills.",
  },
  {
    imgPath: "/images/code.png",
    title: "Clean Code",
    desc: "Focus on writing clean, maintainable and scalable code.",
  },
  {
    imgPath: "/images/team.png",
    title: "Team Player",
    desc: "Experience collaborating in agile environments with Scrum and Git workflow.",
  },
];

const techStackImgs = [
  { name: "Python (Django, FastAPI)", imgPath: "/images/logos/python.svg" },
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Docker", imgPath: "/images/logos/docker.svg" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
  { name: "HTML & CSS", imgPath: "/images/logos/html-css.png" },
];

const techStackIcons = [
  {
    name: "Python (Django, FastAPI)",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Docker",
    modelPath: "/models/docker-transformed.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "HTML, CSS & JavaScript",
    modelPath: "/models/html-css-js-transformed.glb",
    scale: 0.03,
    rotation: [1.5, 0, 0],
  },
];

const expCards = [
  {
    review: "",
    imgPath: "/images/projects/buenaventura.png",
    logoPath: "/images/logos/buenaventura-logo.png",
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
    name: "El Switcher (Frontend)",
    description:
      "Real-time web app built with React and WebSockets for interactive control.",
    imgPath: "/images/projects/switcher-frontend.png",
    repoLink: "https://github.com/Ctrl-Z-2024/switcher-ui",
  },
  {
    name: "El Switcher (Backend)",
    description:
      "REST API with FastAPI and WebSockets, providing robust real-time feedback.",
    imgPath: "/images/projects/switcher-backend.png",
    repoLink: "https://github.com/Ctrl-Z-2024/switcher-api",
  },
  {
    name: "Almanimal",
    description:
      "Pet adoption site built with Django, helping connect animals with adopters.",
    imgPath: "/images/projects/almanimal.png",
    repoLink: "https://github.com/wilitp/almanimal",
  },
  {
    name: "Buenaventura Agronegocios",
    description:
      "Agricultural business website developed with Django and hosted on AWS.",
    imgPath: "/images/projects/buenaventura.png",
    repoLink: "https://github.com/tobiasjpalacios/Buenaventura",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  projects,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
