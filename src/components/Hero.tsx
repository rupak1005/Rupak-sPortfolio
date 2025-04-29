
import { useEffect, useRef } from 'react';
import { Cover } from '@/components/ui/cover';
import { ArrowRight, Download } from 'lucide-react';
import ViewCounter from '@/components/ViewCounter';
import { TextReveal, TextRevealGroup } from './ui/text-reveal';

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
    <section className="h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-left">
        <TextReveal delay={0.2} duration={0.7}>
          <p className="font-mono text-primary mb-4 fade-in">Hi, my name is</p>
        </TextReveal>
        
        <TextReveal delay={0.4} duration={0.7}>
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Rupak Kumar.
          </h1>
        </TextReveal>
        
        <TextReveal delay={0.6} duration={0.7}>
          <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6 fade-in">
            <Cover>I build things for the web.</Cover>
          </h2>
        </TextReveal>
        
        <TextReveal delay={0.7} duration={0.6}>
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-semibold text-base shadow">
              <ViewCounter />
            </span>
          </div>
        </TextReveal>
        
        <TextReveal delay={0.8} duration={0.7}>
          <p className="text-muted-foreground max-w-lg mb-12 fade-in leading-relaxed">
            I'm a Software Engineer with expertise in Full-Stack Development, Machine Learning, and System Design. Strong problem-solving skills with 300+ DSA problems solved on LeetCode & Codeforces. Experience in building AI-powered applications, scalable web platforms, and automation bots.
          </p>
        </TextReveal>
        
        <TextReveal delay={1} duration={0.7}>
          <div className="flex gap-4">
            <a 
              href="#work" 
              className="inline-flex items-center gap-2 bg-[#141C2B] text-white py-3 px-6 shadow-lg card-hover font-semibold text-lg group"
            >
              View My Work
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#141C2B] text-white py-3 px-6 shadow-lg card-hover font-semibold text-lg group"
            >
              Download Resume
              <Download className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default Hero;
