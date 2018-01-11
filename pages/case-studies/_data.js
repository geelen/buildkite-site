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
    name: 'A Person',
    title: 'A persons title',
    testimonial: 'A testimonial about how Buildkite has supported their organization through growth, and has been amazing for xyz.',
    headshotImage: shopifyTestimonialPhoto,
  },
  results: [
    { number: 75, unit: '%', label: 'reduction in build wait times' },
    { number: 4, unit: '⨉', label: 'increase in CI speed for the same budget' }
  ],
  summaryWords: `
    A short case story about the problem, the solution, the results. Li
    Europan lingues es membres del sam familie. Lor separat existentie es un
    myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
    Li lingues differe solmen in li grammatica, li pronunciation e li plu
    commun vocabules.
  `,
  words: <React.Fragment>
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
  summaryWords: `
    A short case story about the problem, the solution, the results. Li
    Europan lingues es membres del sam familie. Lor separat existentie es un
    myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
    Li lingues differe solmen in li grammatica, li pronunciation e li plu
    commun vocabules.
  `,
  words: <React.Fragment>
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
}

export default [
  shopify,
  rea
]