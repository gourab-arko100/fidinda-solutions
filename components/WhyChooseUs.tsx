import Photo from "./Photo";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "@/data/content";

/** "Why Choose Us" — six photo cards in a 3 × 2 grid. */
export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section relative isolate bg-soft" aria-labelledby="why-heading">
      <div className="bg-dots absolute inset-x-0 top-0 -z-10 h-72 [mask-image:linear-gradient(black,transparent)]" aria-hidden />
      <div className="container">
        <SectionHeading id="why-heading" eyebrow={whyChooseUs.eyebrow} heading={whyChooseUs.heading} intro={whyChooseUs.intro} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {whyChooseUs.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/10 bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-brand-red/30 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo
                    photo={item.photo}
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" aria-hidden />
                  <span className="absolute bottom-4 left-5 font-display text-4xl font-extrabold leading-none text-white/90 drop-shadow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative flex flex-1 flex-col px-7 pb-8 pt-6">
                  <span className="absolute left-0 top-0 h-[3px] w-14 bg-brand-red transition-all duration-500 group-hover:w-full" aria-hidden />
                  <h3 className="text-xl font-extrabold tracking-tight text-fg">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg/70">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
