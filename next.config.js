/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'trailblazeprep.com',
          },
        ],
        destination: 'https://www.trailblazeprep.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
