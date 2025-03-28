
import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

interface Command {
  name: string;
  description: string;
  action: () => void;
}

const Terminal = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<XTerm | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [currentLine, setCurrentLine] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);

  const projects = [
    { name: "Halcyon Theme", description: "A minimal, dark blue theme for VS Code and other editors" },
    { name: "Spotify Profile", description: "A web app for visualizing personalized Spotify data" },
    { name: "Devoted Health", description: "A website and enrollment platform for a Medicare Advantage health plan" }
  ];

  const commands: Record<string, Command> = {
    help: {
      name: 'help',
      description: 'Show available commands',
      action: () => {
        const commandsList = Object.values(commands)
          .map(cmd => `${cmd.name}\t- ${cmd.description}`)
          .join('\r\n');
        xtermRef.current?.writeln('\r\nAvailable commands:');
        xtermRef.current?.writeln(commandsList);
        xtermRef.current?.writeln('');
      }
    },
    clear: {
      name: 'clear',
      description: 'Clear the terminal',
      action: () => {
        xtermRef.current?.clear();
      }
    },
    projects: {
      name: 'projects',
      description: 'List my projects',
      action: () => {
        xtermRef.current?.writeln('\r\nProjects:');
        projects.forEach((project, index) => {
          xtermRef.current?.writeln(`${index + 1}. ${project.name} - ${project.description}`);
        });
        xtermRef.current?.writeln('');
      }
    },
    about: {
      name: 'about',
      description: 'Show information about me',
      action: () => {
        xtermRef.current?.writeln('\r\nBrittany Chiang');
        xtermRef.current?.writeln('Frontend Engineer at Upstatement');
        xtermRef.current?.writeln('Based in Boston, MA');
        xtermRef.current?.writeln('Specialized in building exceptional digital experiences');
        xtermRef.current?.writeln('');
      }
    },
    contact: {
      name: 'contact',
      description: 'Show contact information',
      action: () => {
        xtermRef.current?.writeln('\r\nContact:');
        xtermRef.current?.writeln('Email: hello@brittanychiang.com');
        xtermRef.current?.writeln('GitHub: github.com/bchiang7');
        xtermRef.current?.writeln('LinkedIn: linkedin.com/in/bchiang7');
        xtermRef.current?.writeln('');
      }
    },
    exit: {
      name: 'exit',
      description: 'Close the terminal',
      action: () => {
        setIsTerminalOpen(false);
      }
    }
  };

  useEffect(() => {
    // Initialize terminal
    if (isTerminalOpen && terminalRef.current && !xtermRef.current) {
      const term = new XTerm({
        cursorBlink: true,
        theme: {
          background: '#112240',
          foreground: '#e6f1ff',
          cursor: '#64ffda',
          cursorAccent: '#112240',
          selection: 'rgba(100, 255, 218, 0.3)',
          black: '#112240',
          brightBlack: '#8892b0',
          red: '#ff5555',
          brightRed: '#ff6e6e',
          green: '#64ffda',
          brightGreen: '#a9fef7',
          yellow: '#f1fa8c',
          brightYellow: '#ffffa5',
          blue: '#6272a4',
          brightBlue: '#d6deeb',
          magenta: '#ff79c6',
          brightMagenta: '#ff92df',
          cyan: '#8be9fd',
          brightCyan: '#a4ffff',
          white: '#ccd6f6',
          brightWhite: '#e6f1ff'
        },
        fontSize: 14,
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      });

      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      fitAddonRef.current = fitAddon;

      term.open(terminalRef.current);
      xtermRef.current = term;
      
      // Fit terminal to container
      setTimeout(() => {
        fitAddon.fit();
      }, 100);

      // Write welcome message
      term.writeln('Welcome to Brittany Chiang\'s portfolio terminal!');
      term.writeln('Type "help" to see available commands.');
      term.writeln('');
      term.write('> ');

      // Handle user input
      term.onKey(({ key, domEvent }) => {
        const ev = domEvent;
        const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

        if (ev.keyCode === 13) { // Enter key
          // Process the command
          term.writeln('');
          if (currentLine.trim()) {
            const commandName = currentLine.trim().toLowerCase();
            if (commands[commandName]) {
              commands[commandName].action();
            } else {
              term.writeln(`Command not found: ${commandName}`);
              term.writeln('Type "help" for a list of available commands.');
            }
          }
          setCurrentLine('');
          setCursorPosition(0);
          term.write('> ');
        } else if (ev.keyCode === 8) { // Backspace
          if (cursorPosition > 0) {
            setCurrentLine(prev => prev.substring(0, cursorPosition - 1) + prev.substring(cursorPosition));
            setCursorPosition(prev => Math.max(0, prev - 1));
            
            // Update terminal display
            term.write('\b \b');
          }
        } else if (printable) {
          setCurrentLine(prev => prev.substring(0, cursorPosition) + key + prev.substring(cursorPosition));
          setCursorPosition(prev => prev + 1);
          term.write(key);
        }
      });

      return () => {
        term.dispose();
        xtermRef.current = null;
      };
    }
  }, [isTerminalOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (fitAddonRef.current) {
        fitAddonRef.current.fit();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsTerminalOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-card hover:bg-primary/20 text-primary shadow-lg transition-all duration-300"
        aria-label="Toggle Terminal"
        title="Toggle Terminal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      </button>

      {isTerminalOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-40 h-80 bg-card border-t border-muted shadow-2xl transform transition-transform duration-300">
          <div className="flex items-center justify-between bg-background p-2 border-b border-muted">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm text-muted-foreground">portfolio-terminal</div>
            <button
              onClick={() => setIsTerminalOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close Terminal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div ref={terminalRef} className="h-[calc(100%-36px)] w-full"></div>
        </div>
      )}
    </>
  );
};

export default Terminal;
