// These are used to export pages using Next’s built in `yarn export`. The
// exports are then picked up by percy.io for screenshots
const urlPathsToExport = [
  '/',
  '/features',
  '/pricing',
  '/screencasts',
  '/support'
];

module.exports = {
  exportPathMap: function() {
    return urlPathsToExport.reduce(function(acc, path) {
      acc[path] = { page: path }
      return acc;
    }, {});
  },

  webpack: function (config, { dev }) {
    // For the development version, we'll use React.
    // Because, it supports react hot loading and so on.
    if (dev) {
      return config
    }

    config.resolve.alias = {
      'react': 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat'
    }

    return config
  }
}