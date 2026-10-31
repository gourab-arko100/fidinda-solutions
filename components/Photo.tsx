/* eslint-disable @next/next/no-img-element */
import type { Photo as PhotoData } from "@/data/images";

const WIDTHS = [480, 768, 1080, 1440, 1920, 2400];

const isRemote = (src: string) => /^https?:\/\//.test(src);
const cdn = (src: string, w: number, q: number) =>
  `${src}${src.includes("?") ? "&" : "?"}auto=format&fit=crop&w=${w}&q=${q}`;

/**
 * Responsive photo. Unsplash URLs get a srcset (auto WebP/AVIF, resized by their CDN);
 * local /public images are used as-is.
 */
export default function Photo({
  photo,
  className = "",
  sizes = "100vw",
  priority,
  quality = 75,
  maxWidth = 2400,
}: {
  photo: PhotoData;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  maxWidth?: number;
}) {
  const common = {
    alt: photo.alt,
    className,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
    fetchPriority: priority ? ("high" as const) : undefined,
  };
  if (!isRemote(photo.src)) return <img src={photo.src} {...common} />;
  const ws = WIDTHS.filter((w) => w <= maxWidth);
  return (
    <img
      src={cdn(photo.src, Math.min(1440, maxWidth), quality)}
      srcSet={ws.map((w) => `${cdn(photo.src, w, quality)} ${w}w`).join(", ")}
      sizes={sizes}
      {...common}
    />
  );
}
