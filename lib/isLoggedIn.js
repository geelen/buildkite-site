// We use the cookie lib, instead of the normal express cookies middleware,
// because this is what next-cookies uses. One less thing that could mis-match.
const cookie = require('cookie')

// This cookie is set by the backend if the user is logged in. This isn't
// always going to be 100% accurate, but we let the backend handle it. Worse
// case is that we redirect someone to /dashboard by accident, and then that
// directs them to /login
module.exports = function isLoggedIn(req) {
  if (req) {
    // server
    if (req.headers.cookie) {
      return cookie.parse(req.headers.cookie).bk_logged_in === "true"
    }
  } else {
    // browser
    return document.cookie.indexOf("bk_logged_in=true") !== -1
  }
}