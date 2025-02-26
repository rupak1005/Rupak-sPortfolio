
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
  }
];

const Featured = () => {
  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="numbered-heading">02.</span> Some Things I've Built
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-card rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 0 ? 'md:order-first' : ''}`}>
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href={project.links.github} className="text-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.links.external} className="text-foreground hover:text-primary transition-colors">
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
