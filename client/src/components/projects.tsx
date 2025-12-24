import React, { useState } from "react";
import calculatorImg from "@assets/calculator.jpeg";
import gamehubImg from "@assets/pic.jpeg";
import cineAURAImg from "@assets/Cinepic.jpeg";

type Project = {
  title: string;
  period: string;
  description: string;
  techStack: string;
  skills: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Calculator",
    period: "Nov 2025 - Dec 2025",
    description: `Built a fully functional calculator using Vanilla JavaScript, HTML, and CSS. Features include:
- Normal and advanced calculations (factorials, square roots, logarithms, modulo, parentheses handling)
- Dark/Light mode toggle for better UI experience
- Sound effects for button clicks and errors
- Focused on DOM manipulation, event handling, and creating an interactive user interface`,
    techStack: "HTML | CSS | JavaScript",
    skills: "HTML5 · CSS · JavaScript",
    image: calculatorImg,
    link: "https://quickcalciii.vercel.app",
  },
  {
    title: "Gamehub",
    period: "Dec 2025 - Dec 2025",
    description: `A fun, interactive mini-games website featuring Rock Paper Scissors, Whack-a-Box, Tic Tac Toe, and Dots & Boxes. 
Built using HTML, CSS, and JavaScript, focusing on event-driven interactions, game logic, and dynamic UI updates.`,
    techStack: "HTML | CSS | JavaScript",
    skills: "HTML5 · CSS · JavaScript · DOM · Frontend Development",
    image: gamehubImg,
    link: "https://gamehub-fungames.vercel.app",
  },
  {
    title: "CineAURA – Mini Movie Discovery Website",
    period: "Oct 2025 - Nov 2025",
    description: `CineAURA is a basic movie browsing website with different genres, top IMDb movies, trending movies, and a search bar. 
Supports dark/light mode and is deployed on Vercel.`,
    techStack: "JavaScript | HTML | CSS",
    skills: "JavaScript · HTML5 · CSS",
    image: cineAURAImg,
    link: "https://cineaura-site.vercel.app",
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Projects</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Here are some projects I have built showcasing my skills in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:scale-105 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="overflow-hidden rounded-xl mb-4 border border-slate-700/50 p-1 bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-blue-300 text-sm mb-2">{project.period}</p>
              <p className="text-slate-300 text-sm mb-2 whitespace-pre-line">{project.description}</p>
              <p className="text-slate-50 font-semibold text-sm mb-1">Tech Stack: {project.techStack}</p>
              <p className="text-slate-400 text-sm mb-2">Skills: {project.skills}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold text-sm"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 rounded-2xl p-6 w-full md:w-2/3 max-w-3xl relative">
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <div className="overflow-hidden rounded-xl mb-4 border border-slate-700/50 p-1 bg-slate-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-blue-300 mb-2">{selectedProject.period}</p>
              <p className="text-slate-300 mb-2 whitespace-pre-line">{selectedProject.description}</p>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold"
                >
                  Open in New Tab
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
