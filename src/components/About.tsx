const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-16">
          <span className="numbered-heading">01.</span> About Me
        </h2>
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
                "JavaScript (ES6+)",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "Machine Learning",
                "MongoDB",
                "Express",
                "Next.js",
                "TailwindCSS"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-primary/10">
              <img 
                src="/images/profile.jpg" 
                alt="Rupak Kumar" 
                className="w-full h-full object-cover mix-blend-multiply grayscale contrast-100 brightness-90 hover:filter-none transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 