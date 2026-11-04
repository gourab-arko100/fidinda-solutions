import DivisionLogo from "./DivisionLogo";
import Photo from "./Photo";
import { ArrowRight } from "./Icons";
import type { Division } from "@/data/divisions";

/** Gateway card with photo header — used in "Choose Your Division" and on the 404 page. */
export default function DivisionCard({ division: d, compact }: { division: Division; compact?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/10 bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
      {/* Photo */}
      <div className={`relative overflow-hidden ${compact ? "aspect-[16/8]" : "aspect-[16/9]"}`}>
        <Photo
          photo={d.image}
          sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
          maxWidth={1440}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" aria-hidden />
        <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {d.shortName}
        </span>
        <span className="absolute right-6 top-4 font-display text-5xl font-extrabold leading-none text-white/30">{d.number}</span>
        <p className="absolute bottom-4 left-[6.5rem] right-6 font-display text-[14px] font-semibold leading-snug text-white sm:left-[7rem] sm:right-7 sm:text-[15px]">
          {d.tagline}
        </p>
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col px-7 pb-8 sm:px-8">
        <span className="absolute left-0 top-0 h-[3px] w-16 bg-brand-red transition-all duration-500 group-hover:w-full" aria-hidden />
        <div className="relative z-10 -mt-7 mb-5 w-fit rounded-2xl bg-card ring-[6px] ring-card">
          <DivisionLogo division={d} />
        </div>
        <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-fg">{d.name}</h3>
        {!compact && <p className="mt-3 leading-relaxed text-fg/70">{d.description}</p>}

        {!compact && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${d.shortName} key services`}>
            {d.tags.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 pt-7">
          <a
            href={d.url}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-red group-hover:bg-brand-red dark:bg-white/10"
            aria-label={`Visit the ${d.name} website`}
          >
            Visit Website
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}
