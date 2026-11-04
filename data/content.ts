import type { DivisionSlug } from "./divisions";
import { photos, type Photo } from "./images";
import { sortedArticles } from "./articles";

/* ------------------------------------------------------------------ */
/*  HOME                                                               */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Phnom Penh, Cambodia · Est. 2023",
  heading: "Your Trusted Partner for Finance, Management, Healthcare & Travel",
  subtext:
    "Fidinda Solutions is a diversified professional services company in Phnom Penh, Cambodia, delivering reliable, innovative, and client-focused solutions to businesses, organisations, individuals, and families.",
  primaryCta: "Explore Our Divisions",
  secondaryCta: "Contact Us",
};

export const chooseDivision = {
  eyebrow: "Choose Your Division",
  heading: "Four specialised teams. One trusted name.",
  intro: "Select the service you need and go straight to the right Fidinda website.",
};

export const quickHelp = {
  heading: "Not sure where to start?",
  text: "Tell us what you need and we'll connect you with the right team.",
  label: "I need help with…",
  options: [
    { label: "Accounting / Tax / Audit", division: "financial" },
    { label: "Business or NGO Registration / Consultancy", division: "management" },
    { label: "Medical Treatment Abroad", division: "health" },
    { label: "Travel / Tickets / Visa", division: "travel" },
  ] satisfies { label: string; division: DivisionSlug }[],
};

export const aboutSnapshot = {
  eyebrow: "About Fidinda",
  heading: "From financial consultancy to a four-division group",
  text:
    "Fidinda was established in 2023 as Fidinda Financial & Management Solutions Co., Ltd., specialising in financial and management consultancy. Building on that experience, we have grown into Fidinda Solutions — four specialised divisions under one brand, serving businesses, organisations, individuals and families with the same professionalism and care.",
  cta: "Learn More About Us",
  /** Edit these numbers any time. */
  stats: [
    { value: "2023", label: "Year Established" },
    { value: "4", label: "Specialised Divisions" },
    { value: "40+", label: "Corporate Clients" },
    { value: "130+", label: "Years of Cumulative Experience" },
  ],
};

export type BeliefIcon = "faith" | "friendship" | "flexibility" | "focus";

export const beliefs = {
  eyebrow: "Our Beliefs",
  heading: "The Four Fs of Fidinda",
  intro:
    "At the heart of Fidinda Solutions lies our distinctive corporate identity, represented by the Four Fs embedded in our logo: Faith, Friendship, Flexibility, and Focus. These values guide our relationships, business practices, and service delivery across all four divisions.",
  items: [
    {
      title: "Faith",
      icon: "faith",
      text: "We believe to be trustworthy (Fidinda) and reliable in our business through transparency, collaboration, and effective communication.",
    },
    {
      title: "Friendship",
      icon: "friendship",
      text: "We value long-term partnerships with our clients by building a strong bond of mutual affection & trust and are committed to their success.",
    },
    {
      title: "Flexibility",
      icon: "flexibility",
      text: "We recognise that every client has different needs and circumstances, and we strive to provide practical, adaptable, and personalised solutions.",
    },
    {
      title: "Focus",
      icon: "focus",
      text: "We remain committed to understanding our clients' objectives, maintaining attention to detail, and delivering quality services that create meaningful value.",
    },
  ] satisfies { title: string; icon: BeliefIcon; text: string }[],
};

export type AudienceIcon = "business" | "ngo" | "individual" | "family";


export const whoWeServe = {
  eyebrow: "Who We Serve",
  heading: "Support for every kind of client",
  items: [
    { title: "Businesses", icon: "business", photo: photos.serveBusinesses, text: "Start-ups, SMEs and established companies operating in Cambodia." },
    { title: "Organisations & NGOs", icon: "ngo", photo: photos.serveOrganisations, text: "Local and international NGOs, associations and development projects." },
    { title: "Individuals", icon: "individual", photo: photos.serveIndividuals, text: "Professionals, patients and travellers who want a dependable guide." },
    { title: "Families", icon: "family", photo: photos.family, text: "Families planning medical care abroad, holidays or important trips." },
  ] satisfies { title: string; icon: AudienceIcon; photo: Photo; text: string }[],
};

export const credentials = [
  { title: "Licensed Tax Agent", body: "General Department of Taxation (GDT)" },
  { title: "Member", body: "Kampuchea Institute of Certified Public Accountants and Auditors (KICPAA)" },
];

