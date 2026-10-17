"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import { Button } from "@/components/ui/button";

export function Cta() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  // The framed photo grows to fill the width as it reaches the center of the screen.
  const scale = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 1 : 0.86, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 1 : 1.2, 1]);

  return (
    <section ref={ref} className="container-px mx-auto max-w-content py-12 lg:py-20">
      <motion.div
        style={{ scale }}
        className="relative flex min-h-[80svh] items-end overflow-hidden rounded-3xl border border-line"
      >
        <motion.div style={{ scale: imageScale }} className="absolute inset-0">
          <Image src="/images/work-13.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/20" />

        <div className="relative w-full p-7 sm:p-12 lg:p-16">
          <h2 className="max-w-4xl font-display text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-bone">
            <RevealText text="Hablemos de tu próximo proyecto." accentWords={2} />
          </h2>
          <div className="mt-10">
            <Button href="#contacto">Pedir presupuesto</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
