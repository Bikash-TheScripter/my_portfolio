export const personalInfo = {
  name: "Bikash Tripathy",
  title: "Full-Stack Developer (Frontend-Focused)",
  tagline: "Building Performant, Scalable & User-Centric Web Experiences",
  email: "bikashtripathy786@gmail.com",
  phone: "+91 6371380980",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://linkedin.com/in/bikash-tripathy-ba5b341b0",
  github: "https://github.com/Bikash-TheScripter",
  resumeUrl: "/Bikash_Resume.pdf",
};

export const aboutContent = {
  intro: `I'm a Full-Stack Developer with a strong frontend focus and 4+ years of experience building performant, scalable web applications that users love.`,
  description: `My expertise lies in crafting modern interfaces with React.js, Next.js, TypeScript, and Angular, backed by Node.js and REST/GraphQL APIs. I also apply prompt engineering and modern AI tools like Cursor and GitHub Copilot to ship faster, with higher quality and a better developer experience.`,
  highlights: [
    "Frontend-Focused Full-Stack: React, Next.js, Angular, TypeScript, Node.js, REST/GraphQL",
    "Prompt Engineering for product features and AI-augmented developer workflows",
    "Enterprise SaaS experience with 95%+ test coverage and CI/CD automation",
    "Performance & Accessibility: Core Web Vitals optimization and WCAG 2.1 compliant interfaces",
  ],
};

export const experiences = [
  {
    id: 1,
    company: "Phenom People",
    role: "Product Development Engineer I",
    subtitle: "Frontend / Full-Stack Developer",
    client: "",
    location: "Hyderabad, India",
    period: "2025 – Present",
    description:
      "Building next-generation HR technology solutions for enterprise clients.",
    achievements: [
      "Engineered a CRM Campaign & Messaging Platform handling Voice, SMS, WhatsApp, and Email via Twilio APIs",
      "Built responsive UIs and real-time workflows, boosting user engagement and reliability",
      "Applied prompt engineering for AI-driven messaging features, improving automation and content relevance",
      "Leveraged Cursor and modern AI tooling to accelerate delivery and code quality",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Twilio",
      "REST APIs",
      "Prompt Engineering",
      "Cursor",
      "Roboto",
    ],
  },
  {
    id: 2,
    company: "Divami Design Labs",
    role: "Software Engineer",
    subtitle: "Frontend Developer",
    client: "Blue Yonder",
    location: "Hyderabad, India",
    period: "2022 – 2025",
    description:
      "Delivered cutting-edge frontend solutions for a major enterprise client, Blue Yonder.",
    achievements: [
      "Delivered Blue Yonder SaaS dashboards using React.js, Highcharts, and Material UI for advanced analytics",
      "Built reusable component libraries and optimized API integrations for performance and maintainability",
      "Strengthened testing with Jest, Enzyme, WebdriverIO, achieving 95% coverage and stable releases",
      "Optimized Core Web Vitals and WCAG accessibility, improving page loads by 40%",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Highcharts",
      "Material UI",
      "Jest",
      "WebdriverIO",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "CRM Campaign Platform",
    subtitle: "Enterprise Omnichannel Communication System",
    description:
      "A campaign management system enabling automated outreach across Voice, SMS, WhatsApp, and Email — with AI-driven messaging features powered by prompt engineering.",
    image: "/projects/crm-campaign.png",
    challenge:
      "Build a unified platform to handle multi-channel communication at scale while maintaining personalization, content quality, and compliance.",
    solution:
      "Architected a tenant-based system with reusable campaign templates and real-time analytics. Applied prompt engineering to power AI-driven messaging features that improve tone, intent, and personalization for outreach.",
    impact: [
      "Reduced campaign setup time by 60% with reusable templates",
      "Improved message relevance through prompt-engineered AI features",
      "Enabled personalized outreach to thousands of recipients in real time",
      "Optimized API response times with caching and lazy-loading",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Twilio",
      "REST APIs",
      "Prompt Engineering",
      "Cursor",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Autonomous Business Planning App",
    subtitle: "Blue Yonder Analytics Dashboard",
    description:
      "A sophisticated analytics platform providing real-time insights and visual reports for supply chain and business planning decisions across enterprise teams.",
    image: "/projects/business-planning.png",
    challenge:
      "Create intuitive, accessible dashboards that transform complex supply chain data into actionable insights for enterprise users with strict performance requirements.",
    solution:
      "Built interactive visualization components with real-time data streaming, ensuring WCAG accessibility and optimal Core Web Vitals across all viewport sizes.",
    impact: [
      "Enhanced analytics visibility with interactive Highcharts dashboards",
      "Achieved WCAG 2.1 AA compliance for inclusive enterprise UX",
      "Optimized Core Web Vitals for 40% faster page loads",
      "95% test coverage ensuring stable, reliable releases",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Highcharts",
      "Material UI",
      "GraphQL",
      "REST APIs",
      "WebdriverIO",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export const skills = {
  frontend: {
    title: "Frontend",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Material UI", level: 90 },
    ],
  },
  backend: {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 78 },
      { name: "MongoDB", level: 78 },
      { name: "WebSockets", level: 75 },
    ],
  },
  ai: {
    title: "AI-Augmented Workflows",
    items: [
      { name: "Cursor", level: 92 },
      { name: "GitHub Copilot", level: 90 },
      { name: "Prompt Engineering", level: 85 },
      { name: "LLM API Integration", level: 78 },
      { name: "AI-Driven Product Features", level: 78 },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    items: [
      { name: "Cursor", level: 92 },
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Jenkins", level: 72 },
      { name: "AWS (EC2, S3)", level: 72 },
      { name: "Firebase", level: 75 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Webpack / Vite", level: 85 },
    ],
  },
  testing: {
    title: "Testing & Quality",
    items: [
      { name: "Jest", level: 88 },
      { name: "React Testing Library", level: 85 },
      { name: "Enzyme", level: 82 },
      { name: "WebdriverIO", level: 78 },
      { name: "Selenium", level: 75 },
    ],
  },
};

export const skillTags = [
  "React.js",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "REST APIs",
  "GraphQL",
  "MongoDB",
  "Redux",
  "Material UI",
  "Tailwind CSS",
  "Highcharts",
  "Cursor",
  "GitHub Copilot",
  "Prompt Engineering",
  "Jest",
  "React Testing Library",
  "WebdriverIO",
  "Docker",
  "AWS",
  "CI/CD",
  "Git",
  "Agile/Scrum",
  "WCAG Accessibility",
  "Core Web Vitals",
  "Performance Optimization",
];

export const education = [
  {
    degree: "B.Tech in Engineering",
    institution: "Parala Maharaja Engineering College",
    location: "Odisha",
    period: "2018 – 2022",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Arihant Junior College",
    location: "Odisha",
    period: "2016 – 2018",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
