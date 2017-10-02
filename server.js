// Borrowed from styled-components website:
// https://github.com/styled-components/styled-components-website/blob/6afb14b81a3bdedebb2e7a50d8868dc0b8d32269/server.js

const dev = process.env.NODE_ENV !== 'production'

const path = require('path')
const { parse } = require('url')
const express = require('express')
const next = require('next')

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare()
  .then(() => {
    const server = express()

    server.disable('x-powered-by')

    // Hashed assets need their hash stripped from the URL. The hash is added by
    // babel plugin transform-assets in .babelrc
    //
    // For example:
    //   /static-cached/1uT8cdz/images/brand/mark.svg ->
    //   /static-cached/images/brand/mark.svg
    server.use('/static-cached', function(req, res, next){
      const originalUrl = req.url;
      req.url = req.url.replace(/\/[^/]+\//, '/');
      next();
    });

    // Hashed assets are immutable, so they can be cached indefinitely.
    //
    // For some reason in dev the `transform-assets` babel plugin doesn't update
    // the hashed URL (perhaps a node loader cache?), so we have to disable the
    // long expires header so the browser refetches when you reload the page.
    const staticCachedOptions = dev ? {} : {
      lastModified: false,
      immutable: true,
      maxAge: '365d'
    };

    server.use('/static-cached', express.static('./static', staticCachedOptions));

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })

    server.listen(PORT, err => {
      if (err) {
        throw err
      }

      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })