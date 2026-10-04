import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import {
  FaJava,
  FaLaptopCode,
  FaCode,
  FaMobileAlt,
  FaProjectDiagram,
  FaSitemap,
  FaCloud,
  FaMicrochip,
  FaRobot,
} from "react-icons/fa";
import Reveal from "@/components/scroll-reveal";

const skills = [
  { name: "JavaScript", icon: SiJavascript, description: "Interactive web development" },
  { name: "HTML", icon: SiHtml5, description: "Web structure & markup" },
  { name: "CSS", icon: SiCss3, description: "Styling & design" },
  { name: "Data Structures And Algorithms (medium)", icon: FaCode, description: "Problem Solving" },
  { name: "Java", icon: FaJava, description: "Object-oriented programming" },
  { name: "Frontend / UI", icon: FaLaptopCode, description: "Building user interfaces" },
  { name: "Responsive Design", icon: FaMobileAlt, description: "Layouts that adapt to screen size" },
  { name: "DOM Mannipulatio", icon: FaCode, description: "Dynamic page interaction" },
  { name: "REST APIs", icon: FaCloud, description: "Designing & consuming web APIs" },
  { name: "Operating Systems", icon: FaMicrochip, description: "Processes, memory & system fundamentals" },
  { name: "AI Agents", icon: FaRobot, description: "Autonomous AI workflows & tool use" },
];

const learning = [
  "React.js",
  "Node.js",
  "Data Structures And Algorithms (Hard)",
  "Database Management",
  "Computer Networks",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 my-14 md:my-20">
      <Reveal className="w-full sm:w-[90%] lg:w-[65%] lg:max-w-[1200px] mx-auto rounded-md border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10 md:p-14">
        <div className="text-center mb-12">
          <p className="section-eyebrow">03 · Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
            Technical Skills
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            The languages and tools I'm currently working with and learning.
          </p>
        </div>

        <Reveal variant="item" className="mb-6">
          <div className="window-frame">
            <div className="window-bar">
              <span className="window-dot accent" />
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-filename">skills.sh</span>
            </div>
            <div className="p-6 sm:p-8 font-mono-code text-sm sm:text-base space-y-3">
              <p className="text-[var(--primary)]">$ skills list</p>
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="flex items-start gap-3 text-[var(--muted-foreground)]">
                    <Icon className="text-[var(--foreground)] mt-1 flex-shrink-0" />
                    <span>
                      <span className="text-[var(--foreground)]">{skill.name}</span>
                      {"  —  "}
                      {skill.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal variant="item" delay={150}>
          <div className="window-frame">
            <div className="window-bar">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-filename">currently-learning.sh</span>
            </div>
            <div className="p-6 sm:p-8 font-mono-code text-sm sm:text-base space-y-2">
              <p className="text-[var(--primary)]">$ learning status</p>
              {learning.map((item) => (
                <p key={item} className="text-[var(--muted-foreground)]">
                  <span className="text-[var(--foreground)]">[in progress]</span> {item}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Reveal>
    </section>
  );
}