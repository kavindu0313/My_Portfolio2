
export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "SQL", level: 70 },
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "React Native", level: 80 },
        
        { name: "Kotlin", level: 70 },
        { name: "Android Studio", level: 75 },
        { name: "Dart", level: 70 },
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Git/GitHub", level: 85 },
        { name: "Postman", level: 75 },
        { name: "Network Configuration", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 border border-blue-100/50">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700 group-hover/skill:text-blue-700 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-blue-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-sm"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
