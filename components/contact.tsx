"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { Magnetic } from "@/components/ui/magnetic";
import { SITE, SERVICE_OPTIONS } from "@/lib/constants";

type Status = "idle" | "sent";

const CHANNELS = [
  { label: "WhatsApp", value: SITE.phone, href: SITE.whatsapp, external: true },
  { label: "Instagram", value: SITE.instagramHandle, href: SITE.instagram, external: true },
  { label: "Correo", value: SITE.email, href: `mailto:${SITE.email}`, external: false },
];

const FIELD =
  "w-full rounded-2xl border border-line bg-night px-4 py-3.5 text-[15px] text-bone outline-none transition-colors placeholder:text-bone-faint hover:border-bone/30 focus:border-rose";

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
      "Solicitud de presupuesto - " + nombre
    )}&body=${body}`;

    setStatus("sent");
    form.reset();
  };

  return (
    <section id="contacto" className="section-py">
      <div className="container-px mx-auto grid max-w-content gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="mb-5 text-xs font-medium uppercase tracking-label text-bone-muted">Contacto</p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.04em] text-bone">
            <RevealText text="Cuéntanos tu proyecto." accentWords={1} />
          </h2>
          <ScrollReveal delay={0.1}>
            <p className="text-pretty mt-6 max-w-sm text-base leading-relaxed text-bone-muted">
              Te respondemos en menos de 24 horas para agendar una primera consulta sin compromiso.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ul className="mt-12 border-t border-line">
              {CHANNELS.map((c) => (
                <li key={c.label} className="border-b border-line">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block text-xs text-bone-faint">{c.label}</span>
                      <span className="mt-1 block break-all text-lg text-bone transition-colors group-hover:text-rose">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="shrink-0 text-bone-muted transition-all duration-500 ease-premium group-hover:rotate-45 group-hover:text-rose"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-bone-faint">{SITE.location}</p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 rounded-3xl border border-line bg-night-2 p-6 sm:grid-cols-2 sm:p-10"
          >
            <Field label="Nombre" name="nombre" autoComplete="name" required />
            <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
            <Field label="Correo" name="correo" type="email" autoComplete="email" required />
            <div className="flex flex-col gap-2">
              <label htmlFor="servicio" className="text-sm text-bone-muted">
                Servicio
              </label>
              <select id="servicio" name="servicio" defaultValue="" className={FIELD}>
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
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="mensaje" className="text-sm text-bone-muted">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                className={`${FIELD} resize-none`}
                placeholder="Fecha, lugar, temática, cantidad de invitados…"
              />
            </div>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-bone-faint" aria-live="polite">
                {status === "sent"
                  ? "Listo. Se abrirá tu correo para completar el envío."
                  : "Se abrirá tu aplicación de correo con el mensaje listo."}
              </p>
              <Magnetic className="inline-block" strength={0.2}>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-rose px-7 py-3.5 text-[15px] font-medium text-night transition-colors duration-300 hover:bg-rose-deep sm:w-auto"
                >
                  Enviar mensaje
                  <Send size={16} strokeWidth={1.8} />
                </motion.button>
              </Magnetic>
            </div>
          </form>
        </ScrollReveal>
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
};

function Field({ label, name, type = "text", autoComplete, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-bone-muted">
        {label}
        {required && <span className="text-rose"> *</span>}
      </label>
      <input id={name} name={name} type={type} autoComplete={autoComplete} required={required} className={FIELD} />
    </div>
  );
}
