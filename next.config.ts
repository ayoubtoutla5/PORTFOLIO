import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PORTFOLIO",
  assetPrefix: "/PORTFOLIO",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/PORTFOLIO",
  },
};

export default nextConfig;
