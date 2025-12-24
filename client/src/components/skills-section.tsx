import {
  SiHtml5,
  SiCss3,
  SiJavascript
} from "react-icons/si";

import { 
  FaJava,
  FaLaptopCode,
  FaCode,
  FaMobileAlt
} from "react-icons/fa";

import { MdGridOn } from "react-icons/md";



export default function SkillsSection() {
  const skills = [
    {
      name: "JavaScript",
      icon: SiJavascript,
      description: "Interactive web development",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      hoverBorder: "hover:border-yellow-500/50"
    },
    {
      name: "HTML",
      icon: SiHtml5,
      description: "Web structure & markup",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      hoverBorder: "hover:border-orange-500/50"
    },
    {
      name: "CSS",
      icon: SiCss3,
      description: "Styling & design",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      hoverBorder: "hover:border-blue-500/50"
    },
    {
      name: "Java",
      icon: FaJava,
      description: "Object-oriented programming",
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      hoverBorder: "hover:border-red-500/50"
    },
    {
     name: "Frontend / UI Development",
    icon: FaLaptopCode,
    description: "Designing and building user interfaces",
    color: "text-pink-500",
    bgColor: "bg-pink-500/20",
    hoverBorder: "hover:border-pink-500/50"
  },
  {
  name: "Responsive Design",
    icon: FaMobileAlt,
    description: "Layouts that adapt to screen sizes",
    color: "text-sky-400",
    bgColor: "bg-sky-400/20",
    hoverBorder: "hover:border-sky-400/50"
  },
  {
    name: "DOM Manipulation",
    icon: FaCode,
    description: "Dynamic interaction with web page elements",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
    hoverBorder: "hover:border-yellow-500/50"
  }
    /*{
      name: "Python",
      icon: SiPython,
      description: "Versatile programming",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      hoverBorder: "hover:border-green-500/50"
    },
    {
      name: "C++",
      icon: SiCplusplus,
      description: "System programming",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      hoverBorder: "hover:border-purple-500/50"
    },*/
    
  ];

  const learningSkills = [
    { name: "React.js", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
    { name: "Node.js", color: "bg-green-500/20 text-green-300 border-green-500/30" },
    { name: "Data Structures", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
    { name: "Algorithms", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
    { name: "Database Management", color: "bg-pink-500/20 text-pink-300 border-pink-500/30" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Technical Skills</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Here are the programming languages and technologies I'm currently working with and learning.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700/50 ${skill.hoverBorder} transition-all duration-300 hover:scale-105 hover:bg-slate-700/50`}
              >
                <div className={`w-16 h-16 ${skill.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`${skill.color} text-3xl`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-slate-400 text-sm">{skill.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
            <h3 className="text-2xl font-bold mb-4 text-white">Currently Learning</h3>
            <p className="text-slate-300 mb-6">
              I'm constantly expanding my skillset and exploring new technologies. Currently focusing on:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {learningSkills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm border ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
