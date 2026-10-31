"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Plain <img> that swaps to a fallback if the file is missing
 * (e.g. before you drop your real logos into /public).
 */
export default function FallbackImage({
  src,
  alt,
  className,
  width,
  height,
  fallback,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallback: ReactNode;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // The error can fire before React hydrates; check once mounted.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return <>{fallback}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
