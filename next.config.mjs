/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/zeeautotryes-website',
  assetPrefix: '/zeeautotryes-website/',
  // Add rewrites to handle static assets
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/zeeautotryes-website/assets/:path*',
      },
    ];
  },
};

export default nextConfig;
