
import { Github, Linkedin, Download, GraduationCap, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Hi! I'm <span className="font-semibold text-blue-700">Kavindu Senanayake</span>, 
              a Third-year BSc (Hons) in IT undergraduate at SLIIT, passionate about web and mobile development,QA Engineering and UI/UX Design 
              especially using the MERN stack and React Native. I enjoy turning ideas into real applications 
              that are functional, user-friendly, and impactful.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              With experience in full-stack development, mobile app creation, and UI/UX design, 
              I'm dedicated to crafting digital solutions that make a difference. I'm always eager 
              to learn new technologies and take on challenging projects.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="https://github.com/kavindu0313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kavindu-senanayake-67328234b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="/CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-300 text-blue-700 rounded-full hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-500">
              <img src="/about.png" alt="Kavindu Senanayake" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-70 animate-bounce delay-500"></div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-600" size={28} />
            <h3 className="text-3xl font-bold text-slate-800">Education</h3>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                Sri Lanka Institute of Information Technology - SLIIT
              </h4>
              <p className="text-slate-600 mb-1">BSc (Hons) in Information Technology</p>
              <p className="text-slate-500 text-sm">Specialized in Information Technology</p>
              <p className="text-blue-600 font-medium mt-2">2022 - Present</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                Kegalu Vidyalaya - Kegalle
              </h4>
              <div className="space-y-2">
                <div>
                  <p className="text-slate-600">GCE Advanced Level Examination</p>
                  <p className="text-blue-600 font-medium">2021</p>
                </div>
                <div>
                  <p className="text-slate-600">GCE Ordinary Level Examination</p>
                  <p className="text-blue-600 font-medium">2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-blue-600" size={28} />
            <h3 className="text-3xl font-bold text-slate-800">Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Student Parliament Participation</h4>
                  <p className="text-slate-600 text-sm">Participated in student parliament in Lucknow, India (2020)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Photography Club Leadership</h4>
                  <p className="text-slate-600 text-sm">President of Kegalu Vidyalaya Photographic Club</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Drama Team Member</h4>
                  <p className="text-slate-600 text-sm">Active member of school drama team (English & Sinhala languages, All island drama actor)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">University Community Member</h4>
                  <p className="text-slate-600 text-sm">Member of SLIIT Media Community and Gaming Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
