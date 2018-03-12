/* global __dirname */
const { ANALYZE } = process.env

module.exports = {
  webpack: function(config) {
    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: require('path').resolve(__dirname, 'bundle-analysis/bundle-analyzer-report.html'),
        openAnalyzer: false
      }))
    }

    return config
  }
}