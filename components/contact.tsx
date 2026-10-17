"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { Magnetic } from "@/components/ui/magnetic";
import { FloralSprig } from "@/components/ui/floral-sprig";
import { SITE, SERVICE_OPTIONS } from "@/lib/constants";

type Status = "idle" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "");
    const telefono = String(data.get("telefono") ?? "");
    const correo = String(data.get("correo") ?? "");
    const servicio = String(data.get("servicio") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");

    const body = encodeURIComponent(
      `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\nServicio: ${servicio}\n\n${mensaje}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Solicitud de presupuesto — " + nombre
    )}&body=${body}`;

    setStatus("sent");
    form.reset();
  };

  return (
    <section id="contacto" className="section-py bg-stone-50">
      <div className="container-px mx-auto max-w-content">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
                <FloralSprig className="h-4 w-auto" />
                Contacto
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl lg:text-6xl">
                <RevealText text="Cuéntanos tu proyecto." accentWords={1} />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 max-w-sm text-balance text-[15px] font-light leading-relaxed text-stone-600">
                Escríbenos y te responderemos en menos de 24 horas para agendar una primera
                consulta sin compromiso.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <ul className="mt-12 space-y-5">
                <li>
                  <a
                    href={SITE.phoneHref}
                    data-cursor-hover
                    className="group flex items-center gap-4 text-sm text-stone-700 transition-colors hover:text-ink"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors group-hover:border-gold/50 group-hover:text-gold-dark">
                      <Phone size={16} strokeWidth={1.4} />
                    </span>
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="group flex items-center gap-4 text-sm text-stone-700 transition-colors hover:text-ink"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors group-hover:border-gold/50 group-hover:text-gold-dark">
                      <Instagram size={16} strokeWidth={1.4} />
                    </span>
                    {SITE.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    data-cursor-hover
                    className="group flex items-center gap-4 text-sm text-stone-700 transition-colors hover:text-ink"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors group-hover:border-gold/50 group-hover:text-gold-dark">
                      <Mail size={16} strokeWidth={1.4} />
                    </span>
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-4 text-sm text-stone-700">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-500">
                    <MapPin size={16} strokeWidth={1.4} />
                  </span>
                  {SITE.location}
                </li>
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Nombre" name="nombre" autoComplete="name" required />
              <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
              <Field label="Correo" name="correo" type="email" autoComplete="email" required />
              <div>
                <label htmlFor="servicio" className="mb-2 block text-xs uppercase tracking-widest2 text-stone-500">
                  Servicio
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  defaultValue=""
                  className="w-full border-b border-stone-300 bg-transparent py-2 text-[15px] text-ink outline-none transition-colors focus-visible:border-gold-dark focus-visible:shadow-[0_1px_0_0_#8c6f42] focus:border-gold-dark"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="mb-2 block text-xs uppercase tracking-widest2 text-stone-500">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full resize-none border-b border-stone-300 bg-transparent py-2 text-[15px] text-ink outline-none transition-colors focus-visible:border-gold-dark focus-visible:shadow-[0_1px_0_0_#8c6f42] placeholder:text-stone-400 focus:border-gold-dark"
                  placeholder="Cuéntanos qué tienes en mente…"
                />
              </div>

              <div className="sm:col-span-2">
                <Magnetic className="inline-block w-full sm:w-auto">
                  <motion.button
                    type="submit"
                    data-cursor-hover
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 420, damping: 26 }}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-cream transition-colors duration-300 ease-premium hover:bg-stone-800 sm:w-auto"
                  >
                    <motion.span
                      aria-hidden="true"
                      variants={{ rest: { x: "-130%" }, hover: { x: "130%" } }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/10"
                    />
                    <motion.span
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 inline-flex items-center gap-2"
                    >
                      Enviar mensaje
                      <Send size={15} strokeWidth={1.5} />
                    </motion.span>
                  </motion.button>
                </Magnetic>
                {status === "sent" && (
                  <p className="mt-4 text-sm text-stone-500">
                    Gracias — se abrirá tu gestor de correo para completar el envío.
                  </p>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
};

function Field({ label, name, type = "text", autoComplete, required, className }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-widest2 text-stone-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full border-b border-stone-300 bg-transparent py-2 text-[15px] text-ink outline-none transition-colors focus-visible:border-gold-dark focus-visible:shadow-[0_1px_0_0_#8c6f42] focus:border-gold-dark"
      />
    </div>
  );
}
