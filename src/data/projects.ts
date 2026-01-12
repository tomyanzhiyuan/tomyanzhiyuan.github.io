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
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

