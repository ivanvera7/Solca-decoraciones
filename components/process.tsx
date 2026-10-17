"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  // The rose line fills as the reader moves through the steps.
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-py">
      <div className="container-px mx-auto grid max-w-content gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.04em] text-bone">
              <RevealText text="Cuatro etapas, un mismo cuidado." accentWords={2} />
            </h2>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-7">
          <div aria-hidden="true" className="absolute bottom-2 left-[1.15rem] top-2 w-px bg-line">
            <motion.div style={{ scaleY: fill }} className="h-full w-px origin-top bg-rose" />
          </div>
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.number} className="relative pb-16 pl-16 last:pb-0 sm:pl-20">
              <span className="absolute left-0 top-0 flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border border-line bg-night text-xs font-medium text-rose tabular-nums">
                {step.number}
              </span>
              <ScrollReveal delay={i * 0.04}>
                <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.03em] text-bone">
                  {step.title}
                </h3>
                <p className="text-pretty mt-4 max-w-md text-base leading-relaxed text-bone-muted">
                  {step.description}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
