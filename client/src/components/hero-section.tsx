import { useEffect, useState } from "react";
import {  FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "@assets/shivam picture.jpeg";
import { SiLeetcode } from "react-icons/si";

const CODE_LINE = "const developer = new Shivam();";

function useTypewriter(text: string, speedMs = 55) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs]);

  return output;
}

export default function HeroSection() {
  const typed = useTypewriter(CODE_LINE);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/kumar-shivam-8a9529325/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/shivam021204", label: "GitHub" },
    { icon: SiLeetcode, href: "https://leetcode.com/kumar_shivam8868/", label: "Leetcode" },
  ];

  return (
    <section id="home" className="flex items-center px-6 sm:px-10 lg:px-16 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center w-full">
        {/* Left: identity */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-[var(--foreground)]">
            Kumar Shivam
          </h1>

          <p className="font-mono-code text-base md:text-lg text-[var(--muted-foreground)] mb-6 h-6">
            {typed}
            <span className="type-cursor">&nbsp;</span>
          </p>

          <p className="text-base md:text-lg text-[var(--muted-foreground)] mb-10 max-w-md leading-relaxed">
            CSE Core student at VIT Bhopal. I build small, interactive
            web tools from scratch, in vanilla JS and I'm currently
            picking up React and backend fundamentals.
          </p>

          <div className="flex items-center gap-4 mb-10">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-md text-sm font-medium bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
            >
              See what I've built
            </button>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ks02122004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md text-sm font-medium border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--primary)] transition-colors"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo, styled as a window/tab to match the workbench motif */}
        <div className="window-frame max-w-sm mx-auto md:mx-0">
          <div className="window-bar">
            <span className="window-dot accent" />
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-filename">shivam.jpg</span>
          </div>
          <img
            src={profileImage}
            alt="Kumar Shivam"
            className="w-full aspect-square object-cover"
          />
        </div>
      </div>
    </section>
  );
}