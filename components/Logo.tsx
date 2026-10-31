/* eslint-disable @next/next/no-img-element */
import { site } from "@/data/site";

/**
 * Official Fidinda Solutions logo.
 * variant "auto"  → navy logo in light theme, white logo in dark theme
 * variant "light" → always the white version (for navy backgrounds)
 * variant "dark"  → always the navy version (for white backgrounds)
 */
export default function Logo({
  variant = "auto",
  className = "h-10 w-auto",
}: {
  variant?: "auto" | "light" | "dark";
  className?: string;
}) {
  const common = { alt: "Fidinda Solutions", width: 1005, height: 206, decoding: "async" as const };
  if (variant === "light") return <img src={site.logoLight} className={className} {...common} />;
  if (variant === "dark") return <img src={site.logo} className={className} {...common} />;
  return (
    <>
      <img src={site.logo} className={`${className} dark:hidden`} {...common} />
      <img src={site.logoLight} className={`${className} hidden dark:block`} {...common} alt="" aria-hidden />
    </>
  );
}

/** The square "F" mark from the logo, used decoratively. */
export function LogoMark({ light, className = "" }: { light?: boolean; className?: string }) {
  return (
    <img
      src={light ? site.logoMarkLight : site.logoMark}
      alt=""
      aria-hidden
      width={205}
      height={206}
      className={className}
    />
  );
}
