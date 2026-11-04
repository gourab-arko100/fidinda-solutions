import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";
import { resourceLibrary as r } from "@/data/content";
import { photos } from "@/data/images";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "Publications, articles and local legislation resources from Fidinda Solutions for businesses and organisations in Cambodia.",
  alternates: { canonical: "/resources" },
  openGraph: { title: "Resource Library | Fidinda Solutions", url: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow={r.hero.eyebrow} heading={r.hero.heading} text={r.hero.text} crumb="Resource Library" photo={photos.signing} />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {r.sections.map((sec, i) => (
            <Reveal key={sec.id} delay={i * 90} className="h-full">
              <article
                id={sec.id}
                className="relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[1.75rem] border border-line/10 bg-card p-7 shadow-card sm:p-8"
              >
                <span className="absolute left-0 top-0 h-[3px] w-14 bg-brand-red" aria-hidden />
                <h2 className="text-2xl font-extrabold tracking-tight text-fg">{sec.title}</h2>
                <p className="mt-3 leading-relaxed text-fg/70">{sec.text}</p>

                {sec.items.length > 0 ? (
                  <ul className="mt-6 space-y-3">
                    {sec.items.map((it) => (
                      <li key={it.title}>
                        <a
                          href={it.href}
                          target={it.href.startsWith("http") || it.href.endsWith(".pdf") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 rounded-xl border border-line/10 bg-soft px-4 py-3 text-[15px] font-semibold text-fg transition-colors hover:border-brand-red/40"
                        >
                          {it.title}
                          <ArrowRight size={16} className="shrink-0 text-fg/40 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-red" />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 rounded-xl border border-dashed border-line/20 px-4 py-3 text-sm text-fg/60">{r.emptyText}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="container mt-12 text-center">
          <p className="text-fg/70">{r.helpText}</p>
          <Link href="/contact" className="btn-primary mt-5 inline-flex">
            Contact Us <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
