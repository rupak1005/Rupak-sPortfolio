
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : ''
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-primary font-mono text-2xl">BC.</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link"><span className="font-mono text-primary text-sm">01.</span> About</a>
            <a href="#work" className="nav-link"><span className="font-mono text-primary text-sm">02.</span> Work</a>
            <a href="#contact" className="nav-link"><span className="font-mono text-primary text-sm">03.</span> Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'
        } overflow-hidden`}>
          <div className="flex flex-col space-y-4 py-4">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              <span className="font-mono text-primary text-sm">01.</span> About
            </a>
            <a href="#work" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              <span className="font-mono text-primary text-sm">02.</span> Work
            </a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              <span className="font-mono text-primary text-sm">03.</span> Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
