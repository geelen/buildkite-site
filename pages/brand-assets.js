import styled from 'styled-components'

import Callout from 'components/Callout'
import Link from 'components/Link'
import Page, { page } from 'components/Page'

const logoLightSvg = require('../assets/images/brand-assets/buildkite-logo-on-light.svg')
const logoLightPng = require('../assets/images/brand-assets/buildkite-logo-on-light.svg')
const logoDarkSvg = require('../assets/images/brand-assets/buildkite-logo-on-dark.svg')
const logoDarkPng = require('../assets/images/brand-assets/buildkite-logo-on-dark.svg')

const screenshotJpg = require('../assets/images/brand-assets/screenshot.jpg')

const AssetImageContainer = styled.div`
  background-color: ${props => props.darkBackground ? 'black' : 'white' };
  img { max-width: 100%; }
`

const Asset = ({ description, image, formats, darkBackground }) => (
  <li>
    <AssetImageContainer darkBackground={darkBackground}>
      <img src={image} alt={description} />
    </AssetImageContainer>
    <p>{description}</p>
    <ul>
      {Object.keys(formats).map(extension =>
        <li>
          <a href={formats[extension]}>{extension}</a>
        </li>
      )}
    </ul>
  </li>
)

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Logo & Brand Assets"
    title="Brand Assets"
    description="All the pretty things"
    loggedIn={loggedIn}
    >
    <h2>Guidelines and Rules</h2>
    <p>Our logo and mark are trademarks, and we need to protect them. If you’d like to use our logo or mark anywhere, we’ve provided files here for you. Please don’t alter any of the provided files in any way - we’ve put a lot of love into them and appreciate everyone using them only in the ways we’ve covered on this page.</p>

    <h2>Main Logo</h2>
    <p>If you’re putting a Buildkite logo anywhere, this is one we like to see. It’s the official one, and the one we love the most.</p>
    <ul>
      <Asset
        description="Landscape version for light backgrounds"
        image={logoLightSvg}
        formats={{ svg: logoLightSvg, png: logoLightPng }}
      />
      <Asset
        description="Landscape version for dark backgrounds"
        image={logoDarkSvg}
        darkBackground={true}
        formats={{ svg: logoDarkSvg, png: logoDarkPng }}
      />
      <Asset
        description="Landscape version for light backgrounds"
        image={logoLightSvg}
        formats={{ svg: logoLightSvg, png: logoLightPng }}
      />
      <Asset
        description="Landscape version for dark backgrounds"
        image={logoDarkSvg}
        darkBackground={true}
        formats={{ svg: logoDarkSvg, png: logoDarkPng }}
      />
    </ul>

    <h2>Secondary Logos and Marks</h2>
    <p>Our secondary logos can be used for making emoji, an icon, or if you need to include a small version of our mark somewhere.</p>
    <ul>
      <Asset
        description="Mark for light or transparent backgrounds"
        image={logoLightSvg}
        formats={{ svg: logoLightSvg, png: logoLightPng }}
      />
      <Asset
        description="Mark for dark backgrounds"
        image={logoDarkSvg}
        darkBackground={true}
        formats={{ svg: logoDarkSvg, png: logoDarkPng }}
      />
      <Asset
        description="Wordmark for light or transparent backgrounds"
        image={logoLightSvg}
        formats={{ svg: logoLightSvg, png: logoLightPng }}
      />
      <Asset
        description="Wordmark for dark backgrounds"
        image={logoDarkSvg}
        darkBackground={true}
        formats={{ svg: logoLightSvg, png: logoDarkPng }}
      />
    </ul>

    <h2>Screenshots</h2>
    <p>If you need screenshots of Buildkite to use anywhere, we’d rather you use ours than taking your own. If you need different pages, get in touch and we can add more.</p>
    <ul>
      <Asset
        description="Build Pipelines Overview"
        image={screenshotJpg}
        formats={{ jpg: screenshotJpg }}
      />
      <Asset
        description="Unlocking a Build Pipeline"
        image={screenshotJpg}
        formats={{ jpg: screenshotJpg }}
      />
      <Asset
        description="Managing Your Build Agents"
        image={screenshotJpg}
        formats={{ jpg: screenshotJpg }}
      />
      <Asset
        description="Starting a Build Agent"
        image={screenshotJpg}
        formats={{ jpg: screenshotJpg }}
      />
    </ul>

    <h2>Production description</h2>
    <p>If you need a description of Buildkite that will appear in text, you can use the following paragraph to explain who we are and what we do:</p>
    <blockquote>
      <p>This is an excellent description of what Buildkite does, who it’s for, and what makes it special. Lorem ipsum ipsum ipsum ipsum ipsum ipusm ipsum.</p>
    </blockquote>

    <Callout
      heading="Need other assets?"
      description="Let us know, we’re always keen to help"
      buttonTitle="Email design@buildkite.com"
      url="mailto:design@buildkite.com"
    />
  </Page>
))