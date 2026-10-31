"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "./Icons";
import { testimonials } from "@/data/content";
import { divisions } from "@/data/divisions";

export default function TestimonialSlider({ align = "center" }: { align?: "center" | "left" }) {
  const left = align === "left";
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const many = n > 1;

  const go = useCallback((dir: number) => setI((v) => (v + dir + n) % n), [n]);

  useEffect(() => {
    if (!many || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [many, paused, go]);

  return (
    <div
      className={`relative ${left ? "" : "mx-auto max-w-3xl"}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
          {testimonials.map((t, idx) => {
            const d = t.division ? divisions.find((x) => x.slug === t.division) : undefined;
            return (
              <figure
                key={idx}
                className={`w-full shrink-0 px-1 ${left ? "text-left" : "text-center"}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${n}`}
                aria-hidden={idx !== i}
              >
                <div className={`flex gap-1 text-brand-red ${left ? "" : "justify-center"}`} aria-label={`Rated ${t.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} filled={s < t.rating} />
                  ))}
                </div>
                <blockquote className="mt-7 font-display text-xl font-semibold leading-relaxed text-fg sm:text-2xl lg:text-[1.7rem]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-bold text-fg">{t.author}</span>
                  <span className="block text-sm text-fg/60">{t.company}</span>
                  {d && (
                    <span className="mt-4 inline-block rounded-full border border-brand-red/30 px-3 py-1 text-xs font-bold text-brand-red">
                      {d.name}
                    </span>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {many && (
        <div className={`mt-8 flex items-center gap-4 ${left ? "" : "justify-center"}`}>
          <button type="button" onClick={() => go(-1)} className="slider-btn" aria-label="Previous testimonial">
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                aria-current={idx === i}
                className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand-red" : "w-2.5 bg-fg/20 hover:bg-fg/40"}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} className="slider-btn" aria-label="Next testimonial">
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
