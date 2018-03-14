/* eslint-env node, mocha */
/* eslint no-console: "off" */

const fs = require('fs')
const assert = require('assert')
const puppeteer = require('puppeteer')

const HOST = process.env.TEST_HOST || "http://site:3000"
const DOMAIN = HOST.replace(/https?:\/\//, '')
const SCREENSHOTS_PATH = 'integration-tests/screenshots'

let browser = null
let page = null

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
})

beforeEach(async() => {
  page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 960 })

  page.on('console', (msg) => {
    assert.fail(`console.${msg.type()} not allowed in production: ${msg.text()}`)
  })
})

afterEach(async() => {
  await page.close()
  page = undefined
})

after(async() => {
  await browser.close()
  browser = undefined
})

describe('Home', () => {
  let response

  beforeEach(async() => {
    response = await page.goto(`${HOST}/`)
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

  it('renders the same page with and without Javascript', async() => {
    await page.goto(`${HOST}/`)
    await page.screenshot({ path: `${SCREENSHOTS_PATH}/home-js-enabled.png` })
    const enabledImageStat = fs.statSync(`${SCREENSHOTS_PATH}/home-js-enabled.png`)

    await page.setJavaScriptEnabled(false)
    await page.goto(`${HOST}/`)
    await page.screenshot({ path: `${SCREENSHOTS_PATH}/home-js-disabled.png` })
    const disabledImageStat = fs.statSync(`${SCREENSHOTS_PATH}/home-js-disabled.png`)

    assert.equal(disabledImageStat.size, enabledImageStat.size)
  })
})

describe('Logged in cookie behaviours', () => {
  describe('without the logged in cookie', () => {
    it('has a link to signup', async() => {
      await page.goto(`${HOST}/`)
      const signupLink = await page.$('a[href="/signup"]')
      assert(signupLink)
    })
  })

  describe('with the logged in cookie', () => {
    beforeEach(async() => {
      await page.setCookie({
        name: 'bk_logged_in',
        value: 'true',
        domain: DOMAIN
      })
    })

    afterEach(async() => {
      await page.deleteCookie({
        name: 'bk_logged_in'
      })
    })

    it('has a link to dashboard', async() => {
      await page.goto(`${HOST}/`)
      const dashboardLink = await page.$('a[href="/dashboard"]')
      assert(dashboardLink)
    })
  })
})