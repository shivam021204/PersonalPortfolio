import React, { useEffect, useState } from "react";
import cineAURAImg from "@assets/Cinepic.jpeg";
import gamehubImg from "@assets/pic.jpeg";
import Reveal from "@/components/scroll-reveal";
import Spotifyimg from "@assets/spotifyClone.png";

type Project = {
  title: string;
  year: string;
  tags: string[];
  github: string;
  live?: string;
  description: string;
  features: string[];
  image?: string;
};

// NOTE: EngiConnect is still a placeholder — I don't have its description,
// tech stack, or links yet. Replace the TODO fields once you share them.
const projects: Project[] = [
  {
    title: "Avengers 3D [in progress]",
    year: "2026",
    tags: [],
    github: "https://github.com/shivam021204",
    description: "A fully immersive 3D Avengers experience that takes users through the MCU timeline with cinematic camera movement, animated environments, movie posters, and interactive storytelling. As you travel through each era, discover the story of the Avengers and their heroes while listening to iconic music from their movies, all within a dynamic, futuristic 3D world.",
    features: [],
  },
  {
    title: "CineAURA",
    year: "2025",
    tags: ["JavaScript", "HTML5", "CSS"],
    github: "https://github.com/shivam021204/CINEAURA",
    live: "https://cineaura-site.vercel.app",
    description:
      "CineAURA is a basic movie browsing website with different genres, top IMDb movies, trending movies, and a search bar. Supports dark/light mode and is deployed on Vercel.",
    features: [
      "Browse movies by genre",
      "Top IMDb and trending movie lists",
      "Search bar for quick lookup",
      "Dark / light mode toggle",
    ],
    image: cineAURAImg,
  },
  {
    title: "Spotify Clone",
    year: "2026",
    tags: ["Authentication","javaScript","UI/UX"],
    github: "https://github.com/shivam021204/spotify-clone",
    live: "https://spotifyclone8868.vercel.app",
    description:
      "Built a responsive Spotify-inspired web app focusing on UI/UX attractiveness and performance optimization. Implemented authentication workflows using JWT and OAuth concepts, integrated dynamic content handling with Vanilla JavaScript, and designed efficient database interactions for user data and playlists. Emphasized clean UI design, seamless user experience, and scalable architecture.",
    features: [],
    image:Spotifyimg,
  },
  {
    title: "GameHub",
    year: "2025",
    tags: ["HTML5", "CSS", "JavaScript", "DOM"],
    github: "https://github.com/shivam021204/gamehub",
    live: "https://gamehub-fungames.vercel.app",
    description:
      "A fun, interactive mini-games website featuring Rock Paper Scissors, Whack-a-Box, Tic Tac Toe, and Dots & Boxes. Built using HTML, CSS, and JavaScript, focusing on event-driven interactions, game logic, and dynamic UI updates.",
    features: ["Rock Paper Scissors", "Whack-a-Box", "Tic Tac Toe", "Dots & Boxes"],
    image: gamehubImg,
  },
];

// Collapsed card — fixed, compact, same height for every project. Clicking
// it opens the detail popup instead of expanding inline, so no other card
// ever shifts, resizes, or re-flows.
function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="w-full text-left p-4 flex items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)]/50 transition-colors duration-200"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-14 h-14 rounded-md object-cover border border-[var(--border)] flex-shrink-0"
        />
      ) : (
        <div className="w-14 h-14 rounded-md border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] font-mono-code text-xs flex-shrink-0">
          {project.title.slice(0, 2).toUpperCase()}
        </div>
      )}

      <div className="min-w-0 flex-1">
        <h3 className="text-base md:text-lg font-bold text-[var(--foreground)] truncate">
          {project.title}
        </h3>
        <p className="font-mono-code text-xs text-[var(--muted-foreground)] mb-1.5">{project.year}</p>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono-code px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--muted-foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <span className="flex-shrink-0 font-mono-code text-xs text-[var(--primary)]">Show more</span>
    </button>
  );
}

// Elevated popup — description, features, demo preview, and the GitHub /
// Live Site buttons. Renders once at the section level, above everything,
// so it never touches the project list's layout.
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isPlaceholder = project.description.startsWith("TODO");

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ animation: "modal-backdrop 0.2s ease" }}
      onClick={onClose}
    >
      <div
        className="window-frame w-full max-w-xl max-h-[85vh] overflow-y-auto"
        style={{ animation: "modal-pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="window-bar">
          <span className="window-dot accent" />
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="window-filename">
            {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.app
          </span>
          <button
            onClick={onClose}
            className="ml-auto text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-64 object-cover rounded-md mb-4 border border-[var(--border)]"
            />
          )}

          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1">{project.title}</h3>
          <p className="font-mono-code text-sm text-[var(--primary)] mb-4">{project.year}</p>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono-code px-2 py-1 rounded border border-[var(--border)] text-[var(--muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p
            className={`text-sm leading-relaxed mb-4 whitespace-pre-line ${
              isPlaceholder ? "italic text-[var(--muted-foreground)] opacity-70" : "text-[var(--muted-foreground)]"
            }`}
          >
            {project.description}
          </p>

          {project.features.length > 0 && (
            <div className="mb-5">
              <p className="text-xs font-mono-code text-[var(--primary)] mb-2 tracking-wide">KEY FEATURES</p>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-[var(--muted-foreground)] flex gap-2">
                    <span className="text-[var(--primary)]">›</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium px-4 py-2 rounded-md border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] transition-colors"
            >
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium px-4 py-2 rounded-md bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
              >
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Projects: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 my-14 md:my-20">
      <Reveal className="w-full sm:w-[90%] lg:w-[65%] lg:max-w-[1200px] mx-auto rounded-md border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10 md:p-14">
        <div className="text-center mb-12">
          <p className="section-eyebrow">02 · Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">Projects</h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Small, complete things I've built to learn by doing.
          </p>
        </div>

        <div className="space-y-1.5 md:space-y-0 md:grid md:grid-flow-col md:grid-rows-5 md:gap-1.5">
          {projects.map((project, index) => (
            <Reveal key={project.title} variant="item" delay={index * 100}>
              <ProjectCard project={project} onOpen={() => setSelectedIndex(index)} />
            </Reveal>
          ))}
        </div>
      </Reveal>

      {selectedIndex !== null && (
        <ProjectModal project={projects[selectedIndex]} onClose={() => setSelectedIndex(null)} />
      )}
    </section>
  );
};

export default Projects;