"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Bento slots, one per service (in SERVICES order): one tall hero tile, one wide, two small.
const SLOTS = [
  "lg:col-span-6 lg:row-span-2 min-h-[26rem]",
  "lg:col-span-6 min-h-[20rem]",
  "lg:col-span-3 min-h-[20rem]",
  "lg:col-span-3 min-h-[20rem]",
];

export function Services() {
  return (
    <section id="servicios" className="section-py">
      <div className="container-px mx-auto max-w-content">
        <h2 className="max-w-3xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.04em] text-bone">
          <RevealText text="Un servicio integral, pensado en cada detalle." accentWords={2} />
        </h2>

        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12 lg:grid-rows-[20rem_20rem]">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={(i % 2) * 0.08} className={cn("flex", SLOTS[i])}>
              <a
                href="#contacto"
                aria-label={`${service.title}: pedir presupuesto`}
                className={cn(
                  "group relative flex w-full flex-col justify-end overflow-hidden rounded-3xl border border-line p-7 sm:p-8",
                  service.image ? "bg-night-2" : "bg-rose text-night"
                )}
              >
                {service.image && (
                  <>
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/5" />
                  </>
                )}

                <span
                  className={cn(
                    "absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-500 ease-premium group-hover:rotate-45",
                    service.image ? "bg-bone text-night" : "bg-night text-rose"
                  )}
                >
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </span>

                <div className="relative">
                  <h3
                    className={cn(
                      "font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl",
                      service.image ? "text-bone" : "text-night"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-pretty mt-3 max-w-md text-[15px] leading-relaxed",
                      service.image ? "text-bone/80" : "text-night/75"
                    )}
                  >
                    {service.description}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
