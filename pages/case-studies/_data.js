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
      sell your goods. They power more than 500,000 individual shops, and in 2016 they served 
      over 100 million shoppers. They are based in Ottawa, Canada, but have a global
      presence with over 900 engineers.</p>
      <p>Shopify had outgrown their previous hosted provider, and needed to bring their build
      times down from 25 minutes to below 5 minutes. At the same time, they were scaling their
      engineering team from 300 to 900 and expanding across multiple timezones.</p>
      <p>Changing to Buildkite enabled them to auto-scale their build servers to match 
      their engineering teams' demand at peak. This let them massively increase how many builds
      could run concurrently - from 20 at a time to 200. Now that they could use their own 
      infrastructure, they optimized their build machines and were able to afford to run many more.
      At peak, Shopify runs 10,000 buildkite agents concurrently.</p>
      <p>Because Buildkite is less opinionated with how builds are structured, Shopify was
      able to re-use and extend the Docker tooling they had built internally. With Docker,
      they improved their CI build speeds and were able to apply the same methodology to their
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
  teamSize: '330 engineers',
  testimonial: {
    name: 'Mike Williams',
    title: 'Head of Operations',
    testimonial: 'REA had more than a dozen different build clusters, each of which required care and feeding, patching, backups, etc. Buildkite has allowed us to reduce our overhead, by out-sourcing operation of the hard (stateful) bits.',
    headshotImage: reaTestimonialPhoto,
  },
  results: [
    { number: 330, unit: '', label: 'engineers globally' },
    { number: 80, unit: '%', label: 'reduction in team set up time' }
  ],
  summaryWords: (
    <React.Fragment>
      REA Group creates and operates property websites all over the world. 
      Moving to Buildkite from a mix of different CI platforms and setups
      has significantly descreased their Ops overhead, and enabled them to quickly
      adopt best practices and better utilize their AWS and docker infrastructure. 
    </React.Fragment>
  ),
  words: (
    <React.Fragment>
      <p>Melbourne, Australia-based REA Group grew from realestate.com.au, 
      Australia's largest property website. They now operate property websites
      in 10 countries that are used by more than 19,000 real-estate agents
      and have approximately 8.8 million unique visitors per month.</p>
      <p>REA's engineering teams were using a mixture of different build
      systems (Jenkins and Bamboo) spread across more than a dozen different
      clusters. Maintenance and management of these clusters spilled over to 
      their central ops team. They needed a CI solution that would give their 
      engineering teams autonomy, but also leverage existing AWS and docker 
      infrastructure.</p>
      <p>Working closely with the Buildkite team to set up a pilot integration, 
      existing Jenkins and Bamboo CI installations were replaced over a few weeks. 
      Today, Buildkite powers the majority of builds across their organisation, 
      and is the go-to CI tool for new projects.</p>
      <p>Instead of weeks of setup and ongoing Ops management, projects are now 
      up and running in days. REA developers have reported an increase in 
      productivity, and the ability to adopt best practices as they're being 
      trialled organisation wide.</p>
    </React.Fragment>
  )
}

export default [
  shopify,
  rea
]
