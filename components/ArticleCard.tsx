import Link from "next/link";
import Photo from "./Photo";
import { ArrowRight } from "./Icons";
import { formatDate, type Article } from "@/data/articles";

/** Card used on /articles and in "More articles". */
export default function ArticleCard({ article: a }: { article: Article }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line/10 bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Photo
          photo={a.image}
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          maxWidth={1440}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy backdrop-blur">
          {a.category}
        </span>
      </div>
      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <span className="absolute left-0 top-0 h-[3px] w-14 bg-brand-red transition-all duration-500 group-hover:w-full" aria-hidden />
        <h2 className="text-lg font-extrabold leading-snug text-fg sm:text-xl">
          <Link href={`/articles/${a.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {a.title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-fg/65">{a.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
          <span className="text-fg/55">
            <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5 font-bold text-brand-red">
            Read <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
