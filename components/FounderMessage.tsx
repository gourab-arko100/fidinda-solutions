/* eslint-disable @next/next/no-img-element */
import Reveal from "./Reveal";
import { LogoMark } from "./Logo";
import { founderMessage as m } from "@/data/content";

/** Renders **bold** segments inside a paragraph. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-semibold text-fg">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/**
 * "Message from the Co-Founder & Director"
 * The letter scrolls on the left while the portrait stays in view on the right (desktop).
 * On phones the portrait sits above the letter.
 */
export default function FounderMessage() {
  return (
    <section id="co-founder" className="section relative isolate overflow-clip bg-soft" aria-labelledby="founder-heading">
      <div className="bg-dots absolute inset-x-0 top-0 -z-10 h-72 [mask-image:linear-gradient(black,transparent)]" aria-hidden />
      <div className="container">
        <Reveal className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <p className="eyebrow eyebrow-center">{m.eyebrow}</p>
          <h2 id="founder-heading" className="h-section mt-4">
            {m.heading}
          </h2>
          <p className="mt-5 font-display text-lg font-semibold leading-relaxed text-fg/75 sm:text-xl">{m.subheading}</p>
        </Reveal>

        {/* Letter (left) scrolls; portrait (right) stays in view on desktop */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal className="relative">
              <span
                className="pointer-events-none absolute -left-2 -top-14 font-display text-[9rem] font-extrabold leading-none text-brand-red/15"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="relative font-display text-xl font-semibold leading-relaxed text-fg sm:text-[1.4rem]">
                <Rich text={m.welcome} />
              </p>
            </Reveal>
            <div className="relative mt-6 space-y-5 text-[17px] leading-relaxed text-fg/75">
              {m.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0}>
                  <p>
                    <Rich text={p} />
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10">
              <p className="rounded-2xl border-l-4 border-brand-red bg-card p-6 font-display text-xl font-extrabold leading-snug text-fg shadow-card sm:p-8 sm:text-2xl">
                {m.closing}
              </p>
            </Reveal>
          </div>

          <div className="order-1 lg:sticky lg:top-28 lg:order-2">
            <Reveal delay={120}>
              <figure className="relative isolate mx-auto max-w-sm pb-6 pr-6 lg:max-w-none">
                <span className="absolute bottom-0 right-0 -z-10 h-2/3 w-2/3 rounded-[2rem] bg-line/10" aria-hidden />
                <span className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-3xl border-[10px] border-navy/15 dark:border-white/15" aria-hidden />
                <div className="relative overflow-hidden rounded-[2rem] bg-ink shadow-lift">
                  <img
                    src={m.photo.src}
                    alt={m.photo.alt}
                    width={960}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent px-6 pb-6 pt-24 text-white">
                    <LogoMark light className="absolute bottom-5 right-5 w-10 opacity-60" />
                    <figcaption>
                      <span className="block pr-12 font-display text-xl font-extrabold leading-snug">{m.name}</span>
                      <span className="mt-1 flex items-center gap-2 text-sm font-semibold text-white/80">
                        <span className="h-[2px] w-6 bg-brand-red" aria-hidden />
                        {m.role}
                      </span>
                    </figcaption>
                  </div>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
