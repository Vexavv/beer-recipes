/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
    images: {
        domains: ['images.punkapi.com'],
    },
}

module.exports = nextConfig