/** Add more testimonials here — the slider picks them up automatically. */
export const testimonials: {
  quote: string;
  author: string;
  company: string;
  division?: DivisionSlug;
  rating: number;
}[] = [
  {
    quote:
      "Fidinda's expertise in accounting and tax services has transformed our business. Their insights and support have been invaluable in making informed decisions. Highly recommended!",
    author: "CEO",
    company: "King Touch Business Co., Ltd",
    division: "financial",
    rating: 5,
  },
];

export const finalCta = {
  heading: "One Brand. Four Specialised Solutions. A Shared Commitment to Excellence.",
  text: "Whichever service you need, our team is ready to help you take the next step.",
  primary: "Explore Divisions",
  secondary: "Contact Us",
};

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

export const about = {
  hero: {
    eyebrow: "About Us",
    heading: "Fidinda Solutions – Your Trusted Partner for Finance, Management, Healthcare & Travel",
    text: "Four specialised divisions sharing one commitment to professionalism, transparency and personalised service.",
  },
  whoWeAre: {
    heading: "About Us",
    paragraphs: [
      "Fidinda Solutions is a diversified professional services company based in Phnom Penh, Cambodia, committed to delivering reliable, innovative, and client-focused solutions to businesses, organisations, individuals, and families. Established in 2023 as Fidinda Financial & Management Solutions Co., Ltd., the company initially specialised in financial and management consultancy services. Building upon its professional experience, industry knowledge, and commitment to customer satisfaction, Fidinda has expanded its operations to address emerging needs and opportunities across multiple service sectors.",
      "Today, operating under the unified brand Fidinda Solutions, we bring together four specialised service divisions: Fidinda Financial Solutions, Fidinda Management Solutions, Fidinda Health Solutions, and Fidinda Travel Solutions. Each division focuses on a distinct area of expertise while sharing our commitment to professionalism, transparency, operational excellence, and personalised customer service.",
    ],
  },
  journey: {
    heading: "Our Journey",
    /** Edit the "year" labels freely. */
    items: [
      { year: "2023", title: "Founded", text: "Founded as Fidinda Financial & Management Solutions Co., Ltd." },
      { year: "Expansion 2025", title: "New division", text: "Fidinda Health Solutions launched." },
      { year: "Expansion 2026", title: "New division", text: "Fidinda Travel Solutions launched." },
      { year: "Today", title: "One brand", text: "Fidinda Solutions — one brand with four specialised divisions." },
    ],
  },
  divisionsHeading: "Our Four Divisions",
  /** The separate "Our Mission & Vision" page (/mission-vision). */
  missionVisionHero: {
    eyebrow: "Our Mission & Vision",
    heading: "What drives us, and where we're heading",
    text: "Our mission, our vision, the Four Fs that guide every division, and our commitment to the people we serve.",
  },
  vision: {
    heading: "Our Vision",
    text: "To create long-lasting partnerships with our clients, built on trust, integrity, and mutual growth.",
    photo: photos.vision,
  },
  mission: {
    heading: "Our Mission",
    text: "To become a leading provider of innovative integrated solutions for transforming businesses and driving their growth.",
    photo: photos.mission,
  },
  commitment: {
    heading: "Our Commitment",
    paragraphs: [
      "At Fidinda Solutions, we believe that professional services should go beyond completing transactions or fulfilling immediate requirements. Our objective is to build lasting relationships, understand the challenges and aspirations of those we serve, and provide solutions that make a tangible difference.",
      "Whether supporting a business with financial compliance, guiding an organisation through management challenges, assisting a Cambodian family in accessing specialised healthcare abroad, or helping travellers plan their next journey, we bring the same dedication to professionalism, transparency, accountability, and customer satisfaction.",
      "With four specialised service divisions under one trusted brand, Fidinda Solutions is committed to becoming a dependable partner for businesses, organisations, individuals, and families in Cambodia and beyond.",
    ],
    closing: "One Brand. Four Specialised Solutions. A Shared Commitment to Excellence.",
  },
};

/* ------------------------------------------------------------------ */
/*  DIVISIONS PAGE                                                     */
/* ------------------------------------------------------------------ */

export const divisionsPage = {
  eyebrow: "Our Divisions",
  heading: "Specialised expertise, one shared standard",
  text: "Explore what each Fidinda division offers, then visit its website for full details, packages and enquiries.",
};

