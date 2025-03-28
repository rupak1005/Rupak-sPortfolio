
import { ExternalLink, Github } from 'lucide-react';
const projects = [
  {
    title: "DeadlyBot",
    description: "A Telegram bot for scheduling reminders and notifications.",
    tags: ["Python", "Telegram API", "Automation"],
    links: {
      github: "https://github.com/rupak1005/deadlyBot",
    },
  },
  {
    title: "DeadlyDots",
    description: "My ARCH linux configs",
    tags: ["Linux", ".files"],
    links: {
      github: "https://github.com/rupak1005/deadlydots",
    },
  },
  {
    title: "Virtual Drum",
    description: "A virtual drum kit using keyboard and mouse events.",
    tags: ["JavaScript", "Web Audio API", "Pygame"],
    links: {
      github: "https://github.com/rupak1005/virtualDrum",
    },
  },
  {
    title: "Virtual Piano",
    description: "A hand-tracking based piano using OpenVINO and Pygame.",
    tags: ["AI", "OpenVINO", "Hand Tracking", "Pygame"],
    links: {
      github: "https://github.com/rupak1005/virtual_piano",
    },
  },
  {
    title: "Spam Mail Prediction",
    description: "A machine learning model to detect spam emails.",
    tags: ["Machine Learning", "NLP", "Scikit-Learn"],
    links: {
      github: "https://github.com/rupak1005/Spam-mail-prediction",
    },
  },
  {
    title: "Diabetes Prediction System",
    description: "A predictive system for diabetes using SVM.",
    tags: ["Machine Learning", "SVM", "Healthcare"],
    links: {
      github: "https://github.com/rupak1005/diabetes-prediction-system",
    },
  },
  {
    title: "Sonar Object Classification",
    description: "Classifies objects as rocks or mines using ML.",
    tags: ["Machine Learning", "Logistic Regression"],
    links: {
      github: "https://github.com/rupak1005/Sonar-Object-Classification",
    },
  },
  {
    title: "WebMajesty KOC32 (CipherSchools)",
    description: "A web development project under CipherSchools.",
    tags: ["Web Development", "JavaScript", "HTML & CSS"],
    links: {
      github: "https://github.com/rupak1005/Webmajesty_KOC32_CipherSchools",
    },
  },
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
