/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/",
      destination: "/home",
    },
  ],
};

module.exports = nextConfig;
