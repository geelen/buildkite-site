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
  exportPathMap: function() {
    return urlPathsToExport.reduce(function(acc, path) {
      acc[path] = { page: path }
      return acc
    }, {})
  }
}