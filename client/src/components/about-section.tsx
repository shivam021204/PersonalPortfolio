import { FaMapMarkerAlt, FaGraduationCap, FaSchool } from "react-icons/fa";

export default function AboutSection() {
  const educationItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      subtitle: "Ranchi, Jharkhand",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: FaGraduationCap,
      title: "Education",
      subtitle: "VIT Bhopal - CSE Core Branch",
      detail: "2024 - 2028",
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/20"
    },
    {
      icon: FaSchool,
      title: "Previous Education",
      subtitle: "DAV Public School Bariatu",
      detail: "Ranchi, Jharkhand",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A passionate computer science student with a keen interest in software development and emerging technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {educationItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-slate-700/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/50">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className={`${item.iconColor} text-xl`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-slate-300">{item.subtitle}</p>
                      {item.detail && <p className="text-slate-400 text-sm">{item.detail}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-slate-700/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/50">
            <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I'm Kumar Shivam, a dedicated computer science student currently pursuing my B.Tech in CSE Core Branch at VIT Bhopal. 
                My journey in technology began during my school days at DAV Public School Bariatu, Ranchi, where I first discovered my passion for programming.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Currently in my academic journey (2024-2028), I'm focusing on building a strong foundation in computer science fundamentals 
                while exploring various programming languages and technologies. I believe in continuous learning and am always eager to take on new challenges.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My goal is to become a proficient software developer who can contribute to innovative projects and make a positive impact in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
