import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

// Data imports
import { getFeaturedProjects } from "./data/projects";
import { getPublishedEssays } from "./data/essays";
import { proofTiles } from "./data/proof";
import { interests } from "./data/interests";
import { principles, examples } from "./data/workStyle";

// Assets
import headshot from "./assets/headshot.jpg";
import resume from "./assets/resume.pdf";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function App() {
  const projectsRef = useRef<HTMLElement>(null);
  const writingRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredProjects = getFeaturedProjects();
  const publishedEssays = getPublishedEssays();

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-100">
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-xl"
      >
        <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Tom Yan</span>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(writingRef)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Writing
            </button>
            <a
              href="mailto:zhiyuanyan@rochester.edu"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headshot */}
          <motion.div variants={fadeInUp} className="mb-8">
            <img
              src={headshot}
              alt="Tom Yan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-2 border-white/10 shadow-xl"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            I build products that feel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              clean, fast, and real.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Computer Science student shipping iOS apps, interactive web experiences, and applied AI.
            I care about clarity, proof, and polish—not buzzwords.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection(projectsRef)}
              className="bg-white text-black hover:bg-gray-200 font-medium px-6"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection(writingRef)}
              className="border-gray-700 text-gray-300 hover:bg-white/5 font-medium px-6"
            >
              Read Writing
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <a
              href="https://github.com/tomyanzhiyuan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/tomyanzhiyuan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-white transition-colors"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Proof Strip */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {proofTiles.map((tile) => (
              <motion.div
                key={tile.id}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white/[0.02] border border-white/5"
              >
                <tile.icon className="h-5 w-5 text-gray-500 mb-2" />
                <span className="text-sm font-medium text-white">{tile.metric}</span>
                <span className="text-xs text-gray-500">{tile.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
            <p className="text-gray-500">Shipped work with demos, code, and outcomes.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.tagline}</p>
                  <p className="text-sm text-emerald-400 font-medium mb-4">
                    ✓ {project.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-gray-700 text-gray-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Writing Section */}
      <section ref={writingRef} className="py-20 md:py-28 px-6 bg-white/[0.01]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Writing</h2>
            <p className="text-gray-500">Essays to sharpen my thinking and share what I learn.</p>
          </motion.div>

          <div className="space-y-1">
            {publishedEssays.map((essay) => (
              <motion.a
                key={essay.id}
                href={`/writing/${essay.slug}`}
                variants={fadeInUp}
                whileHover={{ x: 4 }}
                className="group flex items-start justify-between py-4 border-b border-white/5 hover:bg-white/[0.02] -mx-4 px-4 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-medium group-hover:text-white transition-colors">
                    {essay.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{essay.hook}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{essay.readTime}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-8">
            <a
              href="/writing"
              className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1"
            >
              Browse all writing
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Work Style Section */}
      <section className="py-20 md:py-28 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">How I Work</h2>
            <p className="text-gray-500">Principles that guide how I build.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {principles.map((principle) => (
              <motion.div
                key={principle.id}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              In Practice
            </h3>
            <div className="space-y-4">
              {examples.map((example) => (
                <div
                  key={example.id}
                  className="flex gap-4 text-sm border-l-2 border-white/10 pl-4"
                >
                  <span className="text-gray-500 whitespace-nowrap">{example.context}:</span>
                  <span className="text-gray-300">{example.action}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section className="py-20 md:py-28 px-6 bg-white/[0.01]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Beyond Code</h2>
            <p className="text-gray-500">What I do when I'm not building.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest) => (
              <motion.div
                key={interest.id}
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
              >
                <span className="text-2xl mb-3 block">{interest.emoji}</span>
                <h3 className="font-medium mb-1">{interest.title}</h3>
                <p className="text-sm text-gray-500">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold mb-4">
            Want to build something together?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-500 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href="mailto:zhiyuanyan@rochester.edu"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <Mail className="h-4 w-4" />
              zhiyuanyan@rochester.edu
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-6 justify-center mt-12 text-gray-600"
          >
            <a
              href="https://github.com/tomyanzhiyuan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/tomyanzhiyuan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-sm text-gray-600 mt-12">
            © {new Date().getFullYear()} Tom Yan. Built with React + Tailwind.
          </motion.p>
        </motion.div>
      </footer>
    </div>
  );
}
