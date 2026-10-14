export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  liveUrl?: string | null;
  repoUrl?: string | null;
  features: string[];
  category: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const personalInfo = {
  name: "Pemba Sherpa",
  monogram: "PS",
  title: "Frontend Web Developer",
  phone: "+977 9851145639",
  email: "pembasherpa20@gmail.com",
  primaryRole: "Frontend development and responsive web design",
  mainGoal: "Showcase development projects, communicate technical abilities, attract clients and employers, and generate professional inquiries.",
  location: "Nepal",
  availabilityText: "Available for new projects & opportunities",
} as const;

export const navLinks: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "HELLO, I'M PEMBA SHERPA",
  headlineMain: "Building Modern Websites That",
  headlineAccent: "Make an Impact.",
  supportingText:
    "I'm a frontend web developer passionate about creating responsive, user-friendly, and visually engaging digital experiences. I turn ideas into clean, accessible, and functional websites.",
  primaryCTA: { label: "Explore My Projects", href: "#projects" },
  secondaryCTA: { label: "Contact Me", href: "#contact" },
};

export const aboutContent = {
  heading: "A Little About Me",
  subheading: "Crafting digital experiences with precision, empathy, and clean code.",
  body: "I'm Pemba Sherpa, a frontend web developer who enjoys building clean, responsive, and intuitive websites. I focus on combining thoughtful design with well-structured code to create digital experiences that work beautifully across devices. I'm continuously learning, improving my skills, and exploring better ways to build for the web.",
  cta: { label: "View My Work", href: "#projects" },
  highlights: [
    { label: "Specialization", value: "Frontend & Responsive UI" },
    { label: "Standards", value: "Semantic HTML & Accessibility" },
    { label: "Focus", value: "Clean, Maintainable Code" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Responsive Web Design" },
    ],
  },
  {
    title: "Styling & UI Architecture",
    skills: [
      { name: "Tailwind CSS" },
      { name: "CSS Flexbox & Grid" },
      { name: "UI/UX Fundamentals" },
      { name: "Web Accessibility (WCAG)" },
      { name: "Design Systems" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "npm / pnpm" },
      { name: "Browser DevTools" },
      { name: "Figma (Design Handoff)" },
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    id: "project-01",
    title: "Travel & Tourism Website",
    shortDescription:
      "A responsive travel website designed to showcase destinations, tour packages, and travel experiences through an engaging and intuitive interface.",
    fullDescription:
      "A comprehensive frontend travel portal focusing on immersive destination imagery, intuitive itinerary browsing, responsive search filters, and smooth travel inquiry forms across desktop and mobile devices.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: null, // Editable placeholder marked as requested
    repoUrl: null,
    category: "Web Application",
    features: [
      "Responsive destination showcase cards",
      "Interactive itinerary filter and travel search",
      "Mobile-optimized inquiry and booking workflow",
    ],
  },
  {
    id: "project-02",
    title: "Modern Business Website",
    shortDescription:
      "A professional business website focused on clear messaging, responsive layouts, and a polished digital presence.",
    fullDescription:
      "A corporate landing and service presentation interface built to elevate brand trust, highlight strategic business solutions, and drive conversion with clean typography and fast load speeds.",
    technologies: ["React", "CSS3", "JavaScript"],
    liveUrl: null,
    repoUrl: null,
    category: "Corporate & Commercial",
    features: [
      "Modular service cards with hover interactions",
      "Conversion-focused value proposition layout",
      "Accessible navigation and interactive client contact points",
    ],
  },
  {
    id: "project-03",
    title: "Personal Portfolio Website",
    shortDescription:
      "A modern portfolio concept presenting professional information, technical skills, and selected work in a clean and accessible interface.",
    fullDescription:
      "A tailored developer portfolio designed with an editorial aesthetic, deep navy and energetic orange accents, accessible contrast levels, responsive typography, and centralized content management.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: null,
    repoUrl: null,
    category: "Portfolio & Personal Brand",
    features: [
      "Editorial navy & orange design system",
      "Comprehensive keyboard and screen reader accessibility",
      "Interactive project previews and validated contact flow",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Define project goals, target audience, and core user needs before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design",
    description: "Plan the layout structure, visual hierarchy, typography scale, and responsive cross-device flow.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Build robust, reusable components with clean, semantic markup and modern styling standards.",
  },
  {
    step: "04",
    title: "Refine",
    description: "Test responsiveness across screen widths, verify accessibility standards, and polish performance.",
  },
];

export const contactDetails = {
  heading: "Let's Build Something Great Together.",
  subheading: "Have a project, collaboration, or opportunity in mind? I'd love to hear from you.",
  email: personalInfo.email,
  phone: personalInfo.phone,
  emailButtonLabel: "Send Me an Email",
  phoneButtonLabel: "Call Me",
};
