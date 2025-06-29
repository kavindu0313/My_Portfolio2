
import { Github, ExternalLink, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Hotel Management System",
      description: "A scalable full-stack web application using the MERN stack with dynamic frontend built in React and TypeScript, robust backend with Node.js and Express, and MongoDB database.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
      github: "https://github.com/kavindu0313",
      image: "/hotel.png",
      featured: false
    },
    {
      title: "Online Music Store Website",
      description: "A responsive website frontend using HTML, CSS, and JavaScript with robust Java backend for secure server-side logic and data processing.",
      technologies: ["HTML", "CSS", "JavaScript", "Java"],
      github: "https://github.com/kavindu0313",
      image: "/musicstore.png",
      featured: false
      
    },
    {
      title: "Skill Share Platform",
      description: "A full-stack web application using Spring Boot backend and React with Vite frontend, implementing MySQL database design and RESTful APIs.",
      technologies: ["React", "Spring Boot", "MySQL", "Vite"],
      github: "https://github.com/kavindu0313",
      image: "/skillshare.png",
      featured: false
    },
    {
      title: "Blood Donation Mobile App",
      description: "A cross-platform mobile application using Flutter and Dart with Firebase backend services, featuring responsive UI/UX across devices.",
      technologies: ["Flutter", "Dart", "Firebase", "Git"],
      github: "https://github.com/kavindu0313",
      image: "/blood.png",
      featured: false
    },
    {
      title: "Lumin Photography App",
      description: "A cross-platform mobile application using Flutter and Dart with Firebase backend services, featuring responsive UI/UX across devices.",
      technologies: ["Flutter", "Dart", "Firebase", "Git"],
      github: "https://github.com/kavindu0313",
      image: "/photographyapp.png",
      featured: false
    },
    {
      title: "Personal Finance Tracker App",
      description: "A mobile application developed using Kotlin and Java in Android Studio with Firebase backend, featuring intuitive UI/UX design and user-friendly interfaces.",
      technologies: ["Kotlin", "Android Studio", "Firebase", "Figma"],
      github: "https://github.com/kavindu0313",
      image: "/Personalfinance.png",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-blue-100/50 ${
                project.featured ? 'lg:col-span-1 md:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star size={14} fill="currentColor" />
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200/50 hover:shadow-sm transition-shadow duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium group/btn">
                    <span>Learn More</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