/* ------------------------------------------------------------------ */
/*  CONTACT PAGE                                                       */
/* ------------------------------------------------------------------ */

export const contactPage = {
  eyebrow: "Contact Us",
  heading: "Let's talk about what you need",
  text: "Send us a message and the right Fidinda team will get back to you — in Khmer or English.",
  formHeading: "Send us a message",
  directHeading: "Contact a division directly",
  successMessage: "Thank you! Your message has been sent. Our team will contact you shortly.",
  errorMessage: "Sorry, something went wrong. Please try again or call us directly.",
  divisionOptions: [
    { value: "financial", label: "Financial" },
    { value: "management", label: "Management" },
    { value: "health", label: "Health" },
    { value: "travel", label: "Travel" },
    { value: "not-sure", label: "Not sure" },
  ],
  languageOptions: ["English", "Khmer"],
};

export const notFound = {
  heading: "This page has moved — or never existed",
  text: "Our website has been reorganised into four divisions. Choose where you'd like to go:",
};

/* ------------------------------------------------------------------ */
/*  ABOUT — MESSAGE FROM CO-FOUNDER                                    */
/* ------------------------------------------------------------------ */

export const founderMessage = {
  eyebrow: "Leadership",
  heading: "Message from the Co-Founder & Director",
  subheading: "Building Trust, Creating Opportunities, and Delivering Solutions Beyond Boundaries",
  welcome: "Welcome to **Fidinda Solutions** – **Your Trusted Partner in Finance, Management, Healthcare, and Travel.**",
  name: "Fazleh Borkat Manik Shah Mazumder",
  role: "Co-Founder & Director",
  photo: { src: "/images/co-founder.jpg", alt: "Fazleh Borkat Manik Shah Mazumder, Co-Founder & Director of Fidinda Solutions" },
  /** Paragraphs. Wrap words in **double asterisks** to make them bold. */
  paragraphs: [
    "When we established Fidinda Financial & Management Solutions Co., Ltd. in Cambodia in 2023, our vision was to create a professional service organisation that businesses and institutions could rely upon for expertise, integrity, and practical solutions. We began our journey by helping businesses and organisations navigate the complexities of financial management, regulatory compliance, organisational development, and strategic decision-making.",
    "Over the years, our interactions with clients, partners, and communities have strengthened an important belief: **the true value of a service organisation lies not merely in the services it delivers, but in its ability to understand people's needs, simplify complex processes, and create meaningful solutions.**",
    "Guided by this philosophy, we have evolved beyond our original areas of expertise. Today, under the unified identity of **Fidinda Solutions**, we are expanding our commitment through four specialised business verticals, each designed to respond to the changing needs of businesses, organisations, individuals, and families.",
    "Our journey from financial and management consultancy to healthcare facilitation and travel services reflects our commitment to responding to emerging needs and creating opportunities to serve a wider community. While our areas of operation have diversified, our fundamental approach remains unchanged: understanding individual needs, delivering practical solutions, and building relationships founded on trust.",
    "Although these four divisions serve different purposes, they are united by a common philosophy and a shared commitment to delivering quality services.",
    "The Four Fs of Fidinda – Faith, Friendship, Flexibility, and Focus – represent more than our corporate identity; they reflect the principles upon which we founded this organisation. These values have guided our journey from the beginning and continue to shape our decisions as we expand into new service sectors.",
    "For us, these principles translate into a simple but meaningful commitment: earning the confidence of those we serve, building relationships that extend beyond individual transactions, adapting to changing needs, and remaining focused on delivering genuine value. We believe that maintaining these commitments consistently across diverse services is what will ultimately distinguish Fidinda Solutions.",
    "Our growth is driven by opportunities to serve, not merely opportunities to expand. We believe that financial stability, effective management, access to suitable healthcare, and convenient travel arrangements all contribute, in different ways, to improving the lives and opportunities of the people and organisations we support.",
    "As we enter this new chapter, our commitment to transparency, responsible business practices, technological innovation, and customer satisfaction remains unchanged. We will continue to strengthen our professional capabilities, develop meaningful partnerships, and explore opportunities that allow us to create sustainable value.",
    "Most importantly, we understand that **trust is earned through consistent performance, responsible conduct, and the relationships we build over time.** Whether you are an entrepreneur establishing a business in Cambodia, an organisation seeking professional support, a family exploring medical treatment abroad, or a traveller planning your next journey, our aspiration is to be a partner you can approach with confidence.",
    "On behalf of the entire Fidinda team, I extend my sincere appreciation to our clients, partners, and well-wishers for their continued trust and encouragement. We look forward to building stronger relationships, embracing new opportunities, and growing together in the years ahead.",
  ],
  closing: "Welcome to Fidinda Solutions – One Brand, Four Specialised Solutions, United by Trust.",
  signature: {
    name: "Fazleh Borkat Manik Shah Mazumder",
    lines: ["Co-Founder & Director", "Fidinda Solutions", "Phnom Penh, Cambodia", "www.fidindasolutions.com"],
  },
};

