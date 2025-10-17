/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cripar-nextjs' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/cripar-nextjs' : ''
};

export default nextConfig;
