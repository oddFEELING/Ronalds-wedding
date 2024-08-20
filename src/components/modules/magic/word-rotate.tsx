"use client";

import { useEffect, useState, ReactNode } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
  prefix?: string | ReactNode;
  postfix?: string | ReactNode;
  animClass?: string;
}

export default function WordRotate({
  words,
  duration = 2500,
  prefix = "",
  postfix = "",
  animClass = "",
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <div className={cn("flex items-center", className)}>
          <span>{prefix}</span>
          <motion.span
            key={words[index]}
            {...framerProps}
            className={cn(animClass)}
          >
            {words[index]}
          </motion.span>
          <span>{postfix}</span>
        </div>
      </AnimatePresence>
    </div>
  );
}
