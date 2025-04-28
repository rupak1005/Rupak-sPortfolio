const Education = () => {
  const education = [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science",
      duration: "2022 - 2026",
      description: "Currently pursuing B.Tech in Computer Science with specialization in Full Stack Development and Machine Learning."
    },
    {
      school: "Kendriya Vidyalaya",
      degree: "Higher Secondary Education (XII)",
      duration: "2019 - 2021",
      description: "Completed senior secondary education with focus on Physics, Chemistry, and Mathematics."
    },
    {
      school: "Kendriya Vidyalaya",
      degree: "Secondary Education (X)",
      duration: "2018 - 2019",
      description: "Completed secondary education with distinction."
    }
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-16">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-card rounded-lg p-6 card-hover">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                <span className="text-primary font-mono">{edu.duration}</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 