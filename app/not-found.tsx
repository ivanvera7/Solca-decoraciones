import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="container-px flex min-h-[100dvh] flex-col items-start justify-center">
      <p className="mb-6 text-xs font-medium uppercase tracking-label text-bone-muted">Error 404</p>
      <h1 className="max-w-3xl font-display text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-bone">
        Esta página no existe, <span className="text-rose">pero tu proyecto sí.</span>
      </h1>
      <Link
        href="/"
        className="mt-12 inline-flex rounded-full bg-rose px-7 py-3.5 text-[15px] font-medium text-night transition-colors hover:bg-rose-deep"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
