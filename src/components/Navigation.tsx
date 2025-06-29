
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
          >
            {isOpen ? <X size={24} className="text-blue-600" /> : <Menu size={24} className="text-blue-600" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 bg-white/95 backdrop-blur-lg rounded-b-xl">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg mx-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
