/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "./Icons";
import { divisions } from "@/data/divisions";

/**
 * Glass panel in the hero: one-click access to each division website.
 * Each row is a white strip showing that division's full logo (from /public/logos/full/).
 */
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

        <ul className="space-y-2">
          {divisions.map((d, i) => (
            <li key={d.slug} className="animate-fade-up" style={{ animationDelay: `${250 + i * 110}ms` }}>
              <a
                href={d.url}
                aria-label={`Visit the ${d.name} website`}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-white px-4 py-3.5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:px-5 sm:py-4"
              >
                {/* red accent that grows on hover */}
                <span className="absolute inset-y-0 left-0 w-1 bg-brand-red/0 transition-colors duration-300 group-hover:bg-brand-red" aria-hidden />
                <span className="min-w-0 flex-1">
                  <img
                    src={d.fullLogo}
                    alt={d.name}
                    width={900}
                    height={185}
                    decoding="async"
                    className="h-9 w-auto max-w-full object-contain sm:h-11"
                  />
                  <span className="mt-1.5 hidden truncate pl-0.5 text-[12.5px] text-navy/55 sm:block">{d.tags.slice(0, 3).join(" · ")}</span>
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
                  <ArrowRight size={16} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
