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
    id: "monty",
    title: "Monty",
    tagline: "iOS card game exploring probability",
    outcome: "Shipped to App Store with 4.8★ rating",
    description:
      "A SwiftUI card game that makes the Monty Hall problem intuitive through play. Features fluid animations, haptic feedback, and a stats tracker that reveals how your intuition compares to optimal strategy.",
    role: "Solo Developer",
    timeframe: "Fall 2024",
    stack: ["SwiftUI", "Combine", "Core Animation"],
    githubUrl: "https://github.com/tomyanzhiyuan/monty",
    featured: true,
  },
  {
    id: "imager",
    title: "ImageR",
    tagline: "AI-powered photo enhancement",
    outcome: "Reduced noise in low-light photos by 60%",
    description:
      "An iOS app that uses Stable Diffusion 3 to denoise and enhance photos. Built with Apple's native ML frameworks for on-device processing. Clean UI with before/after comparisons and batch processing.",
    role: "Solo Developer",
    timeframe: "Spring 2024",
    stack: ["SwiftUI", "Core ML", "Stable Diffusion"],
    githubUrl: "https://github.com/tomyanzhiyuan/imager",
    featured: true,
  },
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

