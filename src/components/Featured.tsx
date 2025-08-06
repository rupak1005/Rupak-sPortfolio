
import { ExternalLink, Github } from 'lucide-react';
import ViewCounter from '@/components/ViewCounter';
import { TextReveal } from './ui/text-reveal';
import { Description } from '@radix-ui/react-toast';

const projects = [
  {
    title:"Socially",
    description:"A modern, full-featured social media platform built with Next.js 15, featuring real-time interactions, user authentication, and a beautiful responsive design.",
    tags:["Next.js", "TailwindCSS", "TypeScript", "Shadcn/ui", "React", "Node.js", "PostgresSQL","PrismaORM","UploadThing","Clerk" ],
    links:{
      github:"https://github.com/rupak1005/socially",
      external:"https://socially-neon.vercel.app/"
    },
    image:"/images/projects/socially.png"
  },
  {
  title: "Syncify",
  description: "A full-stack, feature-rich music streaming platform inspired by Spotify. It allows users to stream songs, manage playlists and albums, and interact in real-time using an integrated chat system. The project includes separate admin capabilities for managing songs and albums. Built using MERN stack with support for secure authentication, role-based access, and interactive dashboards for both users and admins.",
  tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "TailwindCSS", "MERN"],
  links: {
    github: "https://github.com/rupak1005/Syncify",
    external: "https://advancespotify.onrender.com/"  // leave empty or replace with deployed URL if hosted
  },
  image: "/images/projects/Syncify.jpg"  // replace with correct image path or filename
},

  {
    title: "User Voice Canvas",
    description: "A full-stack feedback collection system enabling users to submit and manage feedback with categorization. Features dashboard viewing, MongoDB storage, and RESTful API endpoints. Supports both local and cloud MongoDB deployments.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "REST API"],
    links: {
      github: "https://github.com/rupak1005/user-voice-canvas-main",
      external: "https://user-voice-canvas-main-5.onrender.com/" 
    },
    image: "/images/projects/user-voice-canvas.jpg" 
  },
  {
    title: "Obyss Agency",
    description: "An immersive web experience featuring smooth scrolling, creative loaders, magnetic cursors, scroll-based animations, and interactive image effects. Built with Locomotive Scroll, GSAP, ScrollTrigger, and Shery.js for fluid parallax, dynamic visuals, and interactive UI.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP", "Locomotive Scroll", "ScrollTrigger", "Shery.js"],
    links: {
      github: "https://github.com/rupak1005/obyss-agency",
      external: "https://rupak1005.github.io/obyss-agency/"
    },
    image: "/images/projects/obyss-agency.jpg" 
  },
  {
    title: "Heartbeats & Roses",
    description: "A beautiful and immersive Valentine's Day web experience featuring 3D heart animations, floating roses, ambient music, and smooth interactions. Built for creativity and emotional expression on the web.",
    tags: ["React", "TailwindCSS", "JavaScript", "Three.js", "GSAP" , "Framer Motion"],
    links: {
      github: "https://github.com/rupak1005/Heartbeats-Roses",
      external: "https://heartbeatroses.netlify.app/"
    },
    image: "/images/projects/heartbeats-roses.jpg" 
  },
  {
    title: "AI Safety Incident Dashboard",
    description: "A fully featured, performant, and responsive AI Safety Incident Dashboard. Features glassmorphism UI, dark/light mode, animated transitions, persistent state, CSV export, and rich data visualizations.",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Recharts"],
    links: {
      github: "https://github.com/rupak1005/vigilant-incident-view",
      external: "https://incidentview.netlify.app"
    },
    image: "/images/projects/vigilant-incident-view.jpg"
  },
  {
    title: "AI Legal Document Scanner",
    description: "An AI-powered web app that extracts, classifies, and summarizes scanned legal documents using OCR, LayoutLM, and NLP.",
    tags: ["Python", "Streamlit", "OCR", "Transformers", "LayoutLM", "NLP"],
    links: {
      github: "https://github.com/rupak1005/ai-legal-document-scanner",
      external: "https://ai-legal-document-scanner.streamlit.app/"
    },
    image: "/images/projects/ai-legal-doc-scanner.png"
  },
  {
    title: "File Encryption Tool",
    description: "A secure Python-based GUI tool for file encryption and decryption with password protection, drag-and-drop support, and export options.",
    tags: ["Python", "Tkinter", "Cryptography", "GUI", "Security"],
    links: {
      github: "https://github.com/rupak1005/file-encryption-tool",
      external: "https://file-encryption-tool.streamlit.app/"
    },
    image: "/images/projects/file-encryption-tool.png"
  },
  {
    title: "Manageo-Productum",
    description: "A modern web application for managing product catalogs, built with React, TypeScript, and shadcn/ui components.",
    tags: ["React", "TypeScript", "shadcn/ui"],
    links: {
      github: "https://github.com/rupak1005/manageo-productum",
      external: "https://manageo-productum.netlify.app/"
    },
    image: "/images/projects/manageo-productum.jpg"
  },
  {
    title: "DeadlyBot",
    description: "DeadlyRBot is a Telegram bot that provides lecture timetables, reminders, and automated daily notifications using the Telegram Bot API.",
    tags: ["Python", "Telegram API", "Automation"],
    links: {
      github: "https://github.com/rupak1005/deadlyBot"
    },
    image: "/images/projects/deadlybot.jpg"
  },
  {
    title: "DeadlyDots",
    description: "My custom Arch Linux dotfiles, fine-tuned for efficiency, minimalism, and a sleek workflow. These configurations enhance productivity while maintaining a lightweight & aesthetic setup.",
    tags: ["Linux", "Dotfiles"],
    links: {
      github: "https://github.com/rupak1005/deadlydots"
    },
    image: "/images/projects/deadlydots.png"
  }
  
];


const Featured = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <TextReveal>
          <h2 className="section-heading mb-16">Some Things I've Built</h2>
        </TextReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card shadow-md flex flex-col h-full card-hover"
            >
              <a 
                href={project.links.external || project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-48 relative"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold">Go to Project</span>
                </div>
              </a>
              <div className="flex-1 flex flex-col p-6">
                <TextReveal delay={0.1} threshold={0.3}>
                  <p className="font-mono text-primary mb-2">Featured Project</p>
                </TextReveal>
                
                <TextReveal delay={0.2} threshold={0.3}>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                </TextReveal>
                
                <div className="mb-4 flex-1">
                  <TextReveal delay={0.3} threshold={0.3}>
                    <p className="text-muted-foreground">{project.description}</p>
                  </TextReveal>
                </div>
                
                <TextReveal delay={0.4} threshold={0.3}>
                  <ul className="flex flex-wrap gap-3 text-sm font-mono mb-4">
                    {project.tags.map((tag, i) => (
                      <li key={i} className="text-primary">{tag}</li>
                    ))}
                  </ul>
                </TextReveal>
                
                <TextReveal delay={0.5} threshold={0.3}>
                  <div className="flex gap-4 mt-auto">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.external && (
                      <a 
                        href={project.links.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </TextReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
