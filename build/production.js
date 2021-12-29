const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(configDirs) {
  let prodConfig = Object.assign({}, require('./common')(configDirs));

  prodConfig.optimization.minimizer.push(new TerserPlugin());
  prodConfig.performance.hints = false;
  prodConfig.performance.maxEntrypointSize = 512000;
  prodConfig.performance.maxAssetSize = 512000;

  console.log('\x1b[36m%s\x1b[0m', 'Building for production ...');

  return prodConfig;
};
