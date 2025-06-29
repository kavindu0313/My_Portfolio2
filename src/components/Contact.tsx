
import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from 'emailjs-com';


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_gqjme3m', // Service ID
        'template_yqkmzo9', // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'Jvi5nCYfCY8a12xLp' // Public Key
      );
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Sorry, there was an error sending your message. Please try again later.");
      console.error('EmailJS error:', error);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <a
                    href="mailto:gihankavindu789@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                  >
                    gihankavindu789@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <a
                    href="tel:+94719850437"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                  >
                    +94 71 985 0437
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Location</p>
                  <p className="text-slate-600">Kegalle, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/kavindu0313"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kavindu-senanayake-67328234b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100/50">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
