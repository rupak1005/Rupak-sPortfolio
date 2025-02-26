
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-mono text-primary mb-4">03. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground mb-12">
          Although I'm not currently looking for any new opportunities, my inbox is always 
          open. Whether you have a question or just want to say hi, I'll try my best 
          to get back to you!
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-8 py-4 border border-primary text-primary font-mono
          hover:bg-primary/10 transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
