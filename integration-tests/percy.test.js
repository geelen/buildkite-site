/* eslint-env node, mocha */
/* eslint no-console: "off" */

// These percy tests need to be in their own file

const assert = require('assert')
const puppeteer = require('puppeteer')
const { percySnapshot } = require('@percy/puppeteer')

const pagesToCheck = require('./pages')

const HOST = (process.env.TEST_HOST || "http://localhost:3000").replace(/\/$/, '')
const DOMAIN = HOST.replace(/https?:\/\//, '')

let browser
let page
let consoleMessages = []

before(async() => {
  browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
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
  await page.setBypassCSP(true)
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

Object.entries(pagesToCheck).forEach(([title, path]) => {
  describe(title, () => {
    it('snapshots', async() => {
      const response = await page.goto(`${HOST}${path}`)

      const status = response.status()

      if (status === 200 || status === 304) {
        await percySnapshot(page, title)
      }
    })
  })
})

describe('Home (Logged In)', () => {
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

  it('snapshots', async() => {
    await page.goto(`${HOST}/home`)
    await percySnapshot(page, 'Home (Logged In)')
  })
})