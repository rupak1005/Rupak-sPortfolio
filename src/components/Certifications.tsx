import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
const certifications = [
    {
      title: "CompTIA Linux+ Training",
      image: "/images/cert-linux.png",
      issuer: "Lovely Professional University & Secuneus Tech Pvt. Ltd.",
      date: "2024"
    },
    {
      title: "Generative AI for Everyone",
      image: "/images/cert-generativeai.png",
      issuer: "DeepLearning.AI on Coursera",
      date: "2024"
    },
    {
      title: "Generative AI Primer",
      image: "/images/cert-gaiprimer.png",
      issuer: "Vanderbilt University on Coursera",
      date: "2024"
    },
    {
      title: "Introduction to Large Language Models",
      image: "/images/cert-llm.png",
      issuer: "Google Cloud on Coursera",
      date: "2024"
    },
    {
      title: "GenAI for Everyone",
      image: "/images/cert-genai-fractal.png",
      issuer: "Fractal Analytics on Coursera",
      date: "2024"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      image: "/images/cert-prompt.png",
      issuer: "Vanderbilt University on Coursera",
      date: "2024"
    },
    {
      title: "Bits and Bytes of Computer Networking",
      image: "/images/cert-networking.png",
      issuer: "Google on Coursera",
      date: "2023"
    },
    {
      title: "Mastering DSA using C and C++",
      image: "/images/cert-dsa.png",
      issuer: "Udemy (Instructor: Abdul Bari)",
      date: "2023"
    },
    {
      title: "Fundamentals of Management",
      image: "/images/cert-management.png",
      issuer: "University of California, Irvine on Coursera",
      date: "2023"
    },
    {
      title: "Become an Ethical Hacker",
      image: "/images/cert-ethicalhacker.png",
      issuer: "LinkedIn Learning",
      date: "2023"
    }
  ];
  

const achievements = [
    {
        title: "Dean's List Top 10%",
        image: "/images/deanslist.png",
        description: "Recognized in the top 10% of students for academic excellence by Lovely Professional University",
        date: "2024"
      }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-16">
          <span className="numbered-heading">04.</span> Certifications & Achievements
        </h2>
        
        <div className="space-y-12">
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Trophy className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="overflow-hidden card-hover border-primary/20">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-card">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Trophy className="h-5 w-5 text-primary" />
              Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="overflow-hidden card-hover border-primary/20">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-card">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;