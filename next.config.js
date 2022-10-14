const withPlugins = require("next-compose-plugins")

const withSvgr = (nextConfig = {}, nextComposePlugins = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      })

      // if (typeof nextConfig.webpack === "function") {
      //   return nextConfig.webpack(config, options)
      // }

      // // config.resolve.fallback = { fs: false };

      return config
    },
  })
}

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withPlugins([withSvgr], {
  reactStrictMode: true,
  swcMinify: false,
  poweredByHeader: false,
  images: {
    domains: ["lh3.googleusercontent.com", "ipfs.io", "res.cloudinary.com"],
  },
})
