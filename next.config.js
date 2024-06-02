// /** @type {import('next').NextConfig} */
// const nextConfig = {
//
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'masterbbqerbil.net',
//                 pathname: '/**',
//             },
//         ],
//     },
// };
//
// export default nextConfig;

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'ar', 'kr'],
    defaultLocale: 'ar',
  },

  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "masterbbqerbil.net",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
