import type { Metadata } from "next";
import DivisionLogo from "@/components/DivisionLogo";
import FinalCta from "@/components/FinalCta";
import FounderMessage from "@/components/FounderMessage";
import { LogoMark } from "@/components/Logo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Check, Eye, Target, beliefIcon } from "@/components/Icons";
import { about, beliefs } from "@/data/content";
import { divisions } from "@/data/divisions";
import { site } from "@/data/site";
import { photos } from "@/data/images";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fidinda Solutions – your trusted partner for finance, management, healthcare and travel in Phnom Penh, Cambodia. Founded in 2023 and guided by the Four Fs: Faith, Friendship, Flexibility and Focus.",
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
                <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-extrabold first-letter:leading-[0.9] first-letter:text-brand-red" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
              <Photo photo={photos.teamUnity} sizes="(min-width: 1024px) 400px, 100vw" maxWidth={1080} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" aria-hidden />
              <span className="absolute bottom-0 left-0 h-1 w-1/2 bg-brand-red" aria-hidden />
            </div>
            <aside className="relative isolate overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-lift dark:ring-1 dark:ring-white/10">
              <div className="bg-grid-light absolute inset-0 -z-10" aria-hidden />
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
              className="absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent md:block"
              aria-hidden
            />
            <ol className="relative grid gap-8 md:grid-cols-3">
              {about.journey.items.map((j, i) => (
                <Reveal as="li" key={j.year} delay={i * 120}>
                  <span className="relative z-10 flex h-16 w-fit min-w-16 items-center justify-center rounded-full bg-brand-red px-6 font-display text-sm font-bold text-white shadow-glow ring-8 ring-page md:mx-auto">
                    {j.year}
                  </span>
                  <div className="mt-6 rounded-[1.5rem] border border-line/10 bg-card p-7 shadow-card md:text-center">
                    <h3 className="text-xl font-extrabold text-fg">{j.title}</h3>
                    <p className="mt-2 text-fg/70">{j.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Four divisions */}
      <section className="section">
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
                    <p className="mt-1 text-sm font-semibold text-brand-red">{d.tagline}</p>
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

      {/* Vision & Mission — alternating photo rows */}
      <section id="mission" className="section relative isolate overflow-hidden bg-soft" aria-labelledby="vision-heading">
        <div className="bg-dots absolute inset-x-0 top-0 -z-10 h-72 [mask-image:linear-gradient(black,transparent)]" aria-hidden />
        <div className="container space-y-20 lg:space-y-28">
          {[
            { ...about.vision, Icon: Eye, id: "vision-heading", label: "Where we're heading" },
            { ...about.mission, Icon: Target, id: "mission-heading", label: "What drives us" },
          ].map((m, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={m.heading} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal className={`relative isolate ${flip ? "lg:order-2" : ""}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[2.25rem] shadow-lift">
                    <Photo
                      photo={m.photo}
                      sizes="(min-width: 1024px) 600px, 100vw"
                      maxWidth={1440}
                      className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-navy/10 to-transparent" aria-hidden />
                    <span className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red text-white shadow-glow">
                      <m.Icon size={30} />
                    </span>
                  </div>
                  <span
                    className={`absolute -bottom-5 -z-10 h-2/5 w-2/5 rounded-[2rem] bg-navy dark:bg-white/10 ${flip ? "-left-5" : "-right-5"}`}
                    aria-hidden
                  />
                  <span
                    className={`absolute -top-5 -z-10 h-24 w-24 rounded-3xl border-[10px] border-brand-red/70 ${flip ? "-right-5" : "-left-5"}`}
                    aria-hidden
                  />
                </Reveal>

                <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
                  <p className="eyebrow">{m.label}</p>
                  <h2 id={m.id} className="h-section mt-4">
                    {m.heading}
                  </h2>
                  <span className="mt-6 block h-1 w-16 rounded bg-brand-red" aria-hidden />
                  <p className="mt-8 font-display text-2xl font-semibold leading-snug text-fg sm:text-[1.9rem] sm:leading-snug">
                    {m.text}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Beliefs */}
      <section id="beliefs" className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Beliefs" heading="The Four Fs of Fidinda" intro={beliefs.intro} />
          <div className="grid gap-6 md:grid-cols-2">
            {beliefs.items.map((b, i) => {
              const Icon = beliefIcon[b.icon];
              return (
                <Reveal key={b.title} delay={i * 80}>
                  <article className="group relative flex h-full gap-6 overflow-hidden rounded-[1.75rem] border border-line/10 bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-9">
                    <span
                      className="pointer-events-none absolute -bottom-14 -right-2 font-display text-[10rem] font-extrabold leading-none text-fg/[0.04]"
                      aria-hidden
                    >
                      F
                    </span>
                    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-white transition-colors group-hover:bg-brand-red dark:bg-white/10">
                      <Icon size={28} />
                    </span>
                    <div className="relative">
                      <h3 className="text-2xl font-extrabold text-fg">
                        <span className="text-brand-red">F</span>
                        {b.title.slice(1)}
                      </h3>
                      <p className="mt-3 leading-relaxed text-fg/75">{b.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section id="commitment" className="section bg-soft">
        <div className="container grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="relative isolate lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-lift">
              <Photo photo={photos.handshake} sizes="(min-width: 1024px) 460px, 100vw" maxWidth={1440} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" aria-hidden />
              <p className="absolute inset-x-7 bottom-7 font-display text-xl font-bold leading-snug text-white">
                Lasting relationships, not just transactions.
              </p>
            </div>
            <span className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-3xl bg-brand-red" aria-hidden />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Our Promise</p>
              <h2 className="h-section mt-4">{about.commitment.heading}</h2>
            </Reveal>
            <Reveal className="mt-8 space-y-6 text-lg leading-relaxed text-fg/75">
              {about.commitment.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "font-display text-xl font-semibold leading-relaxed text-fg sm:text-2xl" : ""}>
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal delay={150} className="mt-10 flex items-start gap-4 rounded-2xl border-l-4 border-brand-red bg-card p-6 shadow-card sm:p-8">
              <Check size={28} className="mt-1 shrink-0 text-brand-red" />
              <p className="font-display text-xl font-extrabold leading-snug text-fg sm:text-2xl">{about.commitment.closing}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pt-20 sm:pt-24" />
      <FinalCta />
    </>
  );
}
