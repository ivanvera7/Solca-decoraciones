import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ScrollWords } from "@/components/ui/scroll-words";

const STATS = [
  { value: "+2", label: "años de experiencia" },
  { value: "100%", label: "proyectos a medida" },
  { value: "24 h", label: "para responder tu consulta" },
];

export function About() {
  return (
    <section id="nosotros" className="section-py">
      <div className="container-px mx-auto max-w-content">
        <h2 className="sr-only">Sobre nosotros</h2>
        <ScrollWords
          className="max-w-5xl font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium leading-[1.15] tracking-[-0.025em] text-bone"
          text="En SOLCA creemos que cada espacio y cada celebración cuentan una historia. Combinamos sensibilidad estética y trabajo artesanal para crear ambientaciones que reflejan a quienes las encargan."
        />

        <div className="mt-20 grid gap-12 border-t border-line pt-12 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-5">
            <p className="text-pretty max-w-md text-base leading-relaxed text-bone-muted">
              Desde arcos de globos y ambientaciones florales hasta manualidades y regalos a medida,
              cuidamos materiales, proporciones y color en cada proyecto, grande o pequeño.
            </p>
          </ScrollReveal>
          <dl className="grid grid-cols-3 gap-6 lg:col-span-7">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <dt className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-rose tabular-nums">
                  {stat.value}
                </dt>
                <dd className="mt-3 text-sm leading-snug text-bone-muted">{stat.label}</dd>
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
