"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  wordDelay?: number;
  once?: boolean;
  /** Number of trailing words set in gold italic. */
  accentWords?: number;
};

export function RevealText({
  text,
  className,
  as = "span",
  delay = 0,
  wordDelay = 0.06,
  once = true,
  accentWords = 0,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as];

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : wordDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
        variants={container}
        aria-hidden="true"
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 align-top">
            <motion.span
              variants={child}
              className={i >= words.length - accentWords ? "inline-block italic text-gold" : "inline-block"}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
