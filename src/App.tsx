import { useState, useRef } from "react";
import SimpleGlassNav from "./components/SimpleGlassNav";
import GlassMorphism from "./components/GlassMorphism";
import FluidDynamicsCanvas from "./components/FluidDynamicsCanvas";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Linkedin } from "lucide-react";
import tomProfileImage from "figma:asset/11268d89fa300e0416dc926c27548ccc20c6653f.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element =
      sectionRefs[sectionId as keyof typeof sectionRefs]
        ?.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Monty - iOS Card Game",
      description:
        "Built with SwiftUI. Features animations, swipe gestures, and game logic mimicking the Monty Hall problem.",
      tech: ["SwiftUI", "iOS", "Game Logic"],
    },
    {
      title: "ImageR - AI Photo Enhancer",
      description:
        "Uses Stable Diffusion 3 to denoise and enhance low-quality photos. Clean UI + Apple-native transitions.",
      tech: ["AI/ML", "Photo Processing", "iOS"],
    },
    {
      title: "Meme Generator",
      description:
        "Built with SwiftUI. Takes templates + user text and exports high-res memes. Inspired by college life.",
      tech: ["SwiftUI", "Image Processing", "Social"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 dark">
      <SimpleGlassNav
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      {/* Hero Section */}
      <section
        ref={sectionRefs.home}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Fluid Dynamics Background */}
        <div className="absolute inset-0 z-0">
          <FluidDynamicsCanvas />
        </div>

        {/* Hero Content */}
        <div className="relative z-50 text-center px-6 max-w-4xl mx-auto pt-24">
          <div className="bg-white/20 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl p-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-thin">
              Engineer by Logic.
              <br />
              <span className="text-blue-400">
                Dreamer by Choice.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-thin">
              CS @ Rochester • iOS Dev • Photographer • AI
              Explorer
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="px-4 py-2 text-base bg-gray-800 text-white rounded-md">
                Rochester
              </div>
              <div className="px-4 py-2 text-base bg-gray-800 text-white rounded-md">
                iOS Development
              </div>
              <div className="px-4 py-2 text-base bg-gray-800 text-white rounded-md">
                Photography
              </div>
              <div className="px-4 py-2 text-base bg-gray-800 text-white rounded-md">
                AI Explorer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        className="py-20 px-6 bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-thin">
            About Me
          </h2>

          <GlassMorphism
            intensity="medium"
            blur="lg"
            className="max-w-4xl mx-auto p-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={tomProfileImage}
                    alt="Tom Yan Profile"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed font-thin">
                  Hello! I'm Tom — a computer science student
                  currently based in Rochester. With a
                  background in military reconnaissance, I
                  approach challenges with both tactical
                  precision and creative flair. When I'm not
                  writing code, you'll find me capturing life
                  through my lens, whether it's street
                  photography or experimenting with new recipes.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4 font-thin">
                  Fun Facts
                </h3>
                <ul className="space-y-2 text-gray-300 font-thin">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Signs ASL and speaks Mandarin
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    I want to help others achieve their goals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Buy me a latte and I will think of you for
                    the day
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Enjoys skiing, badminton, and photography
                  </li>
                </ul>
              </div>
            </div>
          </GlassMorphism>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        className="py-20 px-6 bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-thin">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <GlassMorphism
                key={index}
                intensity="light"
                blur="md"
                className="h-full p-6"
              >
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 font-thin">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1 leading-relaxed font-thin">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassMorphism>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        className="py-20 px-6 bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-thin">
            Contact
          </h2>

          <GlassMorphism
            intensity="medium"
            blur="lg"
            className="max-w-2xl mx-auto text-center p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 font-thin">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-300 mb-4 font-thin">
              📧 Email: zhiyuanyan@rochester.edu
            </p>

            {/* LinkedIn Profile */}
            <div className="mb-6">
              <a
                href="https://www.linkedin.com/in/tomyanzhiyuan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-thin">
                  LinkedIn: tomyanzhiyuan
                </span>
              </a>
            </div>

            <p className="text-gray-400 mb-8 font-thin">
              Get in touch! I'm always excited to chat about
              technology, photography, or life in general.
            </p>
            <a
              href="https://www.linkedin.com/messaging/compose/?recipient=tomyanzhiyuan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-thin border border-blue-500/30 w-full"
              >
                Send a Message
              </Button>
            </a>
          </GlassMorphism>
        </div>
      </section>
    </div>
  );
}
