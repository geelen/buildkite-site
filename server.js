/* eslint-disable no-console */

// Borrowed from styled-components website:
// https://github.com/styled-components/styled-components-website/blob/6afb14b81a3bdedebb2e7a50d8868dc0b8d32269/server.js

const dev = process.env.NODE_ENV !== 'production'

const url = require('url')
const express = require('express')
const next = require('next')
const compression = require('compression')

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

    // Compress our responses to browsers
    server.use(compression())

    // Add strict transport and content security headers for parity with rails
    // app and to prevent leakage.
    server.use(function(req, res, next) {
      res.header('X-Frame-Options', 'SAMEORIGIN')
      res.header('X-XSS-Protection', '1; mode=block')
      res.header('X-Content-Type-Options', 'nosniff')
      res.header('Referrer-Policy', 'origin-when-cross-origin')
      if (!dev) {
        res.header('Content-Security-Policy', "default-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.google-analytics.com; img-src 'self' 'unsafe-inline' data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com; media-src 'self' https://d3lj8s78qytm30.cloudfront.net")
        res.header('Strict-Transport-Security', 'max-age=31536000; includeSubdomains; preload')
      }
      next()
    })

    // These URls have a content hash thanks to the webpack file-loader, so can
    // be long-expired.
    server.use('/_next/static/assets', function(req, res, next) {
      res.header('Cache-Control', 'public, max-age=31536000, immutable')
      res.header('Last-Modified', 'Mon, 01 Jan 2000 00:00:00 GMT')
      next()
    })

    // The homepage should redirect to dashboard for logged in users. Let's not
    // annoy them with marketing content every day.
    server.get('/', (req, res) => {
      res.vary('Cookie')
      if (isLoggedIn(req)) {
        res.redirect(302, '/dashboard')
      }
      nextHandler(req, res)
    })

    // This gives us a URL that we can link to in the footer, for logged in
    // people, so they can actually see the marketing site. They can also share
    // this URL on Twitter and it'll redirect any new visitors to /
    server.get('/home', (req, res) => {
      res.vary('Cookie')
      if (isLoggedIn(req)) {
        nextHandler(req, res)
      } else {
        res.redirect(302, '/')
      }
    })

    server.get('/migrate-from', (req, res) => {
      res.redirect(302, '/migrate-from/bamboo')
    })

    server.get('/migrate-from/bamboo-cloud', (req, res) => {
      res.redirect(301, '/migrate-from/bamboo')
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
