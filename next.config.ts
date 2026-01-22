import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: () => [
    {
      source: "/",
      destination: "https://ahmedghait.com",
      permanent: true,
    },
  ],
};

export default nextConfig;
