
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Detect which section is currently in view
      const sections = ["about", "education", "work", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100; // Adding offset to improve accuracy
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the header
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : ''
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-primary font-mono text-2xl hover:scale-110 transition-transform duration-300">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              className={`nav-link ${activeSection === "about" ? "text-primary" : ""}`}
            >
              About
            </a>
            <a 
              href="#education" 
              onClick={(e) => { e.preventDefault(); scrollToSection("education"); }}
              className={`nav-link ${activeSection === "education" ? "text-primary" : ""}`}
            >
              Education
            </a>
            <a 
              href="#work" 
              onClick={(e) => { e.preventDefault(); scrollToSection("work"); }}
              className={`nav-link ${activeSection === "work" ? "text-primary" : ""}`}
            >
              Work
            </a>
            <a 
              href="#certifications" 
              onClick={(e) => { e.preventDefault(); scrollToSection("certifications"); }}
              className={`nav-link ${activeSection === "certifications" ? "text-primary" : ""}`}
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
              className={`nav-link ${activeSection === "contact" ? "text-primary" : ""}`}
            >
              Contact
            </a>
            <a 
              href="/resume.pdf" 
              className="ml-4 px-4 py-2 border border-primary text-primary font-mono
              hover:bg-primary/10 transform hover:-translate-y-1 transition-all duration-300 ease-in-out
              hover:shadow-lg hover:shadow-primary/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-8 items-center text-lg">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === "about" ? "text-primary" : ""}`}
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection("about"); 
              }}
            >
              About
            </a>
            <a 
              href="#education" 
              className={`nav-link ${activeSection === "education" ? "text-primary" : ""}`}
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection("education"); 
              }}
            >
              Education
            </a>
            <a 
              href="#work" 
              className={`nav-link ${activeSection === "work" ? "text-primary" : ""}`}
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection("work"); 
              }}
            >
              Work
            </a>
            <a 
              href="#certifications" 
              className={`nav-link ${activeSection === "certifications" ? "text-primary" : ""}`}
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection("certifications"); 
              }}
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === "contact" ? "text-primary" : ""}`}
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection("contact"); 
              }}
            >
              Contact
            </a>
            <a 
              href="/resume.pdf" 
              className="mt-4 px-6 py-3 border border-primary text-primary font-mono
              hover:bg-primary/10 transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
