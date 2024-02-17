/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [576, 768, 992, 1200, 1408], // Match Mantine breakpoints
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    typedRoutes: true,
    optimizePackageImports: [
      "@mantine/carousel",
      "@mantine/core",
      "@mantine/form",
      "@mantine/hooks",
      "@mantine/modals",
    ],
  },
};

export default nextConfig;
