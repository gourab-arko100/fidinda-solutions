import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export const Calculator = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="4.5" y="2.5" width="15" height="19" rx="2.5" />
    <rect x="7.5" y="5.5" width="9" height="4" rx="1" />
    <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" strokeWidth="2.4" />
  </svg>
);
export const Briefcase = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="2.5" y="7" width="19" height="13" rx="2.5" />
    <path d="M8.5 7V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V7M2.5 12.5h19M10.5 12.5v1.5h3v-1.5" />
  </svg>
);
export const Heart = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 1 0-7.1 7.1L12 21l8.4-8.3a5 5 0 0 0 0-7.1Z" />
    <path d="M6.5 12h2.5l1.5-2.5 2 5 1.5-2.5h3.5" />
  </svg>
);
export const Plane = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M17.8 19.2 16 11l3.5-3.5c1.5-1.5 2-3.5 1.5-4-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z" />
  </svg>
);
export const Shield = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 2.5 4 5.5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10v-6l-8-3Z" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);
export const Handshake = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
    <path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1.4 1.4 0 0 1-2-2l2.8-2.8a5 5 0 0 1 6 -.8l.5.3a2 2 0 0 0 1.4.2L21 6" />
    <path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1.4 1.4 0 0 0 2-2M3 4h8" />
  </svg>
);
export const Shuffle = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M3 7h3.5c2.5 0 3.7 1.3 5 4.5s2.5 5.5 5 5.5H21M18 14l3 3-3 3M3 17h3.5c1.4 0 2.4-.4 3.2-1.2M21 7h-4.5c-1.4 0-2.4.4-3.2 1.2M18 4l3 3-3 3" />
  </svg>
);
export const Target = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>
);
export const Building = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20" />
    <path d="M8 7h4M8 11h4M8 15h4" />
  </svg>
);
export const Globe = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19M12 2.5c2.5 2.7 3.8 6 3.8 9.5S14.5 18.8 12 21.5c-2.5-2.7-3.8-6-3.8-9.5S9.5 5.2 12 2.5Z" />
  </svg>
);
export const User = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);
export const Users = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14a6.5 6.5 0 0 1 3 6" />
  </svg>
);
export const Phone = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.1 9.4a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);
export const Mail = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 6.5 9 6.5 9-6.5" />
  </svg>
);
export const MapPin = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
export const ArrowRight = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowLeft = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);
export const ChevronDown = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const Menu = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);
export const Close = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
export const Check = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
export const Award = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="8.5" r="6" />
    <path d="m8.2 13.2-1.7 8.3 5.5-3 5.5 3-1.7-8.3" />
  </svg>
);
export const Info = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 16v-4.5M12 8h.01" strokeWidth="2.2" />
  </svg>
);
export const MessageCircle = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
  </svg>
);
export const Star = ({ size = 20, filled = true, ...p }: P & { filled?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden focusable={false} {...p}>
    <path
      d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1 6.3L12 17.2l-5.6 2.9 1-6.3L3 9.4l6.3-.9L12 2.8Z"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

/* Brand / social icons (filled) */
const fill = (size = 20) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, focusable: false });

export const Facebook = ({ size, ...p }: P) => (
  <svg {...fill(size)} {...p}>
    <path d="M13.5 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3v3.2h2.8v8h3.4Z" />
  </svg>
);
export const Instagram = ({ size, ...p }: P) => (
  <svg {...fill(size)} {...p}>
    <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21.5 8.2c-.1-1.5-.4-2.8-1.5-3.9s-2.4-1.4-3.9-1.5c-1.5-.1-6.2-.1-7.7 0-1.5.1-2.8.4-3.9 1.5S3 6.7 2.9 8.2c-.1 1.5-.1 6.2 0 7.7.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 6.2.1 7.7 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-6.2 0-7.7Zm-2 9.4a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3A3 3 0 0 1 7.2 5c1.2-.5 4-.4 5.3-.4s4.1-.1 5.3.4a3 3 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.3Z" />
  </svg>
);
export const TikTok = ({ size, ...p }: P) => (
  <svg {...fill(size)} {...p}>
    <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.4a2.9 2.9 0 1 1-2-2.8V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a8.2 8.2 0 0 0 4.8 1.5V6.8l-1-.1Z" />
  </svg>
);
export const WhatsApp = ({ size, ...p }: P) => (
  <svg {...fill(size)} {...p}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4l-.5-.4ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.2A11.8 11.8 0 0 0 1.9 17.8L.2 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6Z" />
  </svg>
);
export const Telegram = ({ size, ...p }: P) => (
  <svg {...fill(size)} {...p}>
    <path d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.2-8.3c.4-.4-.1-.6-.6-.2L6.2 13 1.3 11.5c-1.1-.3-1.1-1.1.2-1.6l19-7.3c.9-.3 1.7.2 1.4 1.7Z" />
  </svg>
);

export const socialIcon = { facebook: Facebook, instagram: Instagram, tiktok: TikTok } as const;
export const divisionIcon = { calculator: Calculator, briefcase: Briefcase, heart: Heart, plane: Plane } as const;
export const beliefIcon = { faith: Shield, friendship: Handshake, flexibility: Shuffle, focus: Target } as const;
export const audienceIcon = { business: Building, ngo: Globe, individual: User, family: Users } as const;

export const Sun = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
  </svg>
);
export const Moon = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7Z" />
  </svg>
);
export const Clock = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const Eye = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);
