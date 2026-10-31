import { photos, type Photo } from "./images";

/**
 * ONE place for every division link on the site.
 *
 * To move a division to a subdomain later (e.g. https://finance.fidindasolutions.com),
 * change only the URL below — header, footer, cards, quick-help selector,
 * contact cards, JSON-LD schema and the old-URL redirects all read from here.
 *
 * TODO: replace the Financial and Management URLs with the real deployed addresses.
 */
export const DIVISION_URLS = {
  financial: "https://fidinda-financial.vercel.app", // TODO: [FINANCIAL SITE URL]
  management: "https://fidinda-management.vercel.app", // TODO: [MANAGEMENT SITE URL]
  health: "https://fidinda-health.vercel.app",
  travel: "https://fidinda-travel.vercel.app",
} as const;

/** Path of the contact page on each division site (used by "Contact a division directly"). */
export const DIVISION_CONTACT_PATH = "/contact";

export type DivisionSlug = keyof typeof DIVISION_URLS;

export type IconName =
  | "calculator"
  | "briefcase"
  | "heart"
  | "plane";

export interface Division {
  slug: DivisionSlug;
  name: string;
  shortName: string;
  url: string;
  contactUrl: string;
  /** Logo in /public/logos — a styled icon is shown automatically if the file is missing. */
  logo: string;
  /** Photo used on cards and the /divisions page (edit in /data/images.ts). */
  image: Photo;
  icon: IconName;
  /** Display number on cards, e.g. "01". */
  number: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  services: string[];
  destinations?: string[];
  note?: string;
}

const withContact = (url: string) => `${url.replace(/\/$/, "")}${DIVISION_CONTACT_PATH}`;

export const divisions: Division[] = [
  {
    slug: "financial",
    number: "01",
    name: "Fidinda Financial Solutions",
    shortName: "Financial",
    url: DIVISION_URLS.financial,
    contactUrl: withContact(DIVISION_URLS.financial),
    logo: "/logos/financial.png",
    image: photos.financial,
    icon: "calculator",
    tagline: "Delivering Financial Clarity, Compliance, and Confidence",
    description:
      "Accounting, taxation and auditing services for businesses and organisations in Cambodia.",
    longDescription:
      "Fidinda Financial Solutions helps businesses and organisations in Cambodia keep accurate books, meet their tax obligations with confidence and present reliable financial information to owners, boards, donors and regulators. As a Licensed Tax Agent with the General Department of Taxation, our team combines local regulatory knowledge with practical, timely support.",
    tags: ["Accounting", "Taxation", "Auditing", "Tax Advisory"],
    services: [
      "Bookkeeping",
      "Financial statement preparation",
      "Financial reporting",
      "Monthly and annual tax declarations",
      "Tax registration",
      "Tax advisory",
      "Tax compliance reviews",
      "Tax audit support",
      "Financial auditing",
    ],
  },
  {
    slug: "management",
    number: "02",
    name: "Fidinda Management Solutions",
    shortName: "Management",
    url: DIVISION_URLS.management,
    contactUrl: withContact(DIVISION_URLS.management),
    logo: "/logos/management.png",
    image: photos.management,
    icon: "briefcase",
    tagline: "Strengthening Organisations Through Expertise and Innovation",
    description:
      "Business and organisational consultancy that improves efficiency, strengthens governance and supports sustainable growth.",
    longDescription:
      "Fidinda Management Solutions supports companies, NGOs and development projects from registration through to day-to-day operations and long-term strategy. We help organisations stay compliant, run projects well, adopt the right technology and make decisions based on sound research and evidence.",
    tags: ["Business & NGO Registration", "Project Management", "Software & Cloud", "Research & Advisory"],
    services: [
      "Business registration and licensing",
      "Domestic and international NGO registration",
      "Regulatory compliance assistance",
      "Contract management",
      "Project management",
      "Software application development and implementation",
      "Cloud-based business solutions",
      "Research, analysis and strategic advisory",
      "Market assessments",
      "Feasibility studies",
      "Baseline / end-line surveys",
      "Monitoring and evaluation",
      "Training and capacity building",
    ],
  },
  {
    slug: "health",
    number: "03",
    name: "Fidinda Health Solutions",
    shortName: "Health",
    url: DIVISION_URLS.health,
    contactUrl: withContact(DIVISION_URLS.health),
    logo: "/logos/health.png",
    image: photos.health,
    icon: "heart",
    tagline: "Advanced Healthcare Abroad, Guided from Cambodia",
    description:
      "Medical value travel and healthcare facilitation for Cambodian patients and families seeking advanced care abroad.",
    longDescription:
      "Fidinda Health Solutions guides Cambodian patients and families who are considering treatment overseas. From organising medical records and comparing hospitals to arranging visas, accommodation and interpreters, we coordinate the practical side of the journey so families can focus on recovery — before, during and after treatment.",
    tags: ["Hospital & Doctor Options", "Second Opinions", "Medical Visa & Travel", "Treatment Coordination"],
    services: [
      "Medical record coordination",
      "Second medical opinion facilitation",
      "Hospital and doctor options",
      "Treatment plan and cost comparisons",
      "Online consultation arrangements",
      "Hospital appointments",
      "Medical visa and travel assistance",
      "Accommodation arrangements",
      "Language and communication support",
      "Coordination during treatment and after returning home",
    ],
    destinations: ["India", "Malaysia", "Singapore", "Taiwan", "Vietnam", "Egypt", "and others"],
    note:
      "Fidinda Health Solutions provides healthcare facilitation, not medical treatment. All medical decisions remain with qualified healthcare professionals and patients.",
  },
  {
    slug: "travel",
    number: "04",
    name: "Fidinda Travel Solutions",
    shortName: "Travel",
    url: DIVISION_URLS.travel,
    contactUrl: withContact(DIVISION_URLS.travel),
    logo: "/logos/travel.png",
    image: photos.travel,
    icon: "plane",
    tagline: "Making Every Journey Simpler, Smarter, and More Memorable",
    description:
      "Personalised travel arrangements for individuals, families, business travellers and groups.",
    longDescription:
      "Fidinda Travel Solutions plans and books journeys for individuals, families, business travellers and groups — whether you are leaving Cambodia or visiting it. We take care of tickets, visas, hotels and activities with attentive, personal service, so every trip runs smoothly from start to finish.",
    tags: ["Air Ticketing", "Visa Assistance", "Hotels & Tours", "Inbound Cambodia Tours"],
    services: [
      "Domestic and international air ticketing",
      "Visa application assistance",
      "Customised travel planning",
      "Hotel and accommodation arrangements",
      "Attraction and activity bookings",
      "Tour packages",
      "Inbound tourism to Cambodia",
      "Outbound travel for Cambodian residents",
    ],
  },
];

export const getDivision = (slug: DivisionSlug) => divisions.find((d) => d.slug === slug)!;
