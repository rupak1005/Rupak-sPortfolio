import { ExternalLink, Github } from 'lucide-react';
const projects = [
  {
    "title": "AI Legal Document Scanner",
    "description": "An AI-powered web app that extracts, classifies, and summarizes scanned legal documents using OCR, LayoutLM, and NLP.",
    "tags": ["Python", "Streamlit", "OCR", "Transformers", "LayoutLM", "NLP"],
    "links": {
      "github": "https://github.com/rupak1005/ai-legal-document-scanner",
      "external": "https://ai-legal-document-scanner.streamlit.app/"
    },
    image: "/images/projects/ai-legal-doc-scanner.png"
  },
  {
    "title": "File Encryption Tool",
    "description": "A secure Python-based GUI tool for file encryption and decryption with password protection, drag-and-drop support, and export options.",
    "tags": ["Python", "Tkinter", "Cryptography", "GUI", "Security"],
    "links": {
      "github": "https://github.com/rupak1005/file-encryption-tool",
      "external": "https://file-encryption-tool.streamlit.app/"
    },
    image: "/images/projects/file-encryption-tool.png"
  },
  {
    "title": "Manageo-Productum",
    "description": "A modern web application for managing product catalogs, built with React, TypeScript, and shadcn/ui components.",
    "tags": ["React", "TypeScript", "shadcn/ui"],
    "links": {
      "github": "https://github.com/rupak1005/manageo-productum",
      "external": "https://manageo-productum.netlify.app/"
    },
    image: "/images/projects/manageo-productum.png"
  },
  {
    "title": "Chat-App",
    "description": "Snappy is chat application build with the power of MERN Stack.",
    "tags": ["MERN Stack", "React", "TypeScript", "Tailwind CSS"],
    "links": {
      "github": "https://github.com/rupak1005/chat-app",
      "external": "https://snappy-chat-app.vercel.app/"
    },
    image: "/images/projects/chat-app.png"

  },
  {
    title: "DeadlyBot",
    description: "DeadlyRBot is a Telegram bot that provides lecture timetables, reminders, and automated daily notifications. It is built using Python and integrates with the Telegram Bot API.",
    tags: ["Python", "Telegram API", "Automation"],
    links: {
      github: "https://github.com/rupak1005/deadlyBot",},
      image: "/images/projects/deadlybot.png"
    },
  {
    title: "DeadlyDots",
    description: "my custom Arch Linux dotfiles, fine-tuned for efficiency, minimalism, and a sleek workflow. These configurations enhance productivity while maintaining a lightweight & aesthetic setup.",
    tags: ["Linux", ".files"],
    links: {
      github: "https://github.com/rupak1005/deadlydots",
    },
    image: "/images/projects/deadlydots.png"
  },
  {
    title: "Virtual Drum",
    description: "This project is an AI-powered Virtual Drum Kit that uses OpenCV for hand tracking and Pygame for real-time sound playback. Users can play a virtual drum set using hand gestures, creating a fun and interactive drumming experience.",
    tags: ["JavaScript", "Web Audio API", "Pygame"],
    links: {
      github: "https://github.com/rupak1005/virtualDrum",
    }
  },
  {
    title: "Virtual Piano",
    description: "This project is a Virtual AI-powered Piano that uses OpenVINO for hand tracking and Pygame for sound playback. The model detects hand gestures and maps them to piano keys, allowing users to play a virtual piano in real-time.",
    tags: ["AI", "OpenVINO", "Hand Tracking", "Pygame"],
    links: {
      github: "https://github.com/rupak1005/virtual_piano",
    },
    image: "/images/projects/virtualpiano.png"
  },
  {
    title: "Spam Mail Prediction",
    description: "A machine learning project that classifies emails as Spam or Ham using Logistic Regression. This project processes textual email data, converts it into numerical features using TfidfVectorizer, and predicts the category of emails.",
    tags: ["Machine Learning", "NLP", "Scikit-Learn"],
    links: {
      github: "https://github.com/rupak1005/Spam-mail-prediction",
    }
  },
  {
    title: "Diabetes Prediction System",
    description: "This project is a machine learning system that predicts whether a person is diabetic based on specific medical features using a Support Vector Machine (SVM) classifier.",
    tags: ["Machine Learning", "SVM", "Healthcare"],
    links: {
      github: "https://github.com/rupak1005/diabetes-prediction-system",
    }
  },
  {
    title: "Sonar Object Classification",
    description: "A machine learning project to classify sonar signals as rocks or mines using Logistic Regression.",
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
                <a 
                  href={project.links.external || project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold">Go to Project</span>
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div className="md:col-span-5">
                <p className="font-mono text-primary mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 text-sm font-mono mb-4 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.tags.map((tag, i) => (
                    <li key={i} className="text-primary">{tag}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
