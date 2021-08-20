const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

const nextConfig = {
  images: {
    domains: ['img.youtube.com', 'images.ctfassets.net'],
  },
};

module.exports = withPlugins([withSvgr], nextConfig);
