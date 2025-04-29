"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeMotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number; // How far to translate from
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
  ease?: [number, number, number, number]; // Custom cubic-bezier easing
}

export const FadeMotion = ({
  children,
  className,
  delay = 0,
  duration = 0.7,
  distance = 50,
  once = true,
  direction = "up", // default is fade up (from bottom)
  threshold = 0.1,
  ease = [0.32, 0.72, 0, 1], // Smooth easing (custom cubic-bezier)
}: FadeMotionProps) => {
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

  // Determine the initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: distance, x: 0 };
      case "down": return { y: -distance, x: 0 };
      case "left": return { x: distance, y: 0 };
      case "right": return { x: -distance, y: 0 };
      default: return { y: distance, x: 0 };
    }
  };

  const variants = {
    hidden: { 
      opacity: 0, 
      ...getInitialPosition()
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: ease, // Custom smooth easing
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

// Staggered group component for multiple items
export const FadeMotionGroup = ({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
} & Omit<FadeMotionProps, "children" | "delay">) => {
  return (
    <div className={cn("", className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <FadeMotion 
            {...props} 
            delay={index * staggerDelay} 
            key={index}
          >
            {child}
          </FadeMotion>
        );
      })}
    </div>
  );
}; 