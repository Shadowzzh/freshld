import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    inlineCss: true,
  },
  // 允许的开发环境跨域来源
  allowedDevOrigins: [
    '100.103.79.86',
    'localhost',
    '127.0.0.1',
    '192.168.4.131',
  ],
  // Enable output standalone for Docker
  output: 'standalone',
}

export default nextConfig
