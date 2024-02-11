/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    optimizePackageImports: [
      "@mantine/carousel",
      "@mantine/core",
      "@mantine/form",
      "@mantine/hooks",
      "@mantine/modals",
      "@mantine/spotlight",
    ],
  },
};

export default nextConfig;
