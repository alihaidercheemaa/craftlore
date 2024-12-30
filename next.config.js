
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
          { hostname: "khcrf.org" }
        ],
      },
};

export default config;
