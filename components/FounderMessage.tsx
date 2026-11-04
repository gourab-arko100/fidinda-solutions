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
 * Top: welcome line + opening paragraphs beside the portrait.
 * Below: the rest of the letter in a comfortable reading column, then the closing line and signature.
 */
export default function FounderMessage() {
  const lead = m.paragraphs.slice(0, m.leadCount);
  const rest = m.paragraphs.slice(m.leadCount);

  return (
    <section id="co-founder" className="section relative isolate overflow-hidden bg-soft" aria-labelledby="founder-heading">
      <div className="bg-dots absolute inset-x-0 top-0 -z-10 h-72 [mask-image:linear-gradient(black,transparent)]" aria-hidden />
      <div className="container">
        <Reveal className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <p className="eyebrow eyebrow-center">{m.eyebrow}</p>
          <h2 id="founder-heading" className="h-section mt-4">
            {m.heading}
          </h2>
          <p className="mt-5 font-display text-lg font-semibold leading-relaxed text-fg/75 sm:text-xl">{m.subheading}</p>
        </Reveal>

        {/* Opening + portrait */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
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
              <div className="relative mt-6 space-y-5 text-[17px] leading-relaxed text-fg/75">
                {lead.map((p, i) => (
                  <p key={i}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="order-1 lg:order-2">
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

        {/* The rest of the letter */}
        <Reveal className="mx-auto mt-12 max-w-4xl space-y-5 text-[17px] leading-relaxed text-fg/75 lg:mt-16">
          {rest.map((p, i) => (
            <p key={i}>
              <Rich text={p} />
            </p>
          ))}
        </Reveal>

        {/* Closing line + signature */}
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <p className="rounded-2xl border-l-4 border-brand-red bg-card p-6 font-display text-xl font-extrabold leading-snug text-fg shadow-card sm:p-8 sm:text-2xl">
            {m.closing}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-12 w-[3px] shrink-0 rounded bg-brand-red" aria-hidden />
            <address className="not-italic leading-relaxed">
              <span className="block font-display text-lg font-extrabold text-fg">{m.signature.name}</span>
              <span className="block text-[15px] text-fg/65">{m.signature.lines.join(" · ")}</span>
            </address>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
