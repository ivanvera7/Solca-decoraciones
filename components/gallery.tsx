"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { FloralSprig } from "@/components/ui/floral-sprig";
import { TiltCard } from "@/components/ui/tilt-card";
import { GALLERY, SITE } from "@/lib/constants";

// Repeating aspect ratios give the masonry columns an organic rhythm.
const ASPECTS = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/5]", "aspect-[2/3]"];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section id="proyectos" className="section-py bg-cream">
      <div className="container-px mx-auto max-w-content">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
                <FloralSprig className="h-4 w-auto" flip />
                Proyectos
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl lg:text-6xl">
                <RevealText text="Una selección de nuestro trabajo." accentWords={2} />
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group inline-flex items-center gap-2 text-sm text-stone-600 transition-colors hover:text-ink"
            >
              <span className="link-underline">Más trabajos en {SITE.instagramHandle}</span>
              <ArrowUpRight size={16} strokeWidth={1.4} className="transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </ScrollReveal>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:mt-20 lg:columns-3 lg:gap-6">
          {GALLERY.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid lg:mb-6">
              <figure>
                <TiltCard className={ASPECTS[i % ASPECTS.length]} maxTilt={4}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    data-cursor-hover
                    aria-label={`Ampliar: ${item.title}`}
                    className="group relative block h-full w-full overflow-hidden rounded-[3px] text-left"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 92vw"
                      className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                  </button>
                </TiltCard>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-display text-lg leading-snug text-ink">{item.title}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-widest2 text-stone-400">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900 p-4"
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <button
              aria-label="Cerrar"
              onClick={close}
              data-cursor-hover
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-cream/80 transition-colors hover:text-cream"
            >
              <X size={22} strokeWidth={1.3} />
            </button>

            <button
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              data-cursor-hover
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-cream sm:left-6"
            >
              <ChevronLeft size={26} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              data-cursor-hover
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-cream sm:right-6"
            >
              <ChevronRight size={26} strokeWidth={1.2} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/5] w-full max-w-md sm:max-w-lg"
            >
              <Image
                src={GALLERY[activeIndex]!.image}
                alt={GALLERY[activeIndex]!.title}
                fill
                sizes="90vw"
                className="rounded-sm object-cover"
              />
              <div className="absolute inset-x-0 -bottom-12 text-center">
                <p className="text-[10px] uppercase tracking-widest2 text-gold-light">
                  {GALLERY[activeIndex]!.category}
                </p>
                <p className="mt-1 font-display text-lg text-cream">{GALLERY[activeIndex]!.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
