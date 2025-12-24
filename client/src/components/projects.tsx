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
    <section id="projects" className="relative">
      <h2 className="text-3xl font-bold mb-8 text-slate-50">Projects</h2>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-slate-800 hover:shadow-2xl transition-shadow duration-300"
          >
            <div
              className="overflow-hidden rounded-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-slate-50 mt-2">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.period}</p>
            <p className="my-2 whitespace-pre-line text-slate-200">{project.description}</p>
            <p className="font-semibold mt-2 text-slate-50">Tech Stack: {project.techStack}</p>
            <p className="text-sm mt-1 text-slate-200">Skills: {project.skills}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-lg p-4 w-11/12 md:w-2/3 max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-slate-50">{selectedProject.title}</h3>
            <p className="text-gray-400">{selectedProject.period}</p>
            <p className="my-2 text-slate-200 whitespace-pre-line">{selectedProject.description}</p>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                Open in New Tab
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
