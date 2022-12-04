const withAntdLess = require("next-plugin-antd-less");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  
};

module.exports = () => {
  const plugins = [withAntdLess];
  return plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });
};
