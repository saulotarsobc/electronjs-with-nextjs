/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "../front",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
