/* global __dirname */
const { ANALYZE } = process.env

module.exports = {
  // Don't reveal what we're running
  poweredByHeader: false,

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