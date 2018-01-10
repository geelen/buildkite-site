const shopifyLogo = require('../../assets/images/case-studies/shopify/logo.png');
const shopifyPhotoPeople = require('../../assets/images/case-studies/shopify/people.jpg');
const shopifyPhotoOffice = require('../../assets/images/case-studies/shopify/office.jpg');

export default [
  {
    pathname: '/case-studies/shopify',
    team: 'Shopify',
    headTitle: 'Shopify CI Buildkite Case Study',
    logoImage: shopifyLogo,
    photoOne: { image: shopifyPhotoPeople, alt: "" },
    photoTwo: { image: shopifyPhotoOffice, alt: "" },
    indexBackgroundImage: shopifyPhotoOffice,
    industry: 'Ecommerce',
    teamSize: '900 engineers',
  }
]