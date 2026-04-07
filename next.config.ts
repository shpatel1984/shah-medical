import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sliceofculture.com",
      },
    ],
  },
};

export default nextConfig;
