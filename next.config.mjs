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
    '*.fnos.net',
    '192.168.31.103',
  ],
}

export default nextConfig
