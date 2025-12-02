import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

export default function ContactSection() {
  const socialContacts = [
    {
      name: "Instagram",
      icon: FaInstagram,
      description: "Follow my journey",
      username: "@kumar_shivam8868",
      href: "https://www.instagram.com/kumar_shivam8868/",
      gradient: "from-purple-500 to-pink-500",
      hoverBorder: "hover:border-purple-500/50"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      description: "Professional network",
      username: "Kumar Shivam",
      href: "https://www.linkedin.com/in/kumar-shivam-8a9529325/",
      gradient: "from-blue-600 to-blue-800",
      hoverBorder: "hover:border-blue-500/50"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      description: "Code repositories",
      username: "shivam021204",
      href: "https://github.com/shivam021204",
      gradient: "from-gray-700 to-gray-900",
      hoverBorder: "hover:border-gray-500/50"
    }
  ];

  const handleEmailClick = () => {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ks02122004@gmail.com",
    "_blank"
  );
};


  const handleResumeDownload = () => {
    // TODO: Implement actual resume download
    console.log("Resume download functionality to be implemented");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Let's Connect</h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborating on projects, or simply connecting with fellow developers.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialContacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className={`bg-slate-700/50 rounded-2xl p-8 border border-slate-600/50 ${contact.hoverBorder} transition-all duration-300 hover:scale-105 hover:bg-slate-600/50`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{contact.name}</h3>
                  <p className="text-slate-300">{contact.description}</p>
                  <p className="text-slate-400 text-sm mt-2">{contact.username}</p>
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="bg-slate-700/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/50">
          <h3 className="text-2xl font-bold mb-4 text-white">Get In Touch</h3>
          <p className="text-slate-300 mb-6">
            Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <FaEnvelope className="mr-2" />
              Send Email
            </button>
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center px-6 py-3 border border-slate-500 text-base font-medium rounded-full text-slate-300 hover:text-white hover:border-slate-400 transition-colors duration-200"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
