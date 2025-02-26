
import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed left-10 bottom-0 hidden md:block">
      <div className="flex flex-col items-center gap-6">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <Instagram size={20} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <Twitter size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <Linkedin size={20} />
        </a>
        <div className="w-[1px] h-24 bg-muted-foreground mt-4"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
