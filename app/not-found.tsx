import type { Metadata } from "next";
import Link from "next/link";
import DivisionGrid from "@/components/DivisionGrid";
import { ArrowLeft } from "@/components/Icons";
import { notFound } from "@/data/content";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section relative isolate bg-soft">
      <div className="bg-dots absolute inset-0 -z-10 [mask-image:linear-gradient(black,transparent_60%)]" aria-hidden />
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-display text-[6rem] font-extrabold leading-none tracking-tight text-fg sm:text-[9rem]">
            4<span className="text-brand-red">0</span>4
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">{notFound.heading}</h1>
          <p className="lead mt-4">{notFound.text}</p>
          <Link href="/" className="btn-outline mt-8">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
        <DivisionGrid compact />
      </div>
    </section>
  );
}
