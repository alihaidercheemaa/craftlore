
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
          { hostname: "khcrf.org" }
        ],
      },
      async headers() {
        return [
          {
            // Match all routes under /api/
            source: '/api/:path*',
            headers: [
              { key: 'Access-Control-Allow-Origin', value: '*' },
              { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
              { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
            ],
          },
        ];
      },
};

export default config;
