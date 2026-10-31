"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "./Icons";
import { quickHelp } from "@/data/content";
import { DIVISION_URLS } from "@/data/divisions";

export default function QuickHelp() {
  const [choice, setChoice] = useState("");
  const [error, setError] = useState(false);

  const go = (e: FormEvent) => {
    e.preventDefault();
    const opt = quickHelp.options.find((o) => o.label === choice);
    if (!opt) {
      setError(true);
      return;
    }
    window.location.href = DIVISION_URLS[opt.division];
  };

  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-line/10 bg-soft px-6 py-10 sm:px-12 sm:py-12">
      <span className="absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" aria-hidden />
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Quick help</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-fg sm:text-3xl">{quickHelp.heading}</h2>
          <p className="mt-2 text-fg/70">{quickHelp.text}</p>
        </div>
        <form onSubmit={go} className="flex flex-col gap-3 sm:flex-row" noValidate>
          <label htmlFor="quick-help" className="sr-only">
            {quickHelp.label}
          </label>
          <div className="relative flex-1">
            <select
              id="quick-help"
              value={choice}
              onChange={(e) => {
                setChoice(e.target.value);
                setError(false);
              }}
              aria-invalid={error}
              aria-describedby={error ? "quick-help-error" : undefined}
              className={`h-14 w-full appearance-none rounded-full border bg-card px-6 pr-12 font-medium text-fg shadow-card focus:outline-none focus:ring-4 focus:ring-brand-red/20 ${
                error ? "border-brand-red" : "border-line/15"
              }`}
            >
              <option value="">{quickHelp.label}</option>
              {quickHelp.options.map((o) => (
                <option key={o.label} value={o.label}>
                  {o.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-fg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            {error && (
              <p id="quick-help-error" role="alert" className="mt-2 pl-5 text-sm font-medium text-brand-red">
                Please choose an option first.
              </p>
            )}
          </div>
          <button type="submit" className="btn-primary h-14 justify-center px-9">
            Go <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
