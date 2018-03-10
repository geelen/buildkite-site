/* eslint-disable no-console */

// Borrowed from styled-components website:
// https://github.com/styled-components/styled-components-website/blob/6afb14b81a3bdedebb2e7a50d8868dc0b8d32269/server.js

const dev = process.env.NODE_ENV !== 'production'

const url = require('url')
const express = require('express')
const next = require('next')
const shrinkRay = require('shrink-ray-current')

// We use the cookie lib, instead of the normal express cookies middleware,
// because this is what next-cookies uses. One less thing that could mis-match.
const cookie = require('cookie')

const isLoggedIn = require('./lib/isLoggedIn')

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const nextHandler = (req, res) => {
  handle(req, res, url.parse(req.url, true))
}

const PORT = process.env.PORT || 3000

app.prepare()
  .then(() => {
    const server = express()

    // Tell express not to add x-powered-by headers so we don't reveal what we're running
    server.disable('x-powered-by')

    // Tell next.js not to add x-powered-by headers so we don't reveal what we're running
    app.config.poweredByHeader = false

    // Compress our responses to browsers
    server.use(shrinkRay())

    // Middleware to set req.loggedIn if the magic cookie is set
    server.use(function(req, res, next) {
      if (req.headers.cookie) {
        const cookies = cookie.parse(req.headers.cookie)
        req.loggedIn = isLoggedIn(cookies)
      }
      next()
    })

    // Add strict transport and content security headers for parity with rails
    // app and to prevent leakage.
    server.use(function(req, res, next) {
      res.header('X-Frame-Options', 'SAMEORIGIN')
      res.header('X-XSS-Protection', '1; mode=block')
      res.header('X-Content-Type-Options', 'nosniff')
      if (!dev) {
        res.header('Strict-Transport-Security', 'max-age=31536000; includeSubdomains; preload')
      }
      next()
    })

    // Middleware that strips asset hashes from URLs. The hash is added by babel
    // plugin transform-assets in .babelrc
    //
    // For example:
    //   /site/assets/1uT8cdz/images/brand/mark.svg ->
    //   /site/assets/images/brand/mark.svg
    server.use('/site/assets', (req, res, next) => {
      const originalUrl = req.url
      req.url = originalUrl.replace(/\/[^/]+\//, '/')
      next()
    })

    // Hashed assets are immutable, so they can be cached indefinitely by
    // clients.
    //
    // For some reason in dev the `transform-assets` babel plugin doesn't update
    // the hashed URL (perhaps a node loader cache?), so we have to disable the
    // long expires header so the browser refetches when you reload the page.
    const assetsOptions = dev ? {} : {
      lastModified: false,
      immutable: true,
      maxAge: '365d'
    }

    server.use('/site/assets', express.static('./assets', assetsOptions))

    // The homepage should redirect to dashboard for logged in users. Let's not
    // annoy them with marketing content every day.
    server.get('/', (req, res) => {
      res.vary('Cookie')
      if (req.loggedIn) {
        res.redirect(302, '/dashboard')
      }
      nextHandler(req, res)
    })

    // This gives us a URL that we can link to in the footer, for logged in
    // people, so they can actually see the marketing site. They can also share
    // this URL on Twitter and it'll redirect any new visitors to /
    server.get('/home', (req, res) => {
      res.vary('Cookie')
      if (req.loggedIn) {
        nextHandler(req, res)
      } else {
        res.redirect(302, '/')
      }
    })

    server.get('/robots.txt', (req, res) => {
      res.set('Content-Type', 'text/plain')

      if (req.hostname !== 'buildkite.com') {
        res.send("User-agent: *\nDisallow: /")
      } else {
        res.send("")
      }
    })

    // Pass everything through to Next
    server.get('*', nextHandler)

    server.listen(PORT, (err) => {
      if (err) {
        throw err
      }

      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })


process.on('unhandledRejection', (error) => {
  // We simply log any unhandled promise rejections. If we don't, Node
  // complains.
  console.log('Unhandled promise rejection', error)
})
