const RightSideLinks = () => {
  return (
    <div className="fixed right-10 bottom-0 hidden md:block">
      <div className="flex flex-col items-center gap-6">
        <a 
          href="mailto:rupak1005saini@gmail.com"
          className="font-mono text-muted-foreground social-link-hover [writing-mode:vertical-rl]"
        >
          rupak1005saini@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-primary/30 mt-4"></div>
      </div>
    </div>
  );
};

export default RightSideLinks;
