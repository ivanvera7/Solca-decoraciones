const ITEMS = [
  "Decoración de interiores",
  "Arcos de globos",
  "Ambientación de eventos",
  "Regalos personalizados",
  "Maquetas a medida",
];

export function Marquee() {
  // Items rendered twice so the -50% loop of `animate-marquee` is seamless.
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="group overflow-hidden border-y border-line py-7" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className={
              "flex items-center gap-8 pr-8 font-display text-[clamp(2rem,5vw,4.25rem)] font-semibold leading-none tracking-[-0.03em] " +
              (i % 2 === 1 ? "text-outline" : "text-bone")
            }
          >
            {item}
            <span className="text-rose">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
