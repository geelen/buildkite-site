/* global __dirname */
const { ANALYZE } = process.env

// These are used to export pages using Next’s built in `yarn export`. The
// exports are then picked up by percy.io for screenshots
const urlPathsToExport = [
  '/',
  '/features',
  '/pricing',
  '/screencasts',
  '/support'
]

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
  },
  exportPathMap: function() {
    return urlPathsToExport.reduce(function(acc, path) {
      acc[path] = { page: path }
      return acc
    }, {})
  }
}