import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Reveal from "@/components/scroll-reveal";
import resume from "../../../attached_assets/resume.pdf";

export default function ContactSection() {
  const socialContacts = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      username: "Kumar Shivam",
      href: "https://www.linkedin.com/in/kumar-shivam-8a9529325/",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      username: "shivam021204",
      href: "https://github.com/shivam021204",
    },
    {
      name: "LeetCode",
      icon: SiLeetcode,
      username: "kumar_shivam8868",
      href: "https://leetcode.com/u/kumar_shivam8868/",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      username: "ks02122004@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ks02122004@gmail.com",
    },
  ];

  const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Kumar_Shivam_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 my-14 md:my-20">
      <Reveal className="w-full sm:w-[90%] lg:w-[65%] lg:max-w-[1200px] mx-auto rounded-md border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10 md:p-14 text-center">
        <p className="section-eyebrow">04 · Connect</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
          Let's Connect
        </h2>
        <p className="text-lg text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto">
          Open to discussing new opportunities, collaborating on projects, or
          just connecting with fellow developers.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {socialContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Reveal key={contact.name} variant="item" delay={index * 80}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md p-5 border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-md flex items-center justify-center border border-[var(--border)] mx-auto mb-3">
                    <Icon className="text-[var(--primary)] text-lg" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-xs opacity-70 truncate">
                    {contact.username}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="item" delay={200}>
          <div className="window-frame text-left">
            <div className="window-bar">
              <span className="window-dot accent" />
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-filename">contact.sh</span>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Get In Touch</h3>
              <p className="text-[var(--muted-foreground)] mb-6">
                Have a project in mind, want to collaborate, or just want to say
                hello? I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ks02122004@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
                >
                  <FaEnvelope />
                  Send Email
                </a>
                <button
                  onClick={handleResumeDownload}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] transition-colors duration-200"
                >
                  <FaDownload />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </Reveal>
    </section>
  );
}