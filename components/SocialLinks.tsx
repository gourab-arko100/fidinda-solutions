import { site } from "@/data/site";
import { socialIcon } from "./Icons";

/** Outlined round social icons (same style as the division sites' footers). */
export default function SocialLinks({ variant = "onDark" }: { variant?: "onDark" | "onPage" }) {
  const cls =
    variant === "onDark"
      ? "border-white/30 text-white hover:border-brand-red hover:bg-brand-red"
      : "border-line/20 text-fg hover:border-brand-red hover:bg-brand-red hover:text-white";
  return (
    <ul className="flex gap-3" aria-label="Fidinda Solutions on social media">
      {site.socials.map((s) => {
        const Icon = socialIcon[s.icon];
        return (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.name} (opens in a new tab)`}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${cls}`}
            >
              <Icon size={17} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
