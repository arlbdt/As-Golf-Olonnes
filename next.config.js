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
    domains: [
      // Current domain for your assets (legacy system)
      'media.graphassets.com',

      // Hygraph CDN domains
      'media.hygraph.com',

      // New asset domains for EU Central 1 region
      'eu-central-1-shared-euc1-01.graphassets.com',
      'eu-central-1-shared-euc1-02.graphassets.com',
      'eu-central-1.graphassets.com',

      // Additional possible patterns based on your API endpoint
      'api-eu-central-1.hygraph.com',
      'api-eu-central-1.graphassets.com'
    ],
  },
};

module.exports = nextConfig;
