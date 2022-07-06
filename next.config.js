/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")

const nextConfig = {
  reactStrictMode: false,
  pwa: {
    dest: "public",
  },
  images: {
    domains: ["thispersondoesnotexist.com", "api-manos.bdph.me"],
  },
}

module.exports = withPWA(nextConfig)
