import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="container-px mx-auto max-w-content pt-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <Logo showWordmark={false} className="w-10" />

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-bone-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline transition-colors hover:text-bone">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de SOLCA Decoraciones"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-bone-muted transition-colors hover:border-rose hover:text-rose"
            >
              <Instagram size={17} strokeWidth={1.6} />
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de SOLCA Decoraciones"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-bone-muted transition-colors hover:border-rose hover:text-rose"
            >
              <MessageCircle size={17} strokeWidth={1.6} />
            </a>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-16 select-none text-center font-display text-[24vw] font-bold leading-[0.78] tracking-[-0.06em] text-bone/[0.07] lg:text-[21vw]"
        >
          SOLCA
        </p>

        <div className="flex flex-col gap-2 border-t border-line py-8 text-xs text-bone-faint sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
          <p>Hecho a mano en {SITE.location}.</p>
        </div>
      </div>
    </footer>
  );
}
