import type { Metadata } from "next";
import DivisionLogo from "@/components/DivisionLogo";
import FinalCta from "@/components/FinalCta";
import FounderMessage from "@/components/FounderMessage";
import { LogoMark } from "@/components/Logo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "@/components/Icons";
import { about } from "@/data/content";
import { divisions } from "@/data/divisions";
import { site } from "@/data/site";
import { photos } from "@/data/images";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fidinda Solutions – your trusted partner for finance, management, healthcare and travel in Phnom Penh, Cambodia. Our story, a message from our co-founder, our journey since 2023 and our four divisions.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Fidinda Solutions", url: "/about" },
};

const facts = [
  { k: "Founded", v: "2023" },
  { k: "Headquarters", v: "Phnom Penh, Cambodia" },
  { k: "Divisions", v: "Financial · Management · Health · Travel" },
  { k: "Registered as", v: site.legalName },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={about.hero.eyebrow} heading={about.hero.heading} text={about.hero.text} crumb="About Us" photo={photos.presentation} />

      {/* About us */}
      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="h-section mt-4">{about.whoWeAre.heading}</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-fg/75">
              {about.whoWeAre.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "sm:first-letter:float-left sm:first-letter:mr-3 sm:first-letter:font-display sm:first-letter:text-6xl sm:first-letter:font-extrabold sm:first-letter:leading-[0.9] sm:first-letter:text-brand-red" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              <Photo photo={photos.teamUnity} sizes="(min-width: 1024px) 400px, 100vw" maxWidth={1080} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" aria-hidden />
              <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-brand-red" aria-hidden />
            </div>
            <aside className="relative isolate overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-lift dark:ring-1 dark:ring-white/10">
              <LogoMark light className="absolute -bottom-8 -right-8 -z-10 w-48 opacity-10" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">At a glance</p>
              <dl className="mt-6 space-y-5">
                {facts.map((f) => (
                  <div key={f.k} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <dt className="text-sm text-white/60">{f.k}</dt>
                    <dd className="mt-1 font-display font-bold">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <FounderMessage />

      {/* Journey */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Timeline" heading={about.journey.heading} />
          <div className="relative">
            <span
              className="absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent lg:block"
              aria-hidden
            />
            <ol className="relative ml-2 grid gap-5 border-l-2 border-line/15 pl-6 lg:ml-0 lg:grid-cols-4 lg:gap-6 lg:border-0 lg:pl-0">
              {about.journey.items.map((j, i) => (
                <Reveal as="li" key={j.year} delay={i * 120} className="relative lg:flex lg:flex-col">
                  <span className="absolute -left-[33px] top-7 h-4 w-4 rounded-full bg-navy ring-4 ring-page lg:hidden" aria-hidden />
                  <span className="relative z-10 hidden h-16 w-fit min-w-16 items-center justify-center rounded-full bg-navy px-5 font-display text-sm font-bold text-white ring-8 ring-page lg:mx-auto lg:flex">
                    {j.year}
                  </span>
                  <div className="rounded-[1.5rem] border border-line/10 bg-card p-6 shadow-card lg:mt-6 lg:flex-1 lg:p-6 lg:text-center">
                    <span className="mb-3 inline-block rounded-full bg-navy px-3 py-1 font-display text-xs font-bold text-white lg:hidden">
                      {j.year}
                    </span>
                    <h3 className="text-lg font-extrabold leading-snug text-fg">{j.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-fg/70">{j.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Four divisions */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeading eyebrow="Our Group" heading={about.divisionsHeading} />
          <div className="grid gap-6 sm:grid-cols-2">
            {divisions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <article className="group relative flex h-full gap-5 overflow-hidden rounded-[1.75rem] border border-line/10 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lift sm:p-8">
                  <span className="absolute left-0 top-0 h-full w-1 bg-brand-red/0 transition-colors duration-300 group-hover:bg-brand-red" aria-hidden />
                  <div className="shrink-0">
                    <DivisionLogo division={d} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-extrabold text-fg">{d.name}</h3>
                    <p className="mt-1 text-sm font-medium italic text-fg/60">{d.tagline}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-fg/70">{d.description}</p>
                    <a href={d.url} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-fg hover:text-brand-red">
                      Visit Website <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      <span className="sr-only">— {d.name}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 sm:pt-24" />
      <FinalCta />
    </>
  );
}
