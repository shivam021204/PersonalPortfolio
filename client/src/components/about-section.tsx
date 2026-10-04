import { FaMapMarkerAlt, FaGraduationCap, FaSchool } from "react-icons/fa";
import Reveal from "@/components/scroll-reveal";

export default function AboutSection() {
  const educationItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      subtitle: "Noida, UP",
    },
    {
      icon: FaGraduationCap,
      title: "Education",
      subtitle: "VIT Bhopal — CSE Core Branch",
      detail: "2024 – 2028",
    },
    {
      icon: FaSchool,
      title: "Previous Education",
      subtitle: "DAV Public School Bariatu",
      detail: "Ranchi",
    },
  ];

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 my-14 md:my-20">
      <Reveal className="w-full sm:w-[90%] lg:w-[65%] lg:max-w-[1200px] mx-auto rounded-md border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10 md:p-14">
        <div className="text-center mb-12">
          <p className="section-eyebrow">01 · About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
            About Me
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            A computer science student with a keen interest in software
            development and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {educationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Reveal key={index} variant="item" delay={index * 100}>
                  <div className="rounded-md p-6 border border-[var(--border)] bg-[var(--background)]">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-md flex items-center justify-center border border-[var(--border)] flex-shrink-0">
                        <IconComponent className="text-[var(--primary)] text-lg" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--foreground)]">
                          {item.title}
                        </h3>
                        <p className="text-[var(--muted-foreground)]">{item.subtitle}</p>
                        {item.detail && (
                          <p className="text-[var(--muted-foreground)] text-sm opacity-70">
                            {item.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal variant="item" delay={150}>
            <div className="window-frame">
              <div className="window-bar">
                <span className="window-dot accent" />
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-filename">about-me.md</span>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-[var(--foreground)]">My Journey</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                 I'm Kumar Shivam, a Computer Science student pursuing my B.Tech in CSE Core at VIT Bhopal. My interest in programming started at school and has grown through the projects and experiences I've taken on since.
                </p>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                 Currently, I'm focused on strengthening my CS fundamentals, exploring web development and AI, and improving my development skills. I'm particularly interested in understanding how AI can be integrated into practical applications and solving real-world problems with technology. I learn best by building practical, complete projects and turning ideas into things that actually work. Long-term, I want to be a developer who ships things people actually use.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}