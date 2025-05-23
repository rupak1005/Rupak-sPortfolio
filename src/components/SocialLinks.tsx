import { Github, Linkedin, CodeXml } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed left-10 bottom-0 hidden md:block">
      <div className="flex flex-col items-center gap-6">
        <a 
          href="https://github.com/rupak1005" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link-hover"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com/rupak1005" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link-hover"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://leetcode.com/u/rupak1005saini/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link-hover"
          aria-label="LeetCode"
        >
          <CodeXml size={20} />
        </a>
        <div className="w-[1px] h-24 bg-primary/30 mt-4"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
