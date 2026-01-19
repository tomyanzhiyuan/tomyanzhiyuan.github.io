export interface Project {
  id: string;
  title: string;
  tagline: string;
  outcome: string;
  description: string;
  role: string;
  timeframe: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  thumbnail?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "personal-site",
    title: "tomyanz.com",
    tagline: "This website",
    outcome: "Custom WebGL fluid simulation + modern stack",
    description:
      "A personal portfolio built with React, TypeScript, and Tailwind. Features a custom fluid dynamics background, glass morphism UI, and responsive design. Deployed on GitHub Pages with custom domain.",
    role: "Designer & Developer",
    timeframe: "2024",
    stack: ["React", "TypeScript", "Three.js", "Tailwind"],
    githubUrl: "https://github.com/tomyanzhiyuan/tomyanzhiyuan.github.io",
    demoUrl: "https://tomyanz.com",
    featured: true,
  },
  {
    id: "pg-essays-epub",
    title: "Paul Graham Essays EPUB",
    tagline: "All PG essays in one e-reader file",
    outcome: "200+ essays compiled for offline reading",
    description:
      "A curated collection of Paul Graham's essays formatted as an EPUB for e-readers. Clean typography, proper chapter structure, and easy navigation for reading on Kindle, iPad, or any e-reader.",
    role: "Curator & Developer",
    timeframe: "2024",
    stack: ["Python", "EPUB"],
    githubUrl: "https://github.com/tomyanzhiyuan/pgessaysepub",
    demoUrl: "https://tomyanz.com/pgessaysepub",
    featured: true,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

