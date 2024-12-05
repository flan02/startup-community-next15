import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  dangerouslyAllowSVG: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
