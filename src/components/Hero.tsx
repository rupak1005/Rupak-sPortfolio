
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
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl">
        <p className="font-mono text-primary mb-4 fade-in">Hi, my name is</p>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-foreground mb-4">
          Brittany Chiang.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6 fade-in">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground max-w-lg mb-12 fade-in">
          I'm a software engineer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I'm focused on building accessible, 
          human-centered products.
        </p>
        <a 
          href="#work" 
          className="inline-block px-6 py-3 border border-primary text-primary font-mono
          hover:bg-primary/10 transform hover:-translate-y-2 transition-all duration-300 ease-in-out fade-in"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;
