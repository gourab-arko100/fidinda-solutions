import type { Metadata } from "next";
import Link from "next/link";
import DivisionGrid from "@/components/DivisionGrid";
import FinalCta from "@/components/FinalCta";
import HeroGateway from "@/components/HeroGateway";
import Marquee from "@/components/Marquee";
import Photo from "@/components/Photo";
import QuickHelp from "@/components/QuickHelp";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ArrowRight, Award, audienceIcon, beliefIcon } from "@/components/Icons";
import { aboutSnapshot, beliefs, chooseDivision, credentials, hero, whoWeServe } from "@/data/content";
import { divisions } from "@/data/divisions";
import { photos } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

const marqueeItems = divisions.flatMap((d) => d.tags);

export default function HomePage() {
  return (
    <>
      {/* 1 ─ Hero (photo of Phnom Penh + navy overlay) */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Photo
          photo={photos.phnomPenhNight}
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full animate-ken-burns object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/55" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink/80 to-transparent" aria-hidden />

        <div className="container grid items-center gap-10 py-12 sm:gap-14 sm:py-24 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
          <div className="animate-fade-up">
            <h1 className="text-[2.4rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.7rem]">
              Your Trusted Partner for{" "}
              <span className="text-white/70">Finance, Management, Healthcare &amp; Travel</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">{hero.subtext}</p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <a href="#divisions" className="btn-primary justify-center px-7 py-3.5 text-[15px]">
                {hero.primaryCta} <ArrowRight size={18} />
              </a>
              <Link href="/contact" className="btn-ghost-light justify-center px-7 py-3 text-[15px]">
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
          <HeroGateway />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* 2 ─ Choose your division */}
      <section id="divisions" className="section relative isolate" aria-labelledby="divisions-heading">
        <div className="bg-dots absolute inset-x-0 top-0 -z-10 h-80 [mask-image:linear-gradient(black,transparent)]" aria-hidden />
        <div className="container">
          <SectionHeading
            id="divisions-heading"
            eyebrow={chooseDivision.eyebrow}
            heading={chooseDivision.heading}
            intro={chooseDivision.intro}
          />
          <DivisionGrid />

          {/* 3 ─ Quick help */}
          <Reveal className="mt-16">
            <QuickHelp />
          </Reveal>
        </div>
      </section>

      {/* 4 ─ About snapshot (photo collage) */}
      <section className="section overflow-hidden bg-soft">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative isolate mx-auto w-full max-w-lg pb-16 pr-10 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-lift">
              <Photo photo={photos.meeting} sizes="(min-width: 1024px) 520px, 90vw" maxWidth={1440} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" aria-hidden />
            </div>
            <div className="absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-[1.75rem] border-[6px] border-soft shadow-lift">
              <Photo photo={photos.phnomPenhRiverside} sizes="300px" maxWidth={768} className="aspect-square h-full w-full object-cover" />
            </div>
            <div className="absolute -left-3 top-10 rounded-2xl border border-line/10 bg-card px-5 py-4 shadow-lift sm:-left-8">
              <p className="font-display text-3xl font-extrabold text-fg">2023</p>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-fg/60">Established</p>
            </div>
            <span className="absolute -right-2 top-1/3 h-24 w-24 rounded-full border-[14px] border-line/10" aria-hidden />
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">{aboutSnapshot.eyebrow}</p>
              <h2 className="h-section mt-4">{aboutSnapshot.heading}</h2>
              <p className="lead mt-6">{aboutSnapshot.text}</p>
            </Reveal>
            <dl className="mt-10 grid grid-cols-2 gap-4">
              {aboutSnapshot.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80} className="flex flex-col rounded-2xl border border-line/10 bg-card p-5 shadow-card">
                  <dt className="order-2 mt-1 text-sm font-medium text-fg/60">{s.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-fg sm:text-4xl">{s.value}</dd>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={200}>
              <Link href="/about" className="btn-outline mt-10">
                {aboutSnapshot.cta} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 ─ The Four Fs */}
      <section className="section" aria-labelledby="beliefs-heading">
        <div className="container">
          <SectionHeading id="beliefs-heading" eyebrow={beliefs.eyebrow} heading={beliefs.heading} intro={beliefs.intro} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.items.map((b, i) => {
              const Icon = beliefIcon[b.icon];
              return (
                <Reveal key={b.title} delay={i * 90}>
                  <article className="group relative flex h-full gap-4 overflow-hidden rounded-[1.75rem] border border-line/10 bg-card p-6 shadow-card sm:block sm:p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-navy hover:shadow-lift dark:hover:bg-navy-800">
                    <span
                      className="pointer-events-none absolute -bottom-12 -right-3 font-display text-[9rem] font-extrabold leading-none text-fg/[0.04] transition-colors duration-500 group-hover:text-white/[0.06]"
                      aria-hidden
                    >
                      F
                    </span>
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-white transition-colors duration-500 group-hover:bg-brand-red dark:bg-white/10 sm:h-14 sm:w-14">
                      <Icon size={24} />
                    </span>
                    <div className="relative min-w-0">
                    <h3 className="relative text-xl font-extrabold sm:mt-7 sm:text-2xl text-fg transition-colors duration-500 group-hover:text-white">
                      <span className="text-brand-red">F</span>
                      {b.title.slice(1)}
                    </h3>
                    <p className="relative mt-3 text-[15px] leading-relaxed text-fg/70 transition-colors duration-500 group-hover:text-white/80">
                      {b.text}
                    </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 ─ Who we serve (photo cards) */}
      <section className="section relative isolate overflow-hidden bg-soft">
        <div className="container">
          <SectionHeading eyebrow={whoWeServe.eyebrow} heading={whoWeServe.heading} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.items.map((w, i) => {
              const Icon = audienceIcon[w.icon];
              return (
                <Reveal key={w.title} delay={i * 90}>
                  <article className="group relative isolate flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-[1.75rem] p-6 text-white shadow-lift sm:aspect-[3/4] sm:p-7">
                    <Photo
                      photo={w.photo}
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                      maxWidth={1080}
                      className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/10 transition-colors duration-500" aria-hidden />
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-brand-red">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{w.title}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-[15px] leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 group-focus-within:max-h-32 group-focus-within:opacity-100 max-lg:max-h-32 max-lg:opacity-100">
                      {w.text}
                    </p>
                    <span className="mt-4 block h-[3px] w-10 bg-brand-red transition-all duration-500 group-hover:w-20" aria-hidden />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <WhyChooseUs />

      {/* 7 ─ Credentials */}
      <section className="border-b border-line/10 py-12" aria-label="Credentials">
        <div className="container grid gap-5 md:grid-cols-2">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="flex items-center gap-5 rounded-2xl border border-line/10 bg-soft px-6 py-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-white dark:bg-white/10">
                <Award size={26} />
              </span>
              <p>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{c.title}</span>
                <span className="mt-1 block font-display font-bold text-fg">{c.body}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8 ─ Testimonials (photo + slider) */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.25rem] shadow-lift">
              <Photo photo={photos.handshake} sizes="(min-width: 1024px) 520px, 100vw" maxWidth={1440} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 to-transparent" aria-hidden />
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-line/10 bg-card px-6 py-4 text-fg shadow-lift sm:left-10">
              <span className="font-display text-4xl font-extrabold leading-none">5.0</span>
              <span className="text-sm font-semibold leading-tight">
                Rated by
                <br />
                our clients
              </span>
            </div>
          </Reveal>
          <div className="relative">
            <span className="pointer-events-none absolute -top-16 left-0 font-display text-[10rem] font-extrabold leading-none text-brand-red/15" aria-hidden>
              &ldquo;
            </span>
            <Reveal className="relative">
              <p className="eyebrow">Client Voices</p>
              <h2 id="testimonials-heading" className="h-section mt-4">
                What our clients say
              </h2>
            </Reveal>
            <Reveal className="mt-10">
              <TestimonialSlider align="left" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9 ─ Final CTA */}
      <FinalCta />
    </>
  );
}
