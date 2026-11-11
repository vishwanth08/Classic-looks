/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Serves WebP/AVIF automatically for JPG/PNG photos you add to /public/images
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
