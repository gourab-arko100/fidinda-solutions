import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import DivisionLogo from "@/components/DivisionLogo";
import { LogoMark } from "@/components/Logo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { ArrowRight, Mail, MapPin, Phone } from "@/components/Icons";
import { contactPage } from "@/data/content";
import { divisions } from "@/data/divisions";
import { site } from "@/data/site";
import { photos } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Fidinda Solutions in Phnom Penh, Cambodia. Call +855-12877547 (Khmer) or +855-17457244 (English), email support@fidindasolutions.com, or send us a message.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Fidinda Solutions", url: "/contact" },
};

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">{icon}</span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/55">{label}</span>
        {children}
      </span>
    </li>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contactPage.eyebrow} heading={contactPage.heading} text={contactPage.text} crumb="Contact" photo={photos.phnomPenhRiverside} />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-6">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-lift sm:p-10 dark:ring-1 dark:ring-white/10">
              <LogoMark light className="absolute -right-6 -top-6 -z-10 w-36 opacity-10" />
              <h2 className="text-2xl font-extrabold">Get in touch</h2>
              <p className="mt-2 text-white/70">We reply in Khmer or English.</p>
              <ul className="mt-8 space-y-6">
                {site.phones.map((p) => (
                  <Row key={p.tel} icon={<Phone size={20} />} label={`${p.label} line`}>
                    <a href={`tel:${p.tel}`} className="text-lg font-bold transition-colors hover:text-brand-red">
                      {p.display}
                    </a>
                  </Row>
                ))}
                <Row icon={<Mail size={20} />} label="Email">
                  <a href={`mailto:${site.email}`} className="break-all text-lg font-bold transition-colors hover:text-brand-red">
                    {site.email}
                  </a>
                </Row>
                <Row icon={<MapPin size={20} />} label="Location">
                  <span className="text-lg font-bold">{site.address.display}</span>
                </Row>
              </ul>
              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/70">Follow Us</p>
                <SocialLinks />
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-line/10 bg-soft shadow-card">
              {/* Replace site.mapEmbedUrl in /data/site.ts with your exact office embed link */}
              <iframe
                title="Map showing Fidinda Solutions in Phnom Penh, Cambodia"
                src={site.mapEmbedUrl}
                className="h-72 w-full border-0 dark:opacity-90 dark:[filter:invert(0.9)_hue-rotate(180deg)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            {/* Stretches to the height of the left column on desktop */}
            <div className="flex h-full flex-col rounded-[2rem] border border-line/10 bg-card p-6 shadow-card sm:p-10">
              <p className="eyebrow">Enquiry</p>
              <h2 className="mt-3 text-2xl font-extrabold text-fg sm:text-3xl">{contactPage.formHeading}</h2>
              <div className="mt-8 flex flex-1 flex-col">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="direct" className="section bg-soft" aria-labelledby="direct-heading">
        <div className="container">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow eyebrow-center">Prefer to go direct?</p>
            <h2 id="direct-heading" className="h-section mt-4">
              {contactPage.directHeading}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {divisions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <a
                  href={d.contactUrl}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line/10 bg-card p-4 shadow-card sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/40 hover:shadow-lift"
                >
                  <span className="absolute left-0 top-0 h-1 w-10 bg-brand-red transition-all duration-500 group-hover:w-full" aria-hidden />
                  <DivisionLogo division={d} />
                  <h3 className="mt-4 text-[15px] font-bold leading-snug text-fg sm:mt-5 sm:text-base">{d.name}</h3>
                  <p className="mt-1 hidden text-sm text-fg/60 sm:block">{d.tags.slice(0, 2).join(" · ")}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-bold text-brand-red sm:pt-6 sm:text-sm">
                    Contact {d.shortName} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
