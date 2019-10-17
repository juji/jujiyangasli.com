const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.resolve(__dirname), 'node_modules']
      }
    }
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
}
