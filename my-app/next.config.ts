/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      root: __dirname, // THIS ENSURES Turbopack uses my-app as root
    },
  },
};

export default nextConfig;
