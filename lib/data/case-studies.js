import shopifyLogo from '../../assets/images/case-studies/shopify/logo.png'
import shopifyPhotoPeople from '../../assets/images/case-studies/shopify/people.jpg'
import shopifyPhotoOffice from '../../assets/images/case-studies/shopify/office.jpg'
import shopifyTestimonialPhoto from '../../assets/images/case-studies/shopify/testimonial-headshot.jpg'

export const shopify = {
  pathname: '/case-studies/shopify',
  team: 'Shopify',
  logoImage: shopifyLogo,
  photoOne: { image: shopifyPhotoPeople, alt: "Photo of Shopify at work" },
  photoTwo: { image: shopifyPhotoOffice, alt: "Photo of the Shopify office" },
  indexBackgroundImage: shopifyPhotoOffice,
  industry: 'Ecommerce',
  teamSize: '900 engineers',
  testimonial: {
    name: 'Jean-Michel Lemieux',
    title: 'SVP of Engineering, Shopify',
    testimonial: 'Buildkite helped us bring down our build times from 40 minutes to 10 minutes. We love the pipelines feature and run tests across 100 agents on each master and branch build.',
    headshotImage: shopifyTestimonialPhoto
  },
  results: [
    { number: 75, unit: '%', label: 'reduction in build wait times' },
    { number: 4, unit: 'x', label: 'increase in CI speed for the same budget' }
  ],
  summaryWords: (
    <>
      Shopify is a global ecommerce platform serving hundreds of millions of shoppers. Switching to Buildkite allowed Shopify to reduce their core application’s build times to under 5 minutes, supported an engineering team growth of 300%, and helped to smoothly transition from AWS to Google Cloud.
    </>
  ),
  words: (
    <>
      <p><a href="https://shopify.com/" rel="nofollow">Shopify</a> is a global commerce platform powering more than 500,000 entrepreneurs and businesses, and in 2016 they served over 100 million shoppers. They are based in Ottawa, Canada, but have a global presence with over 900 engineers.</p>
      <p>Having outgrown their previous hosted CI provider, Shopify needed to reduce their build times from 40 minutes to less than 10 minutes. At the same time, they were scaling their engineering team from 300 to 900 and expanding across multiple time zones.</p>
      <p>Buildkite enabled Shopify to auto-scale their build servers to match their engineering teams’ peak demand, and they now run almost 10,000 concurrent build agents. Buildkite’s agent architecture allowed them to take full advantage of cloud cost reduction features, providing a much larger compute capacity for the same cost, and allowed them to smoothly transition from AWS to Google Cloud.</p>
      <p>In the face of 300% team growth, Shopify has maintained their targets of keeping build times under 10 minutes, and have been able to apply the same scaling techniques to their key Android and iOS projects.</p>
    </>
  )
}

import reaLogo from '../../assets/images/case-studies/rea/logo.png'
import reaPhotoPeople from '../../assets/images/case-studies/rea/people.jpg'
import reaPhotoOffice from '../../assets/images/case-studies/rea/office.jpg'
import reaTestimonialPhoto from '../../assets/images/case-studies/rea/testimonial-headshot.jpg'

export const rea = {
  pathname: '/case-studies/rea',
  team: 'REA Group',
  logoImage: reaLogo,
  photoOne: { image: reaPhotoOffice, alt: "Photo of the REA Group office" },
  photoTwo: { image: reaPhotoPeople, alt: "Photo of some of the REA Group engineering team" },
  indexBackgroundImage: reaPhotoOffice,
  industry: 'Ecommerce',
  teamSize: '330 engineers',
  testimonial: {
    name: 'Tomas Varsavsky',
    title: 'Chief Engineer',
    testimonial: 'We had more than a dozen different build clusters, each of which required care and feeding (patching, backups, etc.) Buildkite allowed us to reduce overheads by outsourcing the hard (stateful) parts.',
    headshotImage: reaTestimonialPhoto
  },
  results: [
    { number: 330, unit: '', label: 'engineers globally' },
    { number: 80, unit: '%', label: 'reduction in team setup time' }
  ],
  summaryWords: (
    <>
      REA Group is a multinational digital advertising business specialising in property.
      Moving to Buildkite from a mix of different build systems, REA was able to significantly decrease their maintenance costs,
      more easily adopt best practices across all their teams, and make full use of their AWS and Docker expertise.
    </>
  ),
  words: (
    <>
      <p><a href="https://www.rea-group.com/" rel="nofollow">REA Group</a> is a multinational digital advertising business specialising in property. REA’s engineers develop and operate leading property websites in Australia and Asia, including <a href="https://www.realestate.com.au/" rel="nofollow">realestate.com.au</a> and <a href="https://iproperty.com.my/" rel="nofollow">iproperty.com.my</a>.</p>
      <p>Before Buildkite, REA’s engineering teams were using a mix of build systems, spread across a dozen clusters, which created problems of high maintenance costs and bottlenecks. They needed a solution that would give autonomy back to their engineering teams, and allow them to make full use of their AWS and Docker expertise.</p>
      <p>In only a few weeks, REA was able to replace a number of Jenkins and Bamboo CI installations with their own autoscaling stack based on Buildkite, AWS and Docker. They found setup time for new build pipelines was reduced from weeks to days, and the centralized cluster greatly reduced their ops overhead.</p>
      <p>Buildkite has helped their teams have faster builds, tighter feedback loops, and easier adoption of new tools and practices. Today, Buildkite powers the majority of builds across their organisation, and is the go-to CI tool for new projects.</p>
    </>
  )
}

export default [
  shopify,
  rea
]
