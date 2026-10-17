"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const hasMultiple = TESTIMONIALS.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, [hasMultiple]);

  const current = TESTIMONIALS[index];
  if (!current) return null;

  return (
    <section className="section-py">
      <div className="container-px mx-auto max-w-content">
        <h2 className="sr-only">Opiniones de clientes</h2>
        <div className="relative min-h-[14rem] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="font-display text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.15] tracking-[-0.025em] text-bone">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm text-bone-muted">
                <span className="text-bone">{current.author}</span>, {current.role}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        {hasMultiple && (
          <div className="mt-10 flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.author}
                type="button"
                aria-label={`Ver reseña de ${t.author}`}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-rose" : "w-4 bg-line"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
