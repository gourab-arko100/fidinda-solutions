import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { sortedArticles } from "@/data/articles";
import { photos } from "@/data/images";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Insights from Fidinda Solutions on tax compliance, company registration, financial services and management for businesses and NGOs in Cambodia.",
  alternates: { canonical: "/articles" },
  openGraph: { title: "Articles | Fidinda Solutions", url: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resource Library"
        heading="Articles"
        text="Practical insights on tax, registration, finance and management for businesses and organisations in Cambodia."
        crumb="Articles"
        photo={photos.financial}
      />
      <section className="section">
        <div className="container grid gap-6 sm:grid-cols-2 lg:gap-8">
          {sortedArticles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 90} className="h-full">
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
