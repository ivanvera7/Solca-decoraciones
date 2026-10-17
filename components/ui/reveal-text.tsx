"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  once?: boolean;
  /** Number of trailing words set in the rose accent. */
  accentWords?: number;
  /** Animate on mount instead of when scrolled into view (above-the-fold text). */
  onMount?: boolean;
};

export function RevealText({
  text,
  className,
  delay = 0,
  wordDelay = 0.06,
  once = true,
  accentWords = 0,
  onMount = false,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : wordDelay, delayChildren: delay },
    },
  };

  // Each word rises out of its own clipped line box.
  const child: Variants = {
    hidden: { y: shouldReduceMotion ? 0 : "105%" },
    visible: { y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  const trigger = onMount
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const, viewport: { once, amount: 0.6 } };

  return (
    <span className={className} aria-label={text}>
      <motion.span initial="hidden" {...trigger} variants={container} aria-hidden="true" className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-top">
            <motion.span
              variants={child}
              className={i >= words.length - accentWords ? "inline-block text-rose" : "inline-block"}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}
