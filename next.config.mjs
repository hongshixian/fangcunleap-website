/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    '127.0.0.1',
    'localhost',
    'db1da7e21a61-0.nas2808.fnos.net',
    '192.168.31.103',
  ],
}

export default nextConfig
