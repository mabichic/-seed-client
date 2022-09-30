/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APPLE_ID: "",
    APPLE_SECRET: "",
    GITHUB_SECRET :"test", 
    clientId : "test",
  },
};

module.exports = nextConfig;
