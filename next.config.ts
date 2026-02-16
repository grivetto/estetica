import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Note: We use the repository name 'estetica' as the basePath
  basePath: '/estetica',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
