
import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = titleRef.current?.textContent || '';
    if (titleRef.current) {
      titleRef.current.textContent = '';
      let index = 0;
      
      const typeText = () => {
        if (titleRef.current && index < text.length) {
          titleRef.current.textContent += text[index];
          index++;
          setTimeout(typeText, 100);
        }
      };

      setTimeout(typeText, 500);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-4xl">
        <p className="font-mono text-primary mb-4 fade-in">Hi, my name is</p>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-foreground mb-4">
          Rupak Kumar.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6 fade-in">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground max-w-lg mb-12 fade-in leading-relaxed">
        I'm a Software Engineer with expertise in Full-Stack Development, Machine Learning, and System Design. Strong problem-solving skills with 300+ DSA problems solved on LeetCode & Codeforces. Experience in building AI-powered applications, scalable web platforms, and automation bots.
        </p>
        <a 
          href="#work" 
          className="inline-block px-6 py-3 border border-primary text-primary font-mono
          hover:bg-primary/10 transform hover:-translate-y-1 transition-all duration-300 ease-in-out fade-in"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;