/* ------------------------------------------------------------------ */
/*  HOME — WHY CHOOSE US                                               */
/* ------------------------------------------------------------------ */

export const whyChooseUs = {
  eyebrow: "Why Fidinda",
  heading: "Why Choose Us",
  intro: "What sets Fidinda apart — and what every client can expect from working with us.",
  /** Photos live in /public/images/why/ — replace a file (same name) to change a picture. */
  items: [
    {
      title: "Tailored Strategies",
      text: "We understand that one size does not fit all. That's why we develop customized strategies specifically designed to address your unique challenges and capitalize on your opportunities, ensuring maximum impact and success.",
      photo: { src: "/images/why/tailored-strategies.jpg", alt: "Hand ticking a satisfied rating on a digital checklist" },
    },
    {
      title: "Proactive Problem-Solving",
      text: "We don't just react to problems; we anticipate and proactively address them before they arise. By staying one step ahead, we help you navigate obstacles seamlessly, keeping your business on track and moving forward.",
      photo: { src: "/images/why/proactive-problem-solving.jpg", alt: "Team reviewing performance charts on a clipboard and monitor" },
    },
    {
      title: "Competitive Advantage",
      text: "Partnering with us gives you a competitive edge. With our innovative solutions, strategic insights, and industry expertise, you'll be well-positioned to outperform your competitors and lead the way in your market.",
      photo: { src: "/images/why/competitive-advantage.jpg", alt: "Rising financial growth graph with an upward arrow" },
    },
    {
      title: "Exceptional Value",
      text: "We offer more than just services; we deliver value. From cost savings and efficiency gains to strategic guidance and peace of mind, the benefits of working with us extend far beyond the bottom line, providing you with a significant return on investment.",
      photo: { src: "/images/why/exceptional-value.jpg", alt: "Business team nurturing a young plant together" },
    },
    {
      title: "Commitment to Excellence",
      text: "Excellence is not just a goal; it's our standard. We are committed to delivering nothing but the best, consistently striving for excellence in everything we do to ensure your satisfaction and success.",
      photo: { src: "/images/why/commitment-to-excellence.jpg", alt: "Presenter being applauded by colleagues in a meeting" },
    },
    {
      title: "Comprehensive Solutions",
      text: "With expertise spanning accounting, taxation, auditing, and research, we offer a one-stop destination for all your business consultancy needs. Streamline your operations and save time and resources by accessing a full suite of services under one roof.",
      photo: { src: "/images/why/comprehensive-solutions.jpg", alt: "Magnifying glass over financial charts and reports" },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  RESOURCE LIBRARY (/resources)                                      */
/* ------------------------------------------------------------------ */

/**
 * Add items to each section as { title, href }. `href` can be a full URL, a PDF in /public
 * (e.g. "/docs/tax-guide-2026.pdf") or a page on another Fidinda site.
 */
export const resourceLibrary = {
  hero: {
    eyebrow: "Resource Library",
    heading: "Publications, articles and local legislation",
    text: "Practical reading for businesses and organisations operating in Cambodia.",
  },
  sections: [
    { id: "publications", title: "Publications", text: "Guides, brochures and reports published by Fidinda Solutions.", items: [] as { title: string; href: string }[] },
    { id: "articles", title: "Articles", text: "Insights on accounting, taxation, compliance, management and more.", items: sortedArticles.map((a) => ({ title: a.title, href: `/articles/${a.slug}` })) as { title: string; href: string }[] },
    { id: "legislations", title: "Local Legislations", text: "Key Cambodian laws, regulations and official notices relevant to businesses and NGOs.", items: [] as { title: string; href: string }[] },
  ],
  emptyText: "New resources are being added soon.",
  helpText: "Looking for something specific? Our team can point you to the right document.",
};
