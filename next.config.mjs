import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
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