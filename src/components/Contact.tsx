
const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-mono text-primary mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground mb-12 leading-relaxed max-w-lg mx-auto">
          I'm currently looking for new opportunities, my inbox is always 
          open. Whether you have a question or just want to say hi, I'll try my best 
          to get back to you!
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-8 py-4 border border-primary text-primary font-mono
          hover:bg-primary/10 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
