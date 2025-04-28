import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
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
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 justify-center gap-6">
              {achievements.map((achievement, index) => (
                <CardContainer key={index} className="inter-var mx-auto">
                  <CardBody className="bg-card text-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-card dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border mx-auto">
                    <CardItem
                      translateZ="50"
                      className="text-2xl md:text-3xl font-bold"
                    >
                      {achievement.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-base md:text-lg max-w-xl mt-2"
                    >
                      {achievement.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        height="400"
                        width="800"
                        className="w-full max-h-60 object-contain rounded-xl group-hover/card:shadow-xl mx-auto bg-black"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                      <CardItem
                        translateZ={20}
                        as="span"
                        className="px-4 py-2 rounded-xl text-xs font-normal"
                      >
                        {achievement.date}
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="span"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Achievement
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;