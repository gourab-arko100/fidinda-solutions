import Link from "next/link";
import Photo from "./Photo";
import Reveal from "./Reveal";
import type { Photo as PhotoData } from "@/data/images";

/** Photo banner at the top of inner pages, with a navy brand overlay (same in both themes). */
export default function PageHero({
  eyebrow,
  heading,
  text,
  crumb,
  photo,
}: {
  eyebrow: string;
  heading: string;
  text?: string;
  crumb: string;
  photo: PhotoData;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Photo photo={photo} priority sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/50" aria-hidden />
      <div className="container py-14 sm:py-28 lg:py-32">
        <Reveal className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/65">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/40" aria-hidden>
              /
            </span>
            <span aria-current="page" className="text-white">
              {crumb}
            </span>
          </nav>
          <p className="eyebrow !text-white/85">{eyebrow}</p>
          <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.12] tracking-tight sm:mt-5 sm:text-5xl lg:text-[3.4rem]">{heading}</h1>
          {text && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
