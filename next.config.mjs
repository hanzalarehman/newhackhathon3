/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [

        {
          protocol: 'https',
          hostname: 'next-ecommerce-template-4.vercel.app',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
          pathname: '/**', // Allows any path under the domain
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**', // Allows any path under the domain
        },
      ],
    },
}

export default nextConfig;
// https://template-0-beta.vercel.app/api/product