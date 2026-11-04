import type { Metadata } from "next";
import FinalCta from "@/components/FinalCta";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check, Info, MapPin, divisionIcon } from "@/components/Icons";
import { divisionsPage } from "@/data/content";
import { divisions, type Division } from "@/data/divisions";
import { photos } from "@/data/images";

export const metadata: Metadata = {
  title: "Our Divisions",
  description:
    "Explore Fidinda's four divisions: Financial (accounting, tax, audit), Management (registration, consultancy, software), Health (medical travel facilitation) and Travel (tickets, visas, tours) in Phnom Penh, Cambodia.",
  alternates: { canonical: "/divisions" },
  openGraph: { title: "Our Divisions | Fidinda Solutions", url: "/divisions" },
};

function Visual({ d, flip }: { d: Division; flip: boolean }) {
  return (
    <div className="relative isolate">
      <div className="group relative isolate aspect-[4/3] w-full overflow-hidden rounded-[2.25rem] shadow-lift">
        <Photo
          photo={d.image}
          sizes="(min-width: 1024px) 560px, 100vw"
          maxWidth={1440}
          className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/10" aria-hidden />
        <span
          className={`absolute top-6 font-display text-6xl font-extrabold leading-none text-white/50 ${flip ? "left-7" : "right-7"}`}
          aria-hidden
        >
          {d.number}
        </span>
        <ul className="absolute inset-x-7 bottom-7 flex flex-wrap gap-2">
          {d.tags.map((t) => (
            <li key={t} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Accent block peeks out from the bottom corner */}
      <span
        className={`absolute -bottom-4 -z-10 h-28 w-28 rounded-3xl bg-line/10 ${flip ? "-left-4" : "-right-4"}`}
        aria-hidden
      />
    </div>
  );
}

export default function DivisionsPage() {
  return (
    <>
      <PageHero eyebrow={divisionsPage.eyebrow} heading={divisionsPage.heading} text={divisionsPage.text} crumb="Our Divisions" photo={photos.phnomPenhDay} />

      {/* Jump links */}
      <nav aria-label="Jump to a division" className="border-b border-line/10 bg-page">
        <ul className="container flex gap-2 overflow-x-auto py-4 md:justify-center">
          {divisions.map((d) => {
            const Icon = divisionIcon[d.icon];
            return (
              <li key={d.slug} className="shrink-0">
                <a
                  href={`#${d.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line/10 px-4 py-2 text-sm font-bold text-fg/80 transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white"
                >
                  <Icon size={16} />
                  {d.shortName}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {divisions.map((d, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={d.slug}
            id={d.slug}
            className={`section ${flip ? "bg-soft" : "bg-page"}`}
            aria-labelledby={`${d.slug}-heading`}
          >
            <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className={flip ? "lg:order-2" : ""}>
                <Visual d={d} flip={flip} />
              </Reveal>

              <Reveal delay={100} className={flip ? "lg:order-1" : ""}>
                <p className="eyebrow">
                  {d.number} — {d.shortName} Division
                </p>
                <h2 id={`${d.slug}-heading`} className="h-section mt-4">
                  {d.name}
                </h2>
                <p className="mt-3 text-lg font-medium italic text-fg/60">{d.tagline}</p>
                <p className="mt-5 leading-relaxed text-fg/75">{d.longDescription}</p>

                <h3 className="mt-9 text-sm font-bold uppercase tracking-[0.18em] text-fg">Services</h3>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {d.services.map((s) => (
                    <li key={s} className="flex gap-3 text-[15px] text-fg/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                        <Check size={13} strokeWidth={2.8} />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>

                {d.destinations && (
                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    <span className="mr-1 inline-flex items-center gap-1.5 text-sm font-bold text-fg">
                      <MapPin size={16} className="text-brand-red" /> Destinations:
                    </span>
                    {d.destinations.map((x) => (
                      <span key={x} className="tag">
                        {x}
                      </span>
                    ))}
                  </div>
                )}

                {d.note && (
                  <p className="mt-6 flex gap-3 rounded-xl border border-line/10 bg-card p-4 text-sm text-fg/70">
                    <Info size={18} className="mt-0.5 shrink-0 text-brand-red" />
                    {d.note}
                  </p>
                )}

                <a href={d.url} className="btn-primary mt-9">
                  Visit {d.name} Website <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </section>
        );
      })}

      <div className="pt-20 sm:pt-24" />
      <FinalCta />
    </>
  );
}
