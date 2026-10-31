import Link from "next/link";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import { finalCta } from "@/data/content";
import { photos } from "@/data/images";

export default function FinalCta() {
  return (
    <section className="pb-24 pt-4 sm:pb-28">
      <div className="container">
        <Reveal className="relative isolate overflow-hidden rounded-[2.25rem] bg-navy px-6 py-20 text-center text-white shadow-lift ring-1 ring-white/5 sm:px-12 sm:py-24">
          <Photo photo={photos.angkorWat} sizes="(min-width: 1240px) 1240px, 100vw" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/85 via-navy/80 to-navy/95" aria-hidden />
          <span className="absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brand-red/35 blur-[90px]" aria-hidden />
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow eyebrow-center !text-white/85">Cambodia &amp; beyond</p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              One Brand. <span className="text-gradient-red">Four</span> Specialised Solutions.
              <span className="mt-2 block text-white/85">A Shared Commitment to Excellence.</span>
            </h2>
            <p className="mt-5 text-lg text-white/75">{finalCta.text}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/divisions" className="btn-primary px-7 py-3.5 text-[15px]">
                {finalCta.primary} <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-ghost-light px-7 py-3 text-[15px]">
                {finalCta.secondary}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
