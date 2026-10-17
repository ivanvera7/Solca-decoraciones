import { FloralSprig } from "@/components/ui/floral-sprig";

const ITEMS = [
  "Decoración de interiores",
  "Arcos de globos",
  "Ambientación de eventos",
  "Regalos personalizados",
  "Maquetas a medida",
  "Manualidades",
];

export function Marquee() {
  // Items rendered twice so the -50% loop of `animate-marquee` is seamless.
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-stone-200 bg-cream py-6" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 font-display text-2xl italic text-stone-600 sm:text-3xl">
            {item}
            <FloralSprig className="h-5 w-auto" flip={i % 2 === 1} />
          </span>
        ))}
      </div>
    </div>
  );
}
