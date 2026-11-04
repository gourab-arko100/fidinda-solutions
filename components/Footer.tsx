import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { DIVISION_URLS, divisions } from "@/data/divisions";
import { footerColumns, site } from "@/data/site";

/** Same layout as the Fidinda Financial / Management site footers. Dark navy in both themes. */
export default function Footer() {
  const { services, clients, company, resources } = footerColumns;
  return (
    <footer className="relative bg-[#1C095A] text-white/75" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      {/* top accent — same as the Financial / Management site footers */}
      <div aria-hidden>
        <div className="h-[3px] bg-brand-red" />
        <div className="flex h-1">
          <span className="w-1/4 bg-brand-red" />
          <span className="flex-1 bg-[#3A2690]" />
        </div>
      </div>

      <div className="container grid grid-cols-2 gap-x-6 gap-y-10 pb-10 pt-14 sm:gap-12 sm:pb-12 sm:pt-16 lg:grid-cols-5 lg:gap-8 xl:grid-cols-[1.45fr_1fr_1fr_1fr_0.95fr_1fr] xl:gap-7">
        {/* Brand + contact */}
        <div className="col-span-2 lg:col-span-5 lg:grid lg:grid-cols-[1.2fr_1fr_auto] lg:items-start lg:gap-x-12 xl:col-span-1 xl:block">
          <div>
          <Link href="/" className="inline-block rounded-lg bg-white px-4 py-3" aria-label="Fidinda Solutions — Home">
            <Logo variant="dark" className="h-9 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/80">{site.footerAbout}</p>
          </div>

          <ul className="mt-6 space-y-3 text-[15px] lg:mt-0 xl:mt-6">
            {site.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="font-semibold text-white transition-colors hover:text-brand-red">
                  Call ({p.label}) <span className="ml-1">{p.display}</span>
                </a>
              </li>
            ))}
            <li>
              <span className="block font-semibold text-white">Email</span>
              <a href={`mailto:${site.email}`} className="font-semibold text-white transition-colors hover:text-brand-red">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.url} className="font-semibold text-white transition-colors hover:text-brand-red">
                {site.website}
              </a>
            </li>
            <li className="text-white/70">{site.address.display}</li>
          </ul>

          <div>
          <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.22em] text-white/80 lg:mt-0 xl:mt-8">Follow Us</p>
          <SocialLinks />
          </div>
        </div>

        <nav aria-label={services.title}>
          <h3 className="footer-title">{services.title}</h3>
          <ul className="space-y-3 sm:space-y-3.5">
            {services.links.map((l) => (
              <li key={l.label}>
                <a href={DIVISION_URLS[l.division]} className="footer-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={clients.title}>
          <h3 className="footer-title">{clients.title}</h3>
          <ul className="space-y-3 sm:space-y-3.5">
            {clients.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="footer-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={company.title}>
          <h3 className="footer-title">{company.title}</h3>
          <ul className="space-y-3 sm:space-y-3.5">
            {company.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="footer-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={resources.title}>
          <h3 className="footer-title">{resources.title}</h3>
          <ul className="space-y-3 sm:space-y-3.5">
            {resources.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="footer-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our Divisions">
          <h3 className="footer-title">Our Divisions</h3>
          <ul className="space-y-3 sm:space-y-3.5">
            {divisions.map((d) => (
              <li key={d.slug}>
                <a href={d.url} className="footer-link">
                  {d.name.replace("Fidinda ", "")}
                </a>
              </li>
            ))}
            <li>
              <Link href="/" className="footer-link">
                Fidinda Solutions Group
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="flex flex-col gap-2 border-t border-white/10 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/85">{site.copyright}</p>
          <p className="text-white/60">{site.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
