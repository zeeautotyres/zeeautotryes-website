/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/zeeautotryes-website',
  assetPrefix: '/zeeautotryes-website/',
};

export default nextConfig;
