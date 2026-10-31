/* eslint-disable @next/next/no-img-element */
import { divisionIcon } from "./Icons";
import type { Division } from "@/data/divisions";
import { publicFileExists } from "@/lib/assets";

const sizes = {
  sm: { box: "h-9 w-9 rounded-xl", icon: 18, img: "h-9 w-9" },
  md: { box: "h-14 w-14 rounded-2xl", icon: 26, img: "h-14 w-auto max-w-[9rem]" },
  lg: { box: "h-20 w-20 rounded-3xl", icon: 38, img: "h-20 w-auto max-w-[14rem]" },
};

/**
 * Division logo from /public/logos, shown on a white tile so it stays visible in dark mode.
 * Until the file is added, a brand-coloured icon tile is shown instead (server component).
 */
export default function DivisionLogo({ division, size = "md" }: { division: Division; size?: keyof typeof sizes }) {
  const s = sizes[size];
  if (publicFileExists(division.logo)) {
    return (
      <img
        src={division.logo}
        alt={`${division.name} logo`}
        className={`${s.img} rounded-xl bg-white object-contain p-1.5`}
        loading="lazy"
        decoding="async"
      />
    );
  }
  const Icon = divisionIcon[division.icon];
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-navy text-white ring-1 ring-white/10 dark:bg-white/10 ${s.box}`}
      aria-hidden
    >
      <Icon size={s.icon} />
      <span className="absolute bottom-0 left-0 h-[3px] w-1/2 bg-brand-red" />
    </span>
  );
}
