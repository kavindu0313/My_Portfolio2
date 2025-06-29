
import { ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/30"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="group relative w-56 h-72 mx-auto mb-8 overflow-hidden rounded-xl border-4 border-blue-300 shadow-2xl shadow-blue-500/25 transform transition-all duration-500 hover:scale-105 hover:-rotate-2">
            <img
              src="/Me.jpg"
              alt="Kavindu Senanayake"
              className="w-full h-full object-cover shadow-inner transform transition-transform duration-500 group-hover:scale-125 animate-scale-in"
            />
            
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600">Kavindu Senanayake</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-8 max-w-3xl mx-auto animate-fade-in">
          Full-Stack Developer & Mobile App Developer
        </p>
        
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
          BSc (Hons) in IT undergraduate at SLIIT, passionate about creating innovative web and mobile applications using modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button
            onClick={scrollToAbout}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              Learn More About Me
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-300 text-blue-700 rounded-full font-semibold hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="mt-16 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 border-2 border-blue-100 hover:border-blue-300"
          >
            <ArrowDown className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};
