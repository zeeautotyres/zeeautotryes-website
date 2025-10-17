/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/cripar-nextjs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cripar-nextjs/' : '',
};

export default nextConfig;
