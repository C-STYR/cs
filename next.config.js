const {
    createVanillaExtractPlugin
  } = require('@vanilla-extract/next-plugin');
  const withVanillaExtract = createVanillaExtractPlugin();
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    pageExtensions: ['page.tsx']
  };
  
  module.exports = withVanillaExtract(nextConfig);