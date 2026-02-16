import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/estetica',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
