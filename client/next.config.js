/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.worker\.ts$/,
  //     loader: "worker-loader",
  //     options: {
  //       name: "static/[hash].worker.ts",
  //       publicPath: "/_next/",
  //     },
  //   });

  //   // Overcome Webpack referencing `window` in chunks
  //   config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;

  //   return config;
  // },
};

module.exports = withPWA(nextConfig);
