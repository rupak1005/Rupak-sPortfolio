
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Halcyon Theme",
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tags: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    links: {
      github: "https://github.com/bchiang7/halcyon-site",
      external: "https://halcyon-theme.netlify.app/"
    }
  },
  {
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    tags: ["React", "Styled Components", "Express", "Spotify API"],
    links: {
      github: "https://github.com/bchiang7/spotify-profile",
      external: "https://spotify-profile.herokuapp.com/"
    }
  },
  {
    title: "Devoted Health",
    description: "A website and enrollment platform for a Medicare Advantage health plan providing members with the highest quality healthcare by pairing world-class physicians and healthcare experts with modern technology.",
    tags: ["Next.js", "TypeScript", "Styled Components", "GraphQL"],
    links: {
      github: "#",
      external: "https://www.devoted.com/"
    }
  }
];

const Featured = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-16">
          <span className="numbered-heading">03.</span> Some Things I've Built
        </h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              {/* Project Image */}
              <div className={`md:col-span-7 relative aspect-video bg-card rounded-lg overflow-hidden group ${
                index % 2 === 0 ? '' : 'md:order-last'
              }`}>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className={`md:col-span-7 md:col-start-6 md:row-start-1 z-10 ${
                index % 2 === 0 ? 'md:text-right' : ''
              }`}>
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">
                  <a href={project.links.external} className="hover:text-primary transition-colors">
                    {project.title}
                  </a>
                </h3>
                <div className="bg-card p-6 rounded-lg mb-4 shadow-xl">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <a href={project.links.github} className="text-foreground hover:text-primary transition-colors" aria-label="GitHub Repository">
                    <Github size={20} />
                  </a>
                  <a href={project.links.external} className="text-foreground hover:text-primary transition-colors" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
