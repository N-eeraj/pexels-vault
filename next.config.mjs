/** @type {import('next').NextConfig} */

const nextConfig = {}

const optimizeImages = process.env.OPTIMIZE_IMAGE?.toUpperCase() === "TRUE"
if (optimizeImages) {
  nextConfig.images = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/videos/**",
      },
    ],
  }
} else {
  nextConfig.images = {
    unoptimized: true,
  }
}

export default nextConfig
