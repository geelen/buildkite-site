const request = require('request')

// Percy starts an agent on localhost:5338 and the DOM and what-not is posted to
// it via XHR Unfortunately, because our site has strict CSP headers, the XHR
// call is blocked. To workaround that, we use Puppeteer’s request interception
// gear to capture the requests, fetch the response ourselves, and rewrite it on
// the way through.
module.exports = function percyCSPRequestInterceptor(interceptedRequest) {
  if (interceptedRequest.resourceType() === 'document' && interceptedRequest.method() === 'GET') {
    console.log(`Intercepted ${interceptedRequest.url()}`)
    request({
      uri: interceptedRequest.url(),
      method: interceptedRequest.method(),
      headers: interceptedRequest.headers(),
      body: interceptedRequest.postData()
    }, (error, response, body) => {
      console.log(`Received ${response.statusCode} response`)
      if (error) {
        interceptedRequest.abort()
      } else {
        const cspHeader = response.headers['content-security-policy']
        if (cspHeader) {
          // Add the percy agent to the list of allowed connect sources
          response.headers['content-security-policy'] = cspHeader.replace('connect-src ', 'connect-src http://localhost:5338 ')
          console.log('Rewrote CSP header')
        }
        interceptedRequest.respond({
          status: response.statusCode,
          contentType: response.headers['content-type'],
          headers: response.headers,
          body: body
        })
      }
    })
  } else {
    interceptedRequest.continue()
  }
}