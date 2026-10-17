import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { FloralSprig } from "@/components/ui/floral-sprig";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedLogoPanel } from "@/components/ui/animated-logo-panel";

export function About() {
  return (
    <section id="nosotros" className="section-py relative overflow-hidden bg-cream">
      <div className="container-px mx-auto grid max-w-content items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <ScrollReveal className="relative order-2 lg:order-1">
          <TiltCard className="aspect-[4/5]" maxTilt={4}>
            <AnimatedLogoPanel />
          </TiltCard>
          <div className="absolute -bottom-8 -right-6 hidden h-32 w-32 flex-col items-center justify-center gap-2 border border-gold/40 bg-cream sm:flex">
            <FloralSprig className="h-6 w-auto" />
            <span className="font-display text-sm italic text-gold-dark">Desde el detalle</span>
          </div>
        </ScrollReveal>

        <div className="order-1 lg:order-2">
          <ScrollReveal>
            <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
              <FloralSprig className="h-4 w-auto" />
              Sobre nosotros
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl lg:text-6xl">
              <RevealText text="Cada detalle, hecho con dedicación artesanal." accentWords={2} />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-7 max-w-lg text-balance text-[15px] font-light leading-relaxed text-stone-600 sm:text-base">
              En SOLCA Decoraciones creemos que cada espacio y cada celebración cuentan una
              historia. Combinamos sensibilidad estética y trabajo artesanal para crear
              ambientaciones, decoración de eventos y piezas personalizadas que reflejan la
              identidad de quienes las encargan.
            </p>
            <p className="mt-5 max-w-lg text-balance text-[15px] font-light leading-relaxed text-stone-600 sm:text-base">
              Desde arcos de globos y ambientaciones florales hasta manualidades y regalos a
              medida, cuidamos materiales, proporciones y color en cada proyecto, grande o
              pequeño.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-200 pt-8 sm:max-w-md">
              <div>
                <dt className="font-display text-5xl text-ink">+2</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest2 text-stone-500">
                  Años de experiencia
                </dd>
              </div>
              <div>
                <dt className="font-display text-5xl text-ink">100%</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest2 text-stone-500">
                  Proyectos a medida
                </dd>
              </div>
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
