import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight, Check } from "@/components/Icons";
import { articles, formatDate, getArticle, sortedArticles, type ArticleBlock } from "@/data/articles";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Article not found" };
  return {
    title: a.title,
    description: a.excerpt.slice(0, 300),
    alternates: { canonical: `/articles/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.excerpt.slice(0, 300), url: `/articles/${a.slug}`, publishedTime: a.date },
  };
}

/** Renders **bold** inside text. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
        p.startsWith("**") ? (
          <strong key={i} className="font-semibold text-fg">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function Block({ b }: { b: ArticleBlock }) {
  switch (b.type) {
    case "h2":
      return <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-fg sm:text-[1.7rem]">{b.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-lg font-bold text-fg sm:text-xl">{b.text}</h3>;
    case "p":
      return (
        <p className="mt-5">
          <Rich text={b.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {b.items.map((it) => (
            <li key={it} className="flex gap-3">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden />
              <span>
                <Rich text={it} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "checks":
      return (
        <ul className="mt-5 space-y-3">
          {b.items.map((it) => (
            <li key={it} className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <Check size={13} strokeWidth={2.8} />
              </span>
              <span>
                <Rich text={it} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "cta":
      return (
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border-l-4 border-brand-red bg-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="font-display text-lg font-bold leading-snug text-fg">{b.text}</p>
          <Link href="/contact" className="btn-primary shrink-0 justify-center">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const more = sortedArticles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    image: a.image.src.startsWith("http") ? a.image.src : `${site.url}${a.image.src}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}${site.logo}` } },
    mainEntityOfPage: `${site.url}/articles/${a.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <article>
        <header className="bg-soft pb-10 pt-12 sm:pt-16">
          <div className="container max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-fg/60">
              <Link href="/" className="hover:text-fg">
                Home
              </Link>
              <span className="mx-2 text-fg/30">/</span>
              <Link href="/articles" className="hover:text-fg">
                Articles
              </Link>
            </nav>
            <p className="mt-6 inline-block rounded-full bg-navy px-3 py-1 text-xs font-bold text-white dark:bg-white/10">{a.category}</p>
            <h1 className="mt-4 text-[1.9rem] font-extrabold leading-tight tracking-tight text-fg sm:text-4xl lg:text-[2.75rem]">{a.title}</h1>
            <p className="mt-4 text-sm text-fg/60">
              <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readTime} · {site.name}
            </p>
          </div>
        </header>

        <div className="container max-w-4xl">
          <div className="-mt-1 overflow-hidden rounded-[1.75rem] shadow-lift">
            <Photo photo={a.image} priority sizes="(min-width: 900px) 860px, 100vw" maxWidth={1920} className="aspect-[16/8] w-full object-cover" />
          </div>
        </div>

        <div className="container max-w-3xl pb-16 pt-6 text-[17px] leading-[1.8] text-fg/80 sm:pb-20">
          {a.body.map((b, i) => (
            <Block key={i} b={b} />
          ))}

          <div className="mt-12 border-t border-line/10 pt-6">
            <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-bold text-fg hover:text-brand-red">
              <ArrowLeft size={16} /> All articles
            </Link>
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section bg-soft">
          <div className="container">
            <Reveal className="mb-10 text-center">
              <p className="eyebrow eyebrow-center">Keep reading</p>
              <h2 className="h-section mt-4">More articles</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {more.map((m) => (
                <ArticleCard key={m.slug} article={m} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
