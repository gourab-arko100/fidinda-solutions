/** Global company details used in the header, footer, contact page and SEO. */
export const site = {
  name: "Fidinda Solutions",
  legalName: "Fidinda Financial & Management Solutions Co., Ltd.",
  url: "https://fidindasolutions.com",
  logo: "/logo.png", // navy logo for light backgrounds
  logoLight: "/logo-light.png", // white version for dark backgrounds
  logoMark: "/logo-mark.png",
  logoMarkLight: "/logo-mark-light.png",
  website: "www.fidindasolutions.com",
  foundingYear: "2023",
  title: "Fidinda Solutions | Finance, Management, Healthcare & Travel Services in Phnom Penh, Cambodia",
  description:
    "Fidinda Solutions brings four specialised divisions under one trusted brand: Financial, Management, Health and Travel Solutions, serving businesses, organisations, individuals and families in Cambodia and beyond.",
  slogan: "One Brand. Four Specialised Solutions. A Shared Commitment to Excellence.",
  footerAbout:
    "A diversified professional services company in Phnom Penh, Cambodia — bringing finance, management, healthcare facilitation and travel together under one trusted brand.",
  copyright: "© 2026 Fidinda Solutions. All rights reserved.",

  phones: [
    { label: "Khmer", display: "+855-12877547", tel: "+85512877547" },
    { label: "English", display: "+855-17457244", tel: "+85517457244" },
  ],
  email: "support@fidindasolutions.com",
  address: {
    locality: "Phnom Penh",
    country: "Cambodia",
    countryCode: "KH",
    display: "Phnom Penh, Cambodia",
  },
  /** Replace with the "Embed a map" src from Google Maps for your exact office. */
  mapEmbedUrl: "https://www.google.com/maps?q=Phnom+Penh,+Cambodia&output=embed",

  socials: [
    { name: "Facebook", href: "https://www.facebook.com/share/19r5ibhQkV/", icon: "facebook" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fidinda.solutions?utm_source=qr&dlrf=MWU3N3g3ZmV5ZGcxMA==",
      icon: "instagram",
    },
    { name: "TikTok", href: "https://www.tiktok.com/@fidinda.solutions?_r=1&_t=ZS-9AnXoqbmtSW", icon: "tiktok" },
  ] as const,

  /** Floating chat button. */
  chat: {
    whatsapp: "https://wa.me/85517457244",
    telegram: "https://t.me/+85512877547",
  },
};

/** Footer columns (division-site links come from /data/divisions.ts). */
export const footerColumns = {
  services: {
    title: "Services",
    links: [
      { label: "Accounting & Bookkeeping", division: "financial" },
      { label: "Taxation & Auditing", division: "financial" },
      { label: "Business & NGO Registration", division: "management" },
      { label: "Project Management", division: "management" },
      { label: "Medical Treatment Abroad", division: "health" },
      { label: "Air Tickets & Visas", division: "travel" },
    ] as const,
  },
  clients: {
    title: "For Clients",
    links: [
      { label: "Find Your Division", href: "/#divisions" },
      { label: "Why Choose Us", href: "/#why-choose-us" },
      { label: "Request a Quote", href: "/contact" },
      { label: "Contact a Division", href: "/contact#direct" },
      { label: "All Services", href: "/divisions" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Message from the Co-Founder", href: "/about#co-founder" },
      { label: "Our Mission & Vision", href: "/mission-vision" },
      { label: "Our Beliefs", href: "/mission-vision#beliefs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  /** Point these at real pages/URLs when ready (e.g. a PDF, the Financial site, or a full URL). */
  resources: {
    title: "Resource Library",
    links: [
      { label: "Publications", href: "/resources#publications" },
      { label: "Articles", href: "/articles" },
      { label: "Local Legislations", href: "/resources#legislations" },
    ],
  },
};

/** Header menu. (No "Home" item — the logo links to the home page.) */
export const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Mission & Vision", href: "/mission-vision" },
  { label: "Our Divisions", href: "/divisions", dropdown: true },
  { label: "Contact", href: "/contact" },
] as const;
