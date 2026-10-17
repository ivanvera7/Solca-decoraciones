"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { GALLERY, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Alternating print shapes keep the strip from reading as a uniform carousel.
const SHAPES = ["aspect-[4/5]", "aspect-[5/4]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[5/4]"];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState(false);
  const [distance, setDistance] = useState(0);

  // Pinned horizontal pan only on wide screens with motion allowed; else a native swipe strip.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const update = () => setPan(mql.matches && !shouldReduceMotion);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!pan || !track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pan]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // "Ver" bubble: position is set straight from the pointer (no spring), so it never trails.
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [cursorOn, setCursorOn] = useState(false);
  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

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

  const active = activeIndex === null ? null : GALLERY[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="relative"
      style={pan ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={cn(pan ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "section-py")}>
        <div className="container-px mx-auto w-full max-w-content">
          <p className="mb-5 text-xs font-medium uppercase tracking-label text-bone-muted">Proyectos</p>
          <h2 className="max-w-3xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.04em] text-bone">
            <RevealText text="Una selección de nuestro trabajo." accentWords={2} />
          </h2>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 text-[15px] text-bone-muted transition-colors hover:text-rose"
          >
            <span className="link-underline">Más trabajos en {SITE.instagramHandle}</span>
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
        </div>

        <motion.div
          ref={trackRef}
          style={pan ? { x } : undefined}
          onPointerMove={onPointerMove}
          onPointerEnter={(e) => e.pointerType === "mouse" && setCursorOn(true)}
          onPointerLeave={() => setCursorOn(false)}
          className={cn(
            "mt-10 flex items-end gap-5 lg:mt-12",
            pan
              ? "w-max px-12"
              : "snap-x snap-mandatory overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8"
          )}
        >
          {GALLERY.map((item, i) => (
            <figure key={item.title} className="shrink-0 snap-start">
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Ampliar: ${item.title}`}
                className={cn(
                  "group relative block overflow-hidden rounded-3xl",
                  SHAPES[i % SHAPES.length],
                  pan ? "h-[52vh]" : "h-[min(60vh,26rem)]"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.05]"
                />
              </button>
              <figcaption className="mt-4 flex items-baseline justify-between gap-6">
                <span className="font-display text-lg font-medium tracking-[-0.01em] text-bone">{item.title}</span>
                <span className="text-xs text-bone-faint">{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>

        {pan && (
          <div className="container-px mx-auto mt-10 w-full max-w-content">
            <div className="h-px w-full bg-line">
              <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-rose" />
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {cursorOn && activeIndex === null && (
          <motion.div
            aria-hidden="true"
            style={{ x: cursorX, y: cursorY }}
            className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="-ml-10 -mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-rose text-sm font-medium text-night"
            >
              Ver
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={close}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors hover:bg-night-3"
            >
              <X size={20} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line text-bone transition-colors hover:bg-night-3 sm:left-6"
            >
              <ChevronLeft size={22} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line text-bone transition-colors hover:bg-night-3 sm:right-6"
            >
              <ChevronRight size={22} strokeWidth={1.6} />
            </button>

            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image src={active.image} alt={active.title} fill sizes="90vw" className="object-cover" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-bone">
                <span className="font-display text-xl font-medium">{active.title}</span>
                <span className="text-sm text-bone-muted">{active.category}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
