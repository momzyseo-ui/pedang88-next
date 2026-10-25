import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography for v1 (gallery & menu). Swap for self-hosted
    // assets once real photos are available.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
