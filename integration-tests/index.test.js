/* eslint-env node, mocha */
/* eslint no-console: "off" */

const assert = require('assert')
const puppeteer = require('puppeteer')

// Define global variables
let browser = null
let page = null
const host = process.env.TEST_HOST || "http://site:3000"

before(async() => {
  browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // This will write shared memory files into /tmp instead of /dev/shm,
      // because Docker’s default for /dev/shm is 64MB
      '--disable-dev-shm-usage'
    ]
  })

  const browserVersion = await browser.version()
  console.log(`Started ${browserVersion}`)

  page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 960 })

  page.on('pageerror', (err) => {
    assert.fail(err)
  })

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      assert.fail(`console.${msg.type()} detected: ${msg.text()}`)
    }
  })
})

after(async() => {
  await page.close()
  await browser.close()
})

describe('Home', () => {
  let response

  before(async() => {
    response = await page.goto(`${host}/`)
  })

  it('renders the tagline', async() => {
    const tagline = await page.$eval('h2', (el) => el.textContent)
    assert.equal(tagline, 'Lightning fast testing and delivery for all your software projects')
  })

  it('has a link to about', async() => {
    const aboutLink = await page.$('a[href="/about"]')
    assert(aboutLink)
  })

  it('has the security headers', async() => {
    const headers = response.headers()
    assert.equal(headers['strict-transport-security'], 'max-age=31536000; includeSubdomains; preload')
    assert.equal(headers['x-frame-options'], 'SAMEORIGIN')
    assert.equal(headers['x-xss-protection'], '1; mode=block')
  })
})

describe('Logged in cookie behaviours', () => {
  describe('without the logged in cookie', () => {
    it('has a link to signup', async() => {
      await page.goto(`${host}/`)
      const signupLink = await page.$('a[href="/signup"]')
      assert(signupLink)
    })
  })

  describe('with the logged in cookie', () => {
    before(async() => {
      await page.setCookie({
        name: 'bk_logged_in',
        value: 'true',
        path: '/'
      })
    })

    after(async() => {
      await page.deleteCookie({
        name: 'bk_logged_in'
      })
    })

    it('has a link to dashboard', async() => {
      await page.goto(`${host}/`)
      const dashboardLink = await page.$('a[href="/dashboard"]')
      assert(dashboardLink)
    })
  })
})