import type { NextConfig } from "next";
import { DIVISION_URLS } from "./data/divisions";

/** Old Hostinger (fidindasolutions.com) URLs → new homes. Division URLs come from /data/divisions.ts. */
const toFinancial = ["/accounting", "/taxation", "/auditing", "/our-packages"];
const toManagement = [
  "/registration-and-licensing",
  "/contract-management-and-project-management",
  "/software-applications-and-cloud-services",
  "/research-analysis-and-advisory",
  "/training-and-capacity-building",
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    const external = (paths: string[], destination: string) =>
      paths.flatMap((source) => [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]);

    return [
      ...external(toFinancial, DIVISION_URLS.financial),
      ...external(toManagement, DIVISION_URLS.management),
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/mission-vision-and-beliefs", destination: "/mission-vision", permanent: true },
      { source: "/our-services", destination: "/divisions", permanent: true },
      { source: "/request-for-quotation", destination: "/contact", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
