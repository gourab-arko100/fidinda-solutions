import type { Metadata } from "next";
import FinalCta from "@/components/FinalCta";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Check, Eye, Target, beliefIcon } from "@/components/Icons";
import { about, beliefs } from "@/data/content";
import { photos } from "@/data/images";

export const metadata: Metadata = {
  title: "Our Mission & Vision",
  description:
    "The mission, vision and values of Fidinda Solutions — the Four Fs of Faith, Friendship, Flexibility and Focus, and our commitment to businesses, organisations, individuals and families in Cambodia and beyond.",
  alternates: { canonical: "/mission-vision" },
  openGraph: { title: "Our Mission & Vision | Fidinda Solutions", url: "/mission-vision" },
};

export default function MissionVisionPage() {
  const h = about.missionVisionHero;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} heading={h.heading} text={h.text} crumb="Our Mission & Vision" photo={photos.compass} />

      {/* Vision & Mission — alternating photo rows */}
      <section id="mission" className="section relative isolate overflow-hidden" aria-labelledby="vision-heading">
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-ink/10 to-transparent" aria-hidden />
                    <span className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-navy shadow-lift">
                      <m.Icon size={30} />
                    </span>
                  </div>
                  <span
                    className={`absolute -bottom-5 -z-10 h-2/5 w-2/5 rounded-[2rem] bg-line/10 ${flip ? "-left-5" : "-right-5"}`}
                    aria-hidden
                  />
                  <span
                    className={`absolute -top-5 -z-10 h-24 w-24 rounded-3xl border-[10px] border-line/15 ${flip ? "-right-5" : "-left-5"}`}
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
      <section id="beliefs" className="section bg-soft">
        <div className="container">
          <SectionHeading eyebrow="Our Beliefs" heading="The Four Fs of Fidinda" intro={beliefs.intro} />
          <div className="grid gap-6 md:grid-cols-2">
            {beliefs.items.map((b, i) => {
              const Icon = beliefIcon[b.icon];
              return (
                <Reveal key={b.title} delay={i * 80}>
                  <article className="group relative flex h-full gap-4 overflow-hidden rounded-[1.75rem] border border-line/10 bg-card p-6 shadow-card sm:gap-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-9">
                    <span
                      className="pointer-events-none absolute -bottom-14 -right-2 font-display text-[10rem] font-extrabold leading-none text-fg/[0.04]"
                      aria-hidden
                    >
                      F
                    </span>
                    <span className="relative flex h-12 w-12 shrink-0 items-center sm:h-16 sm:w-16 justify-center rounded-2xl bg-navy text-white transition-colors group-hover:bg-brand-red dark:bg-white/10">
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
      <section id="commitment" className="section">
        <div className="container grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="relative isolate lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-lift">
              <Photo photo={photos.handshake} sizes="(min-width: 1024px) 460px, 100vw" maxWidth={1440} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" aria-hidden />
              <p className="absolute inset-x-7 bottom-7 font-display text-xl font-bold leading-snug text-white">
                Lasting relationships, not just transactions.
              </p>
            </div>
            <span className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-3xl bg-line/10" aria-hidden />
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
