import { divisions } from "@/data/divisions";
import { divisionIcon } from "./Icons";

/** Decorative hero visual: four division "quadrants" orbiting the Fidinda F. */
export default function HeroEmblem() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden>
      <div className="absolute inset-[6%] rounded-full border border-dashed border-navy/15 motion-safe:animate-[spin_80s_linear_infinite]" />
      <div className="absolute inset-[20%] rounded-full border border-navy/10" />
      <div className="absolute inset-[31%] flex items-center justify-center rounded-[2rem] bg-navy shadow-lift">
        <svg viewBox="0 0 40 40" className="h-1/2 w-1/2">
          <path d="M13 31V9h15" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" fill="none" />
          <path d="M13 20h11" stroke="#E1041C" strokeWidth="3.6" strokeLinecap="round" />
        </svg>
      </div>
      {divisions.map((d, i) => {
        const Icon = divisionIcon[d.icon];
        const pos = ["left-[4%] top-[4%]", "right-[4%] top-[4%]", "left-[4%] bottom-[4%]", "right-[4%] bottom-[4%]"][i];
        return (
          <div
            key={d.slug}
            className={`absolute ${pos} w-[38%] animate-fade-up rounded-2xl border border-navy/[0.06] bg-white/95 p-4 shadow-card backdrop-blur`}
            style={{ animationDelay: `${300 + i * 120}ms` }}
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: d.accentSoft, color: d.accent }}
            >
              <Icon size={20} />
            </span>
            <p className="mt-3 text-sm font-bold text-navy">{d.shortName}</p>
            <p className="mt-0.5 text-[11px] leading-snug text-navy/55">{d.tags[0]} · {d.tags[1]}</p>
          </div>
        );
      })}
    </div>
  );
}
