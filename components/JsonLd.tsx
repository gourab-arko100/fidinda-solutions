import { divisions } from "@/data/divisions";
import { site } from "@/data/site";

/** Organization schema listing all four divisions as sub-organisations. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}${site.logo}`,
    foundingDate: site.foundingYear,
    description: site.description,
    slogan: site.slogan,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressCountry: site.address.countryCode,
    },
    contactPoint: site.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.tel,
      contactType: "customer service",
      availableLanguage: p.label,
      areaServed: "KH",
    })),
    sameAs: site.socials.map((s) => s.href),
    subOrganization: divisions.map((d) => ({
      "@type": "Organization",
      name: d.name,
      url: d.url,
      description: d.description,
      slogan: d.tagline,
      parentOrganization: { "@id": `${site.url}/#organization` },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
