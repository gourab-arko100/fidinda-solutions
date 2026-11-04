/** Slow, continuous strip of service keywords between sections. Pauses on hover. */
export default function Marquee({ items }: { items: string[] }) {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden}>
      {items.map((t, i) => (
        <li key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-bold text-fg/55 sm:text-xl">
          {t}
          <span className="h-1.5 w-1.5 rounded-full bg-fg/25" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="group relative overflow-hidden border-y border-line/10 bg-page py-5">
      <div className="marquee-track flex w-max">
        {row()}
        {row(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-page to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-page to-transparent" aria-hidden />
    </div>
  );
}
