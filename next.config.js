import { withFaust } from '@faustwp/core';
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
  trailingSlash: true,
  // Uncoment to add domain whitelist
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-eabih.nitrocdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ddfcdn.realtor.ca',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.webfx.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'vancouverseo.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'savemaxbc.wpengine.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.rankingbyseo.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '**',
      },
    ],
  },
  async redirects() {
        return [
        ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
      {
            source: "/(.*)",
            headers: [
              {
                key: "Strict-Transport-Security",
                value: "max-age=31536000; includeSubDomains; preload",
              },
            ],
          },
    ];
    
  },
};

export default withFaust(nextConfig);
