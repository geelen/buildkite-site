module.exports = function isLoggedIn(cookies) {
  // This cookie is set by the backend if the user is logged in. This isn't
  // always going to be 100% accurate, but we let the backend handle it. Worse
  // case is that we redirect someone to /dashboard by accident, and then that
  // directs them to /login
  return cookies.bk_logged_in === "true"
}