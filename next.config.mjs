/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for maximum performance
  output: 'export',

  // Optimize images
  images: {
    unoptimized: true, // Required for static export
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable React strict mode for better performance
  reactStrictMode: true,

  // Optimize page loading
  experimental: {
    optimizeCss: true,
  },

  // Disable unnecessary features for static sites
  trailingSlash: true,
};

export default nextConfig;
