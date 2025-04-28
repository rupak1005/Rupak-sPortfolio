import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export const TracingBeam = ({ children, className }: TracingBeamProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.offsetHeight);
    }
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, -contentHeight]);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />
      <motion.div
        ref={ref}
        style={{ y }}
        className="relative z-10"
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute left-0 top-0 h-4 w-4 rounded-full bg-blue-500"
        style={{
          y,
          x: -7,
        }}
      />
      <motion.div
        className="absolute left-0 top-0 h-4 w-4 rounded-full bg-blue-500/50 blur-sm"
        style={{
          y,
          x: -7,
        }}
      />
    </div>
  );
}; 