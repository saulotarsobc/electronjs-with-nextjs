import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "../dist/frontend",
  assetPrefix: "./",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
