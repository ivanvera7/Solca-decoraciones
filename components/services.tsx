"use client";

import { Sofa, Sparkles, Gift, Compass, ArrowUpRight, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { FloralSprig } from "@/components/ui/floral-sprig";
import { Button } from "@/components/ui/button";
import { SERVICES, type Service } from "@/lib/constants";

const ICONS: Record<Service["icon"], LucideIcon> = {
  sofa: Sofa,
  sparkles: Sparkles,
  gift: Gift,
  compass: Compass,
};

export function Services() {
  return (
    <section id="servicios" className="section-py bg-stone-50">
      <div className="container-px mx-auto grid max-w-content gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
                <FloralSprig className="h-4 w-auto" />
                Servicios
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl lg:text-6xl">
                <RevealText text="Un servicio integral, pensado en cada detalle." accentWords={2} />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-pretty mt-7 max-w-sm text-[15px] font-light leading-relaxed text-stone-600">
                Del primer boceto al último globo: nos ocupamos de todo para que tú solo
                disfrutes el resultado.
              </p>
              <div className="mt-10">
                <Button href="#contacto" variant="secondary">
                  Consultar disponibilidad
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="border-t border-stone-300 lg:col-span-7">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.06} blur={false}>
                <article className="group border-b border-stone-300">
                  <a
                    href="#contacto"
                    data-cursor-hover
                    className="grid grid-cols-[3rem_1fr_auto] items-start gap-x-4 py-9 transition-colors duration-500 sm:grid-cols-[4.5rem_1fr_auto] sm:py-11"
                  >
                    <span className="pt-2 font-display text-lg italic text-gold-dark tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-tight text-ink transition-transform duration-500 ease-premium group-hover:translate-x-2 sm:text-[2rem]">
                        {service.title}
                      </h3>
                      <p className="text-pretty mt-3 max-w-lg text-sm font-light leading-relaxed text-stone-500 sm:text-[15px]">
                        {service.description}
                      </p>
                    </div>
                    <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-all duration-500 ease-premium group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                      <Icon size={17} strokeWidth={1.3} className="group-hover:hidden" />
                      <ArrowUpRight size={17} strokeWidth={1.3} className="hidden group-hover:block" />
                    </span>
                  </a>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
