
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed  w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/70 backdrop-blur-md shadow-lg' : ''
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-primary font-mono text-2xl hover:scale-110 transition-transform duration-300">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
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
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#education" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Education
            </a>
            <a href="#work" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Work
            </a>
            <a href="#certifications" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Certifications
            </a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
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
