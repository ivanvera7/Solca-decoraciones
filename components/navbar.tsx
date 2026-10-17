"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Hide while scrolling down, reveal on any scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 400 && y > prev);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      animate={{ y: hidden && !open ? "-120%" : "0%" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
    >
      <nav
        className={cn(
          "container-px mx-auto flex h-16 max-w-content items-center justify-between transition-all duration-500 ease-premium",
          scrolled && "lg:max-w-5xl"
        )}
      >
        <div
          className={cn(
            "flex h-full w-full items-center justify-between rounded-full pl-4 pr-2 transition-all duration-500 ease-premium",
            scrolled || open ? "border border-line bg-night/75 backdrop-blur-xl" : "border border-transparent"
          )}
        >
          <Logo showWordmark={false} className="w-8" />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-bone-muted transition-colors duration-300 hover:bg-night-3 hover:text-bone"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="hidden rounded-full bg-rose px-5 py-2.5 text-sm font-medium text-night transition-colors duration-300 hover:bg-rose-deep active:scale-[0.98] lg:inline-flex"
          >
            Pedir presupuesto
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-bone transition-colors hover:bg-night-3 lg:hidden"
          >
            {open ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 -z-10 bg-night/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px flex h-full flex-col justify-center gap-2">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: EASE }}
                    className="block font-display text-5xl font-semibold tracking-[-0.03em] text-bone transition-colors hover:text-rose"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
              <li className="pt-8">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full bg-rose px-6 py-3 font-medium text-night"
                >
                  Pedir presupuesto
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
