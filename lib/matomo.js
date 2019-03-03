import isLoggedIn from './isLoggedIn'

// Matomo related tracking functions.
//
// See Matomo’s SPA tracking guide for more info:
// https://developer.matomo.org/guides/spa-tracking

// It's handy to differentiate page titles between our different apps, because
// we track all our apps as one "site" in Matomo. So we prefix it with "Site /
// ", "App / ", "Docs /", etc
const documentTitle = (title) => (
  `Site / ${title}`
)

// The URL events from next/router may just be paths, or may be full URLs. If
// they're just paths, then we add them
const normalizeUrl = (url) => {
  if (url.indexOf('://') === -1) {
    return `${window.location.origin}/${url.replace(/^\//, '')}`
  }
  return url
}

const lastPageLoadDuration = () => (
  window._paqLoadDuration || 0
)

// Our CSP doesn't allow inline script tags, so we don't use the standard
// tracker snippet. Instead, we initialize Matomo and insert the script tag
// dynamically on every React componentDidMount on our Page class, and make it a
// noop if it's been done before.
//
// Doing it on componentDidMount also has the advantage of delaying the extra
// DNS lookup and requests, which helps prevent slowing down actual content from
// being loaded.
const initMatomo = () => {
  if (window._paq) { return }

  // We must configure Matomo before adding the script tag
  window._paq = window._paq || []
  window._paq.push(['setSiteId', 1])
  window._paq.push(['setTrackerUrl', 'https://analytics.buildkite.com/tracker'])
  window._paq.push(['enableHeartBeatTimer'])

  // Disabled for now
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://analytics.buildkite.com/tracker.js'
  document.head.appendChild(script)
}

export const trackPageLoadStart = () => {
  window._paqLoadStarted = new Date().getTime()
}

export const trackPageLoadEnd = () => {
  window._paqLoadDuration = new Date().getTime() - window._paqLoadStarted
}

export const trackReferrer = (url) => {
  initMatomo()

  // If we set this here, future calls to 'trackPageView' will pick up this
  // value
  window._paq.push(['setReferrerUrl', normalizeUrl(url)])
}

export const trackPageView = ({ url, title }) => {
  initMatomo()

  window._paq.push(['setCustomUrl', normalizeUrl(url)])
  window._paq.push(['setDocumentTitle', documentTitle(title)])
  window._paq.push(['deleteCustomVariables', 'page'])
  window._paq.push(['setGenerationTimeMs', lastPageLoadDuration()])
  // https://developer.matomo.org/guides/tracking-javascript-guide#custom-variables-for-visits
  window._paq.push(['setCustomVariable', 1, "Logged In", isLoggedIn(), "visit"])
  window._paq.push(['setCustomVariable', 1, "Application", "Site", "page"])
  window._paq.push(['trackPageView'])

  window._paq.push(['enableLinkTracking'])
  window._paq.push(['MediaAnalytics::scanForMedia'])
}
