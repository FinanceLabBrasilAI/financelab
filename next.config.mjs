/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProduction ? '/financelab' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;