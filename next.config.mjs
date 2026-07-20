/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Já configurado, essencial para GitHub Pages
  basePath: '/financelab', // Essencial para GitHub Pages em subdiretório
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};

export default nextConfig;