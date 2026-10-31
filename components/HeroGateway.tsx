import { ArrowRight, divisionIcon } from "./Icons";
import { divisions } from "@/data/divisions";

/** Glass panel in the hero: one-click access to each division website. */
export default function HeroGateway() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-brand-red/30 via-transparent to-white/10 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-3 shadow-lift backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 pb-3 pt-3">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Where would you like to go?</p>
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </span>
        </div>
        <ul className="space-y-2">
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
