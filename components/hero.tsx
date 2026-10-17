"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { Button } from "@/components/ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

// Three real event photos stacked like prints on a table.
const PRINTS = [
  { src: "/images/work-12.jpg", alt: "Ambientación dorada con neón", className: "left-[4%] top-[6%] w-[58%] -rotate-[5deg]", depth: -60 },
  { src: "/images/work-3.jpg", alt: "Ambientación rosa y dorado", className: "right-0 top-[18%] w-[54%] rotate-[4deg]", depth: -120 },
  { src: "/images/work-13.jpg", alt: "Cumpleaños elegante negro y plata", className: "bottom-[2%] left-[18%] w-[50%] -rotate-[2deg]", depth: -30 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "18%"]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-28 lg:pb-12 lg:pt-24"
    >
      {/* Soft rose light behind the prints: gives the dark page depth without a gradient blob. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-[10%] h-[70vh] w-[60vw] rounded-full bg-rose/[0.07] blur-[120px]"
      />

      <div className="container-px relative mx-auto grid w-full max-w-content items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-7 text-xs font-medium uppercase tracking-label text-bone-muted"
          >
            Decoración y ambientación<span className="hidden sm:inline"> en Paraguay</span>
          </motion.p>

          <h1 className="font-display text-[clamp(2.9rem,6.6vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-bone">
            <RevealText text="Diseñamos espacios que inspiran." wordDelay={0.07} accentWords={2} onMount delay={0.15} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="text-pretty mt-8 max-w-md text-lg leading-relaxed text-bone-muted"
          >
            Decoración personalizada con acabados de alta calidad, pensada para transformar tu
            espacio en una experiencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <Button href="#contacto">Pedir presupuesto</Button>
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 text-[15px] text-bone transition-colors hover:text-rose"
            >
              <span className="link-underline">Ver proyectos</span>
              <ArrowDownRight
                size={18}
                strokeWidth={1.6}
                className="transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </motion.div>

        <div className="relative aspect-[5/6] w-full max-w-md justify-self-center sm:max-w-lg lg:col-span-5 lg:max-w-none">
          {PRINTS.map((print, i) => (
            <Print key={print.src} {...print} index={i} progress={scrollYProgress} reduce={!!shouldReduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Print({
  src,
  alt,
  className,
  depth,
  index,
  progress,
  reduce,
}: (typeof PRINTS)[number] & {
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  // Each print drifts at its own speed on scroll: cheap parallax depth.
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : depth]);

  return (
    <motion.div style={{ y }} className={`absolute ${className}`}>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.35 + index * 0.15, ease: EASE }}
        whileHover={reduce ? undefined : { scale: 1.03, rotate: 0, zIndex: 10 }}
        className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 22vw, 50vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
