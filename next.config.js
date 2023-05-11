/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack(config) {
      config.experiments = {
         ...config.experiments,
         topLevelAwait: true,
      };
      return config;
   },

   experimental: {
      serverComponentsExternalPackages: ['mongoose'],
   },
   images: {
      domains: ['lh3.googleusercontent.com'],
   },
};

module.exports = nextConfig;
