import {
  uthealth,
  utd,
  tennessee,
  whitecircle,
  c,
  python,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

export const services = [
  { title: "Ph.D. in Biochemistry and Cell Biology from the University of Texas MD Anderson Cancer Center UTHealth Graduate school of Biomedical Sciences", 
    icon: uthealth},
  { title: "M.S. in Applied Cognition and Neuroscience from the University of Texas at Dallas", 
    icon: utd },
  { title: "B.S. in Biochemistry from Middle Tennessee State University", 
    icon: tennessee },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Graduate Research Assistant (PhD)",
    company_name: "University of Texas Health Science Center at Houston",
    icon: whitecircle,
    iconBg: "#161329",
    date: "2020 - Present",
    points: [
      "Mentor Dr. Vasanthi Jayaraman, Department of Biochemistry and Cell Biology",
    ],
  },
  {
    title: "Student Research Assistant (Masters)",
    company_name: "Texas at Dallas School of Behavioral and Brain Sciences",
    icon: whitecircle,
    iconBg: "#161329",
    date: "2017 - 2019",
    points: [
      "Mentor Dr. Jonathan Ploski, Department of Molecular and Cell Biology"
    ],
  },
  {
    title: "Student Research Assistant (Undergraduate)",
    company_name: "Middle Tennessee State University",
    icon: whitecircle,
    iconBg: "#161329",
    date: "2015 - 2016",
    points: [
      "Mentor Dr. Chengshan Wang, Department of Chemistry",
    ],
  },
  {
    title: "Student Research Assistant (Undergraduate)",
    company_name: "Middle Tennessee State University",
    icon: whitecircle,
    iconBg: "#161329",
    date: "2015 - 2016",
    points: [
      "Mentor Dr. Stephen Schmidt Lab, Department of Psychology",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
