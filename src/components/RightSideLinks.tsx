
const RightSideLinks = () => {
  return (
    <div className="fixed right-10 bottom-0 hidden md:block">
      <div className="flex flex-col items-center gap-6">
        <a 
          href="mailto:hello@example.com"
          className="font-mono text-muted-foreground hover:text-primary transform hover:-translate-y-2 transition-all duration-300 ease-in-out [writing-mode:vertical-rl]"
        >
          hello@example.com
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-muted-foreground hover:text-primary transform hover:-translate-y-2 transition-all duration-300 ease-in-out [writing-mode:vertical-rl]"
        >
          Resume
        </a>
        <div className="w-[1px] h-24 bg-muted-foreground mt-4"></div>
      </div>
    </div>
  );
};

export default RightSideLinks;
