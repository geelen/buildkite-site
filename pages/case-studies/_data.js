const shopifyLogo = require('../../assets/images/case-studies/shopify/logo.png');
const shopifyPhotoPeople = require('../../assets/images/case-studies/shopify/people.jpg');
const shopifyPhotoOffice = require('../../assets/images/case-studies/shopify/office.jpg');
const shopifyTestimonialPhoto = require('../../assets/images/case-studies/shopify/testimonial-headshot.jpg');

export const shopify = {
  pathname: '/case-studies/shopify',
  team: 'Shopify',
  link: { label: 'shopify.com', url: 'https://shopify.com/' },
  headTitle: 'Shopify CI Buildkite Case Study',
  logoImage: shopifyLogo,
  photoOne: { image: shopifyPhotoPeople, alt: "TODO" },
  photoTwo: { image: shopifyPhotoOffice, alt: "TODO" },
  indexBackgroundImage: shopifyPhotoOffice,
  industry: 'Ecommerce',
  teamSize: '900 engineers',
  testimonial: {
    name: 'Jean-Michel Lemieux',
    title: 'SVP of Engineering, Shopify',
    testimonial: 'Buildkite helped us bring down our build times on shopify.com from 25 minutes to 5 minutes and supported us growing to over 900 engineers',
    headshotImage: shopifyTestimonialPhoto,
  },
  results: [
    { number: 75, unit: '%', label: 'reduction in build wait times' },
    { number: 4, unit: '⨉', label: 'increase in CI speed for the same budget' }
  ],
  summaryWords: (
    <React.Fragment>
      Shopify is a global ecommerce platform serving hundreds of millions of
      shoppers. With Buildkite they were able to reduce build times by massively
      increasing the concurrency of their build infrastructure along-side introducing
      Docker and tripling team size.
    </React.Fragment>
  ),
  words: (
    <React.Fragment>
      <p>Shopify is an ecommerce platform that allows you to set up an online store to
      sell your goods. They power more than 500,000 individual shops, and served over 100
      million shoppers in 2016. They are based in Ottawa, Canada, but have a global
      presence with over 900 engineers.</p>
      <p>Shopify had outgrown their previous hosted provider, and needed to bring their build
      times down from 25 minutes to below 5 minutes. At the same time they were scaling their
      engineering team from 300 to 900 and expanding across multiple timezones.</p>
      <p>With Buildkite they were able to auto-scale their build servers to match peak
      demand for their engineering teams. This let them massively increase how many builds
      could run concurrently - from 20 at a time to 200. Because they are able use their own build 
      infrastructure, they optimized their build machines and could afford to run many more. 
      At peak, Shopify runs 10,000 buildkite agents concurrently.</p>
      <p>Because Buildkite is less opinionated with how builds are structured, Shopify was
      able to re-use and extend the Docker tooling they had built internally. With Docker
      they improved their CI build speeds and also applied the same methodology to their
      Android and iOS team's builds.</p>
    </React.Fragment>
  )
}

const reaLogo = require('../../assets/images/case-studies/rea/logo.png');
const reaPhotoPeople = require('../../assets/images/case-studies/rea/people.jpg');
const reaPhotoOffice = require('../../assets/images/case-studies/rea/office.jpg');
const reaTestimonialPhoto = require('../../assets/images/case-studies/rea/testimonial-headshot.jpg');

export const rea = {
  pathname: '/case-studies/rea',
  team: 'REA Group',
  link: { label: 'realestate.com.au', url: 'https://realestate.com.au/' },
  headTitle: 'REA Group CI Buildkite Case Study',
  logoImage: reaLogo,
  photoOne: { image: reaPhotoPeople, alt: "TODO" },
  photoTwo: { image: reaPhotoOffice, alt: "TODO" },
  indexBackgroundImage: reaPhotoOffice,
  industry: 'Ecommerce',
  teamSize: '900 engineers',
  testimonial: {
    name: 'A Person',
    title: 'A persons title',
    testimonial: 'A testimonial about how Buildkite has supported their organization through growth, and has been amazing for xyz.',
    headshotImage: reaTestimonialPhoto,
  },
  results: [
    { number: 75, unit: '%', label: 'reduction in build wait times' },
    { number: 4, unit: '⨉', label: 'increase in CI speed for the same budget' }
  ],
  summaryWords: (
    <React.Fragment>
      A short case story about the problem, the solution, the results. Li
      Europan lingues es membres del sam familie. Lor separat existentie es un
      myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
      Li lingues differe solmen in li grammatica, li pronunciation e li plu
      commun vocabules.
    </React.Fragment>
  ),
  words: (
    <React.Fragment>
      <p>A short case story about the problem, the solution, the results.  Li
      Europan lingues es membres del sam familie. Lor separat existentie es un
      myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
      Li lingues differe solmen in li grammatica, li pronunciation e li plu
      commun vocabules.</p>
      <p>Omnicos directe al desirabilite de un nov lingua
      franca: On refusa continuar payar custosi traductores. At solmen va esser
      necessi far uniform grammatica, pronunciation e plu sommun paroles. Li
      lingues differe solmen in li grammatica, li pronunciation e li plu commun
      vocabules.</p>
      <p>Omnicos directe al desirabilite de un nov lingua franca: On
      refusa continuar payar custosi traductores. At solmen va esser necessi far
      uniform grammatica, pronunciation e plu sommun paroles. Li lingues differe
      solmen in li grammatica.</p>
    </React.Fragment>
  )
}

export default [
  shopify,
  rea
]
