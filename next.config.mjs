/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for GitHub Pages
  // GitHub Pages will serve from root
};

export default nextConfig;
