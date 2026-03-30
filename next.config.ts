import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    }
    return config
  },
  // Redirect non-www to www for canonical consistency
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sunshinestateinsured.com' }],
        destination: 'https://www.sunshinestateinsured.com/:path*',
        permanent: true,
      },
    ]
  },
  // Compress responses
  compress: true,
  // Power header removal for security
  poweredByHeader: false,
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.manus.computer',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
