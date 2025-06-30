import { FaInstagram, FaLinkedin, FaGithub, FaArrowDown, FaCheck } from "react-icons/fa";
import profileImage from "@assets/profile portfolio_1751277415318.jpg";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { 
      icon: FaInstagram, 
      href: "https://www.instagram.com/kumar_shivam8868/", 
      gradient: "from-purple-500 to-pink-500",
      label: "Instagram"
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/kumar-shivam-8a9529325/", 
      gradient: "from-blue-600 to-blue-800",
      label: "LinkedIn"
    },
    { 
      icon: FaGithub, 
      href: "https://github.com/shivam021204", 
      gradient: "from-gray-700 to-gray-900",
      label: "GitHub"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-blue-500/20 animate-float">
              <img
                src={profileImage}
                alt="Kumar Shivam - Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <FaCheck className="text-white text-sm" />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-slide-up">
          Kumar Shivam
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-slide-up">
          Computer Science Student | Full Stack Developer
        </p>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto animate-slide-up">
          CSE Core Branch Student at VIT Bhopal, passionate about building innovative solutions with modern technologies.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8 animate-slide-up">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={social.label}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <IconComponent className="text-white text-xl" />
                </div>
              </a>
            );
          })}
        </div>
        
        <div className="animate-slide-up">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Learn More About Me
            <FaArrowDown className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
