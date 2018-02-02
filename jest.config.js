// Fixes for:
// https://github.com/airbnb/enzyme/issues/928
// https://github.com/facebook/jest/issues/4545
module.exports = {
  setupFiles: ["./.jest/shim.js", "./.jest/setup.js"]
}