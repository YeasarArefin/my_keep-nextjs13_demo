/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack(config) {
      config.experiments = {
         ...config.experiments,
         topLevelAwait: true,
      };
      return config;
   },

   /* async headers() {
      return [
         {
            // matching all API routes
            source: '/api/:path*',
            destination: 'https://mykeeep.vercel.app/:path*',
            headers: [
               { key: 'Access-Control-Allow-Credentials', value: 'true' },
               { key: 'Access-Control-Allow-Origin', value: '*' },
               { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
               {
                  key: 'Access-Control-Allow-Headers',
                  value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
               },
            ],
         },
      ];
   }, */

   experimental: {
      serverComponentsExternalPackages: ['mongoose'],
   },
   images: {
      domains: ['lh3.googleusercontent.com'],
   },
};

module.exports = nextConfig;
