
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "top-to-bottom" | "bottom-to-top";
  threshold?: number;
}

export const TextReveal = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "top-to-bottom",
  threshold = 0.5,
}: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, once, threshold]);

  const initialY = direction === "top-to-bottom" ? "-100%" : "100%";

  const variants = {
    hidden: { opacity: 0, y: initialY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // custom ease for smooth reveal
      },
    },
  };

  return (
    <div
      className={cn("overflow-hidden", className)}
      ref={setRef}
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const TextRevealGroup = ({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
} & Omit<TextRevealProps, "children" | "delay">) => {
  return (
    <div className={cn("", className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <TextReveal 
            {...props} 
            delay={index * staggerDelay} 
            key={index}
          >
            {child}
          </TextReveal>
        );
      })}
    </div>
  );
};
