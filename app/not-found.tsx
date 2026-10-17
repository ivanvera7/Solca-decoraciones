import Link from "next/link";
import { FloralSprig } from "@/components/ui/floral-sprig";

export default function NotFound() {
  return (
    <main id="main" className="container-px flex min-h-[100svh] flex-col items-start justify-center bg-cream">
      <p className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-gold-dark">
        <FloralSprig className="h-4 w-auto" />
        Error 404
      </p>
      <h1 className="max-w-3xl font-display text-5xl leading-[1.02] text-ink sm:text-7xl">
        Esta página no existe, <span className="italic text-gold">pero tu proyecto sí.</span>
      </h1>
      <Link
        href="/"
        className="mt-12 inline-flex items-center rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-cream transition-colors hover:bg-stone-800"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
