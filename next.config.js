const webpack = require('webpack')

/* global __dirname */
const { ANALYZE, NODE_ENV, FAB_BUILD } = process.env

module.exports = {
  target: FAB_BUILD ? 'serverless' : 'server',
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

    config.plugins.push(
      new webpack.DefinePlugin({
        // Make sure only prod traffic gets to the prod site in Matomo
        BK_ANALYTICS_SITE_ID: NODE_ENV === 'production' ? 1 : 2
      })
    )

    config.module.rules.push({
      test: /\.(jpg|png|gif|svg|ico|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash:8].[ext]',
          publicPath: '/_next/static/assets/',
          outputPath: 'static/assets/'
        }
      }]
    })

    return config
  }
}
