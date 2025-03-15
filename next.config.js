/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
    ],
  },
};

module.exports = nextConfig;
