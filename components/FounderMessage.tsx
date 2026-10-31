/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "./Icons";
import { LogoMark } from "./Logo";
import { founderMessage as m } from "@/data/content";

/** Renders **bold** segments inside a paragraph. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-bold text-fg">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** "Message from Co-founder" — text on the left, portrait on the right. */
export default function FounderMessage() {
  return (
    <section id="co-founder" className="section relative isolate overflow-hidden bg-soft" aria-labelledby="founder-heading">
      <div className="bg-dots absolute inset-x-0 top-0 -z-10 h-72 [mask-image:linear-gradient(black,transparent)]" aria-hidden />
      <div className="container">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow eyebrow-center">{m.eyebrow}</p>
          <h2 id="founder-heading" className="h-section mt-4">
            {m.heading}
          </h2>
          <p className="mt-5 font-display text-lg font-semibold leading-relaxed text-fg/75 sm:text-xl">{m.subheading}</p>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          {/* Message */}
          <div className="order-2 lg:order-1">
            <Reveal className="relative">
              <span
                className="pointer-events-none absolute -left-2 -top-14 font-display text-[9rem] font-extrabold leading-none text-brand-red/15"
                aria-hidden
              >
                &ldquo;
              </span>
              <div className="relative space-y-5 text-[17px] leading-relaxed text-fg/75">
                {m.paragraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? "font-display text-xl font-semibold leading-relaxed text-fg" : ""}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>
            </Reveal>

          </div>

          {/* Portrait */}
          <Reveal delay={120} className="order-1 lg:order-2">
            <figure className="relative isolate mx-auto max-w-sm pb-6 pr-6 lg:max-w-none">
              <span className="absolute bottom-0 right-0 -z-10 h-2/3 w-2/3 rounded-[2rem] bg-brand-red" aria-hidden />
              <span className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-3xl border-[10px] border-navy/15 dark:border-white/15" aria-hidden />
              <div className="relative overflow-hidden rounded-[2rem] bg-navy shadow-lift">
                <img
                  src={m.photo.src}
                  alt={m.photo.alt}
                  width={960}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/85 to-transparent px-6 pb-6 pt-24 text-white">
                  <LogoMark light className="absolute bottom-5 right-5 w-10 opacity-60" />
                  <figcaption>
                    <span className="block font-display text-xl font-extrabold leading-snug">{m.name}</span>
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

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {m.principles.map((pr, i) => (
            <Reveal as="li" key={pr.lead} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-line/10 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-lift">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red/10 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <Check size={18} strokeWidth={2.6} />
                </span>
                <p className="mt-4 font-display font-bold leading-snug text-fg">{pr.lead}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-fg/70">{pr.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 flex flex-col gap-5 rounded-2xl border-l-4 border-brand-red bg-card p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="text-[17px] leading-relaxed text-fg/80">
            <strong className="font-bold text-fg">{m.closing.lead}</strong> {m.closing.text}
          </p>
          <Link href="/contact" className="btn-primary shrink-0 justify-center">
            Contact Us <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
