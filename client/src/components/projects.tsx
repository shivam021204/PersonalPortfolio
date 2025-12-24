import React from "react";
import calculatorImg from "@assets/calculator.jpeg";
import gamehubImg from "@assets/pic.jpeg";
import cineAURAImg from "@assets/Cinepic.jpeg";


const projects = [
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
    image: calculatorImg, // Replace with your imported image
    link: "https://quickcalciii.vercel.app", // Optional: project link
  },
  {
    title: "Gamehub",
    period: "Dec 2025 - Dec 2025",
    description: `A fun, interactive mini-games website featuring Rock Paper Scissors, Whack-a-Box, Tic Tac Toe, and Dots & Boxes. 
Built using HTML, CSS, and JavaScript, the project focuses on event-driven interactions, game logic, and dynamic UI updates.`,
    techStack: "HTML | CSS | JavaScript",
    skills: "HTML5 · CSS · JavaScript · DOM · Frontend Development",
    image: gamehubImg,
    link: "https://gamehub-fungames.vercel.app",
  },
  {
    title: "CineAURA – Mini Movie Discovery Website",
    period: "Oct 2025 - Nov 2025",
    description: `CineAURA is a basic movie browsing website that features different genres, sections for top IMDb movies, trending movies, and a built-in search bar. 
Supports dark/light mode and is deployed on Vercel.`,
    techStack: "JavaScript | HTML | CSS",
    skills: "JavaScript · HTML5 · CSS",
    image: cineAURAImg,
    link: "https://cineaura-site.vercel.app",
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.period}</p>
            <p className="my-2 whitespace-pre-line">{project.description}</p>
            <p className="font-semibold mt-2">Tech Stack: {project.techStack}</p>
            <p className="text-sm mt-1">Skills: {project.skills}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="text-blue-500 mt-2 inline-block"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
