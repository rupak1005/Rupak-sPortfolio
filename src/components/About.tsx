import { motion } from "framer-motion";
import { 
  FileCode, 
  FileType2, 
  Atom, 
  Server, 
  Code2, 
  Brain, 
  Database, 
  Network, 
  Layers, 
  Paintbrush 
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Rupak, a passionate software engineer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products while pursuing my B.Tech in Computer Science.
            </p>
            <p>
              My journey in programming started back in high school when I first discovered Python. Since then, I've had the privilege of working on diverse projects, from AI-powered applications to full-stack web platforms. Along the way, I also discovered Linux, exploring different distributions like Arch, Debian, and Red Hat, which deepened my interest in system customization and open-source technologies.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {[
                { name: "JavaScript (ES6+)", icon: <FileCode className="w-4 h-4 text-primary" /> },
                { name: "TypeScript", icon: <FileType2 className="w-4 h-4 text-primary" /> },
                { name: "React", icon: <Atom className="w-4 h-4 text-primary" /> },
                { name: "Node.js", icon: <Server className="w-4 h-4 text-primary" /> },
                { name: "Python", icon: <Code2 className="w-4 h-4 text-primary" /> },
                { name: "Machine Learning", icon: <Brain className="w-4 h-4 text-primary" /> },
                { name: "MongoDB", icon: <Database className="w-4 h-4 text-primary" /> },
                { name: "Express", icon: <Network className="w-4 h-4 text-primary" /> },
                { name: "Next.js", icon: <Layers className="w-4 h-4 text-primary" /> },
                { name: "TailwindCSS", icon: <Paintbrush className="w-4 h-4 text-primary" /> }
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  {tech.icon} {tech.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <motion.div 
              className="relative w-72 h-72 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 border-2 border-primary/20 rounded-lg"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(var(--primary), 0.6)",
                    "0 0 0 15px rgba(var(--primary), 0)",
                    "0 0 0 0 rgba(var(--primary), 0.6)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-2 border-2 border-primary/10 rounded-lg"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(var(--primary), 0.4)",
                    "0 0 0 12px rgba(var(--primary), 0)",
                    "0 0 0 0 rgba(var(--primary), 0.4)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 bg-primary/30 mix-blend-overlay"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-primary/40 mix-blend-multiply"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="/images/profile.png"
                alt="Rupak Kumar"
                className="w-full h-full object-cover p-1"
                whileHover={{ 
                  filter: "brightness(1.1) contrast(1.05)",
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 