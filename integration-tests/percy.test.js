/* eslint-env node, mocha */
/* eslint no-console: "off" */

const puppeteer = require('puppeteer')
const { percySnapshot } = require('@percy/puppeteer')

const HOST = (process.env.TEST_HOST || "http://localhost:3000").replace(/\/$/, '')
const DOMAIN = HOST.replace(/https?:\/\//, '')
const IGNORE_HTTPS_ERRORS = process.env.IGNORE_HTTPS_ERRORS === 'true'

let browser
let page

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
  // Required for Percy
  await page.setBypassCSP(true)
  await page.setViewport({ width: 1280, height: 960 })
})

afterEach(async() => {
  await page.close()
  page = undefined
})

after(async() => {
  await browser.close()
  browser = undefined
})

const pagesToSnapshot = {
  'Home': `/home`,
  'About': `/about`,
  'Brand Assets': `/brand-assets`,
  'Case Studies - Shopify': `/case-studies/shopify`,
  'Case Studies': `/case-studies`,
  'Contact Us': `/contact`,
  'Enterprise': `/enterprise`,
  'Features': `/features`,
  // We can't snapshot the plugins page, because it's often changing based on
  // new data from GitHub
  // 'Plugins': `/plugins`,
  'Pricing': `/pricing`,
  'Privacy Policy': `/privacy-policy`,
  'Screencasts': `/screencasts`,
  'Screencasts - Parallel Testing': `/screencasts/parallel-testing`,
  'Security': `/security`,
  'Support': `/support`
}

Object.entries(pagesToSnapshot).forEach(([title, path]) => {
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
  it('snapshots', async() => {
    await page.setCookie({
      name: 'bk_logged_in',
      value: 'true',
      domain: DOMAIN
    })

    await page.goto(`${HOST}/home`)
    await percySnapshot(page, 'Home (Logged In)')

    await page.deleteCookie({
      name: 'bk_logged_in'
    })
  })
})