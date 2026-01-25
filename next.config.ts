import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // next/image default sizes
    deviceSizes: [576, 768, 992, 1200, 1400], // mantine default breakpoints
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
