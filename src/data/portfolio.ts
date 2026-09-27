export type Project = {
  id: string;
  title: string;
  subtitle: string;
  kind: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export const site = {
  name: "Anand Raj",
  title: "AI/ML Engineer · B.Tech (AI & ML) student",
  tagline:
    "I build full-stack, AI-powered products — from LLM-integrated platforms to computer-vision systems.",
  description:
    "Portfolio of Anand Raj, an AI/ML engineer and B.Tech (AI & ML) student in Indore, India. Full-stack, AI-powered projects: LLM platforms, computer vision, and applied ML.",
  url: "https://anandraj.dev",
  email: "araj49981@gmail.com",
  phone: "+91 83405 03488",
  phoneHref: "+918340503488",
  location: "Indore, India",
  linkedin: "https://www.linkedin.com/in/anand-raj-182a0932a",
  github: "https://github.com/araj-arch",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const bio = {
  paragraphs: [
    "Aspiring AI/ML engineer in training with hands-on experience building full-stack, AI-powered products — from LLM-integrated platforms to computer-vision systems. Comfortable across the stack: Python/FastAPI on the backend, React/Next.js on the frontend, and applied ML (NLP, computer vision, speech).",
    "Completed a Data Analyst internship in retail analytics and ETL. B.Tech in Artificial Intelligence & Machine Learning at IES IPS Academy, Indore (Expected graduation 2028, CGPA 7.8).",
  ],
  facts: [
    { label: "Location", value: "Indore, India" },
    { label: "Focus", value: "Full-stack AI products" },
    { label: "Education", value: "B.Tech AI & ML · 2028" },
    { label: "Status", value: "Open to internships" },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: ["Python", "JavaScript / TypeScript", "SQL"],
  },
  {
    title: "AI / ML",
    icon: "brain",
    items: [
      "Computer Vision (DeepFace, MediaPipe, OpenCV)",
      "LLM integration (Gemini, Groq)",
      "Whisper speech transcription",
      "sentence-transformers",
      "FastAPI",
    ],
  },
  {
    title: "Web Development",
    icon: "layout",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Three.js / React Three Fiber",
      "GSAP",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Practices",
    icon: "wrench",
    items: [
      "JWT Authentication",
      "REST APIs",
      "Swagger",
      "Git",
      "Vite",
      "Tailwind CSS",
    ],
  },
];

export const experience = [
  {
    role: "Data Analyst Intern — Industrial Trainee",
    company: "Aspro IT",
    period: "May 2026",
    duration: "45-day vocational training",
    points: [
      "Completed a 45-day vocational training in Retail Sales Analytics, working with ETL pipelines to clean, transform, and load sales data for analysis.",
      "Applied Python-based data analysis to surface trends in retail sales performance for stakeholder reporting.",
    ],
    tags: ["Python", "ETL", "Retail Analytics", "Data Cleaning"],
  },
];

export const projects: Project[] = [
  {
    id: "interviewai",
    title: "InterviewAI",
    subtitle: "AI-Powered Mock Interview Platform",
    kind: "Full-stack · LLM · Speech",
    year: "2026",
    summary:
      "Full-stack platform across a three-service architecture: Node/Express/MongoDB backend, Python FastAPI AI microservice, and a Next.js/TypeScript frontend.",
    highlights: [
      "JWT authentication, resume upload, adaptive question generation, answer scoring via sentence-transformers, and Whisper for speech transcription.",
      "Integrated Gemini and Groq LLM APIs for resume-driven question generation, plus an ATS resume scoring and improvement feature.",
      "Currently building a 3D conversational interviewer avatar using React Three Fiber, Ready Player Me, and Azure Speech SDK.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "Gemini",
      "Groq",
      "Whisper",
      "sentence-transformers",
      "React Three Fiber",
    ],
    github: "https://github.com/araj-arch/interviewai",
    demo: "https://interviewai.example.com",
    featured: true,
  },
  {
    id: "expression",
    title: "Expression",
    subtitle: "Facial Emotion Recognition System",
    kind: "Computer Vision",
    year: "2026",
    summary:
      "Real-time facial emotion recognition using FastAPI, DeepFace, and MediaPipe, with a React/Vite/Tailwind frontend and MongoDB backend.",
    highlights: [
      "Resolved Python 3.13 dependency conflicts (OpenCV/MediaPipe compatibility) to stabilize the computer-vision pipeline.",
    ],
    stack: ["FastAPI", "DeepFace", "MediaPipe", "OpenCV", "React", "Vite", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/araj-arch/expression",
    demo: "https://expression.example.com",
  },
  {
    id: "luxe",
    title: "LUXÉ Fashion",
    subtitle: "E-Commerce Store",
    kind: "Full-stack · E-Commerce",
    year: "2025",
    summary:
      "Full-stack e-commerce app with product listings, cart, and checkout functionality.",
    highlights: [
      "JWT-based authentication with bcrypt password hashing.",
      "Relational MySQL schema: users, profiles, products, orders, order items.",
    ],
    stack: ["Node.js", "Express", "MySQL", "JavaScript", "HTML/CSS", "JWT", "bcrypt"],
    github: "https://github.com/araj-arch/luxe-fashion",
    demo: "https://luxe.example.com",
  },
  {
    id: "attendance",
    title: "Attendance Monitoring & Analytics",
    subtitle: "Automated Student Attendance System",
    kind: "Team Project · Analytics",
    year: "2025",
    summary:
      "System design to replace manual attendance tracking with a technology-driven solution.",
    highlights: [
      "Owned the analytics component, delivering data-driven insights into attendance patterns.",
    ],
    stack: ["System Design", "Analytics", "Data Visualization", "Python"],
    github: "https://github.com/araj-arch/attendance-monitoring",
    demo: "https://attendance.example.com",
  },
];

export const education = [
  {
    degree: "B.Tech, Artificial Intelligence & Machine Learning",
    school: "IES IPS Academy, Indore",
    period: "2024 — 2028 (Expected)",
    detail: "CGPA: 7.8",
    highlight: true,
  },
  {
    degree: "Higher Secondary",
    school: "Public School, Darbhanga",
    period: "2022 — 2023",
    detail: "65%",
    highlight: false,
  },
  {
    degree: "Secondary",
    school: "Public School, Darbhanga",
    period: "2020 — 2021",
    detail: "75%",
    highlight: false,
  },
];
