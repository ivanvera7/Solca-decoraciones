import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { FloralSprig } from "@/components/ui/floral-sprig";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section className="section-py relative overflow-hidden bg-stone-50">
      <Image
        src="/images/process-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover opacity-25"
      />
      <div className="container-px relative mx-auto max-w-content">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
              <FloralSprig className="h-4 w-auto" />
              Nuestro proceso
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl lg:text-6xl">
              <RevealText text="Cuatro etapas, un mismo cuidado." accentWords={2} />
            </h2>
          </ScrollReveal>
        </div>

        <div className="relative mt-20 lg:mt-24">
          <div className="absolute left-[19px] top-0 h-full w-px bg-stone-300 lg:left-0 lg:top-[19px] lg:h-px lg:w-full" />
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.12}>
                <div className="relative flex gap-6 pl-14 lg:flex-col lg:gap-0 lg:pl-0">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-cream font-display text-base italic text-gold-dark tabular-nums lg:relative">
                    {step.number}
                  </div>
                  <div className="lg:mt-8 lg:pr-6">
                    <h3 className="font-display text-2xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-stone-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
