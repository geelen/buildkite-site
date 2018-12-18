/* eslint-env node, mocha */
/* eslint no-console: "off" */

const fs = require('fs')
const assert = require('assert')
const puppeteer = require('puppeteer')

const HOST = (process.env.TEST_HOST || "http://site:3000").replace(/\/$/, '')
const DOMAIN = HOST.replace(/https?:\/\//, '')
const SCREENSHOTS_PATH = './screenshots'
const IGNORE_HTTPS_ERRORS = process.env.IGNORE_HTTPS_ERRORS === 'true'

let browser
let page
let consoleMessages = []

before(async() => {
  browser = await puppeteer.launch({
    ignoreHTTPSErrors: IGNORE_HTTPS_ERRORS,
    args: [
      // Required for Docker version of Puppeteer
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
    // We can't assert.fail from here, so we store the messages for the afterEach
    consoleMessages.push(`${msg.type()}: ${msg.text()}`)
  })
})

afterEach(async() => {
  if (consoleMessages.length) {
    // This will stop Mocha running any subsequent tests, and finish with an
    // error. Ideally it'd just make the one test fail, and continue to the rest
    // of the suite, but that isn't supported
    // (https://github.com/mochajs/mocha/issues/1635).
    //
    // Perhaps there's another way, but at least now this fails the text suite,
    // rather than just printing an error to the console and never failing the
    // test.
    assert.fail(`Console messages aren't allowed: ${consoleMessages.join()}`)
  }

  await page.close()
  page = undefined
  consoleMessages = []
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
      await page.screenshot({ path: `${SCREENSHOTS_PATH}/home-logged-out.png` })
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
      await page.goto(`${HOST}/home`)
      const dashboardLink = await page.$('a[href="/dashboard"]')
      assert(dashboardLink)
      await page.screenshot({ path: `${SCREENSHOTS_PATH}/home-logged-in.png` })
    })
  })
})

const pagesToCheck = {
  'About': `${HOST}/about`,
  'Brand Assets': `${HOST}/brand-assets`,
  'Case Studies - Shopify': `${HOST}/case-studies/shopify`,
  'Case Studies': `${HOST}/case-studies`,
  'Contact Us': `${HOST}/contact`,
  'Enterprise': `${HOST}/enterprise`,
  'Features': `${HOST}/features`,
  'Home': `${HOST}/home`,
  'Plugins': `${HOST}/plugins`,
  'Pricing': `${HOST}/pricing`,
  'Privacy Policy': `${HOST}/privacy-policy`,
  'Screencasts - Parallel Testing': `${HOST}/screencasts/parallel-testing`,
  'Screencasts': `${HOST}/screencasts`,
  'Security': `${HOST}/security`,
  'Support': `${HOST}/support`,
  'Migrate From (Redirect)': `${HOST}/migrate-from`,
  'Migrate From - Bamboo': `${HOST}/migrate-from/bamboo`,
  'Migrate From - Bamboo Cloud (redirect)': `${HOST}/migrate-from/bamboo-cloud`
}

Object.entries(pagesToCheck).forEach(([title, url]) => {
  describe(title, () => {
    it('responds ok', async() => {
      const response = await page.goto(url)

      const status = response.status()
      assert(status === 200 || status === 304, `Response should be 200 or 304 but was ${status}`)

      await page.screenshot({ path: `${SCREENSHOTS_PATH}/${url.replace(`${HOST}/`, '').replace('/', '-')}.png` })
    })
  })
})
