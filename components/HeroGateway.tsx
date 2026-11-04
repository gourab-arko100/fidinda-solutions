import { ArrowRight, divisionIcon } from "./Icons";
import { divisions } from "@/data/divisions";

/** Glass panel in the hero: one-click access to each division website. */
export default function HeroGateway() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-3 shadow-lift backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 px-3 pb-3 pt-2 sm:px-4 sm:pt-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-xs sm:tracking-[0.22em]">Where would you like to go?</p>
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </span>
        </div>
        {/* Phones: compact 2 × 2 tiles */}
        <ul className="grid grid-cols-2 gap-2 sm:hidden">
          {divisions.map((d) => {
            const Icon = divisionIcon[d.icon];
            return (
              <li key={d.slug}>
                <a
                  href={d.url}
                  className="flex h-full flex-col gap-3 rounded-2xl bg-white/[0.07] p-4 transition-colors active:bg-white/15"
                  aria-label={`Visit the ${d.name} website`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-navy">
                    <Icon size={20} />
                  </span>
                  <span className="flex items-center justify-between gap-1 font-display text-[15px] font-bold text-white">
                    {d.shortName}
                    <ArrowRight size={15} className="shrink-0 text-white/60" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Tablet & desktop: full list */}
        <ul className="hidden space-y-2 sm:block">
          {divisions.map((d, i) => {
            const Icon = divisionIcon[d.icon];
            return (
              <li key={d.slug} className="animate-fade-up" style={{ animationDelay: `${250 + i * 110}ms` }}>
                <a
                  href={d.url}
                  className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 transition-all duration-300 hover:bg-white hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-navy transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[15px] font-bold text-white transition-colors group-hover:text-navy">
                      {d.name}
                    </span>
                    <span className="block truncate text-[13px] text-white/60 transition-colors group-hover:text-navy/60">
                      {d.tags.slice(0, 3).join(" · ")}
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
