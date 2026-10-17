"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { Button } from "@/components/ui/button";
import { FloralSprig } from "@/components/ui/floral-sprig";
import { SITE } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-stone-900"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 h-[124%]">
        <Image src="/images/hero-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/45 to-stone-900/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(184,150,90,0.18),transparent_60%)]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-px relative z-10 mx-auto w-full max-w-content pb-16 pt-36 sm:pb-20 lg:pb-24"
      >
        <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-widest2 text-gold-light">
          <FloralSprig className="h-4 w-auto text-gold-light" />
          Decoración y ambientación<span className="hidden sm:inline"> · {SITE.location}</span>
        </p>

        <h1 className="max-w-5xl font-display text-[3.25rem] leading-[0.98] tracking-[-0.015em] text-cream sm:text-7xl lg:text-[7rem]">
          <RevealText text="Diseñamos espacios que inspiran." wordDelay={0.08} accentWords={2} />
        </h1>

        <div className="mt-10 flex flex-col gap-10 border-t border-cream/15 pt-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="text-pretty max-w-md text-base font-light leading-relaxed text-cream/75 sm:text-lg"
          >
            Decoración personalizada con acabados de alta calidad, pensada para transformar tu
            espacio en una experiencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="#contacto" variant="primary" className="bg-cream text-ink hover:bg-white">
              Solicitar presupuesto
            </Button>
            <Button href="#proyectos" variant="ghost" className="text-cream">
              Ver proyectos
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#nosotros"
        aria-label="Bajar a la siguiente sección"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 text-cream/60 transition-colors hover:text-cream sm:right-8 lg:right-12 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-widest2 [writing-mode:vertical-rl]">Descubre más</span>
        <motion.span
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
