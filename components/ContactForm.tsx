"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { contactPage } from "@/data/content";
import { Check, Info } from "./Icons";

type Fields = {
  name: string;
  email: string;
  phone: string;
  division: string;
  language: string;
  message: string;
  company: string; // honeypot — leave empty
};

type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { name: "", email: "", phone: "", division: "", language: "English", message: "", company: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) e.phone = "Please enter a valid phone / WhatsApp number.";
  if (!f.division) e.division = "Please choose a division (or “Not sure”).";
  if (!f.language) e.language = "Please choose a language.";
  if (f.message.trim().length < 10) e.message = "Please tell us a little more (at least 10 characters).";
  if (f.message.length > 3000) e.message = "Message is too long (max 3000 characters).";
  return e;
}

export default function ContactForm() {
  const [f, setF] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  // Pre-select a division from ?division=health
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("division");
    if (q && contactPage.divisionOptions.some((o) => o.value === q)) setF((v) => ({ ...v, division: q }));
  }, []);

  const set = (k: keyof Fields) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setF((v) => ({ ...v, [k]: value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    const firstBad = Object.keys(errs)[0];
    if (firstBad) {
      document.getElementById(`cf-${firstBad}`)?.focus();
      return;
    }
    setStatus("loading");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || contactPage.errorMessage);
      setStatus("success");
      setF(initial);
    } catch (err) {
      setStatus("error");
      setServerMsg(err instanceof Error ? err.message : contactPage.errorMessage);
    }
  };

  const field = (k: keyof Fields) => ({
    id: `cf-${k}`,
    name: k,
    value: f[k],
    onChange: set(k),
    "aria-invalid": Boolean(errors[k]),
    "aria-describedby": errors[k] ? `cf-${k}-err` : undefined,
    className: `input ${errors[k] ? "input-error" : ""}`,
  });

  const Err = ({ k }: { k: keyof Fields }) =>
    errors[k] ? (
      <p id={`cf-${k}-err`} className="mt-1.5 text-sm text-brand-red">
        {errors[k]}
      </p>
    ) : null;

  if (status === "success") {
    return (
      <div role="status" className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-soft px-6 py-14 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-600 dark:text-green-400">
          <Check size={32} />
        </span>
        <p className="mt-5 max-w-sm text-lg font-medium text-fg">{contactPage.successMessage}</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-1 flex-col space-y-5" aria-describedby="cf-required-note">
      <p id="cf-required-note" className="text-sm text-fg/60">
        All fields marked <span className="text-brand-red">*</span> are required.
      </p>

      {/* Honeypot (hidden from people) */}
      <div className="hidden" aria-hidden>
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" value={f.company} onChange={set("company")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="label">
            Full name <span className="text-brand-red">*</span>
          </label>
          <input type="text" autoComplete="name" {...field("name")} />
          <Err k="name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="label">
            Email <span className="text-brand-red">*</span>
          </label>
          <input type="email" autoComplete="email" inputMode="email" {...field("email")} />
          <Err k="email" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="label">
            Phone / WhatsApp <span className="text-brand-red">*</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+855 ..." {...field("phone")} />
          <Err k="phone" />
        </div>
        <div>
          <label htmlFor="cf-division" className="label">
            Which division do you need? <span className="text-brand-red">*</span>
          </label>
          <select {...field("division")}>
            <option value="">Select a division…</option>
            {contactPage.divisionOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Err k="division" />
        </div>
      </div>

      <fieldset>
        <legend className="label">
          Preferred language <span className="text-brand-red">*</span>
        </legend>
        <div className="mt-1 flex gap-3">
          {contactPage.languageOptions.map((lang) => (
            <label
              key={lang}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-red/25 ${
                f.language === lang ? "border-brand-red bg-brand-red text-white" : "border-line/15 text-fg hover:border-line/40"
              }`}
            >
              <input
                type="radio"
                name="language"
                value={lang}
                checked={f.language === lang}
                onChange={set("language")}
                className="sr-only"
              />
              {lang}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message box grows to fill the card, so the form matches the left column's height */}
      <div className="flex flex-1 flex-col">
        <label htmlFor="cf-message" className="label">
          Message <span className="text-brand-red">*</span>
        </label>
        <textarea
          rows={6}
          placeholder="How can we help you?"
          {...field("message")}
          className={`${field("message").className} min-h-[9rem] flex-1 resize-y`}
        />
        <Err k="message" />
      </div>

      {status === "error" && (
        <div role="alert" className="flex gap-3 rounded-xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-red">
          <Info size={20} className="shrink-0" />
          <span>{serverMsg || contactPage.errorMessage}</span>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center py-4 text-base sm:w-auto">
        {status === "loading" ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
      <p className="sr-only" aria-live="polite">
        {status === "loading" ? "Sending your message" : ""}
      </p>
    </form>
  );
}
