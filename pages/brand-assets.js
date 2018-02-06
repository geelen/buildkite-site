import styled from 'styled-components'

import Br from 'components/Br'
import Callout from 'components/Callout'
import { Grid, Cell } from 'components/Grid'
import Link from 'components/Link'
import Page, { page } from 'components/Page'

const logoLightSvg = require('../assets/images/brand-assets/buildkite-logo-on-light.svg')
const logoLightPng = require('../assets/images/brand-assets/buildkite-logo-on-light.png')
const logoDarkSvg = require('../assets/images/brand-assets/buildkite-logo-on-dark.svg')
const logoDarkPng = require('../assets/images/brand-assets/buildkite-logo-on-dark.png')

const logoPortraitLightSvg = require('../assets/images/brand-assets/buildkite-logo-portrait-on-light.svg')
const logoPortraitLightPng = require('../assets/images/brand-assets/buildkite-logo-portrait-on-light.png')
const logoPortraitDarkSvg = require('../assets/images/brand-assets/buildkite-logo-portrait-on-dark.svg')
const logoPortraitDarkPng = require('../assets/images/brand-assets/buildkite-logo-portrait-on-dark.png')

const markLightSvg = require('../assets/images/brand-assets/buildkite-mark-on-light.svg')
const markLightPng = require('../assets/images/brand-assets/buildkite-mark-on-light.png')
const markDarkSvg = require('../assets/images/brand-assets/buildkite-mark-on-dark.svg')
const markDarkPng = require('../assets/images/brand-assets/buildkite-mark-on-dark.png')

const wordmarkLightSvg = require('../assets/images/brand-assets/buildkite-wordmark-on-light.svg')
const wordmarkLightPng = require('../assets/images/brand-assets/buildkite-wordmark-on-light.png')
const wordmarkDarkSvg = require('../assets/images/brand-assets/buildkite-wordmark-on-dark.svg')
const wordmarkDarkPng = require('../assets/images/brand-assets/buildkite-wordmark-on-dark.png')

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};

  @media (min-width: 350px) {
    margin-top: ${({ theme }) => theme.outerSpacing.s1};
    margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  }
`

const MaxWidthSection = Section.extend`
  @media (min-width: 742px) {
    ${({ theme }) => theme.maxWidthContainer}
    width: 60%;
  }
`

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s1} 0 ${({ theme }) => theme.innerSpacing.s2} 0;
`

const AssetListContainer = Grid.extend`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.innerSpacing.s2};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.innerSpacing.s1};
    grid-template-columns: initial;
  }
`

const AssetList = ({ children }) => (
  <AssetListContainer>
    {children}
  </AssetListContainer>
)

const AssetCell = Cell.extend`
  text-align: center;
`

const AssetImageSizer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 66%; /* 16:9 */
  position: relative;
`

const AssetImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ darkBackground }) => darkBackground ? 'black' : 'white'};

  img {
    padding: ${({ theme }) => theme.innerSpacing.s2};
    max-width: 66%;
    max-height: 66%;
  }
`

const AssetImage = ({ src, alt, darkBackground, proportion }) => (
  <AssetImageSizer proportion={proportion}>
    <AssetImageWrapper darkBackground={darkBackground}>
      <img src={src} alt={alt} />
    </AssetImageWrapper>
  </AssetImageSizer>
)

const AssetDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s1} 0;
`

const AssetLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;

  li > a {
    ${({ theme }) => theme.textStyles.bodyCopySmall}
    ${({ theme }) => theme.textStyles.navigationHyperlink}
    color: ${({ theme }) => theme.colors.text.subdued};
    margin: ${({ theme }) => theme.textSpacing.s1};
    text-decoration: none;

    > svg {
      margin-right: .25em;
    }
  }
`

const Asset = ({ description, image, formats, darkBackground }) => (
  <AssetCell>
    <AssetImage
      darkBackground={darkBackground}
      src={image}
      alt={description}
    />
    <AssetDescription>{description}</AssetDescription>
    <AssetLinks>
      {Object.keys(formats).map((extension) =>
        (<li key={extension}>
          <Link external href={formats[extension]}>
            <a download>
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 6H3l3 4 3-4H7V3H5v3zm1 6A6 6 0 1 1 6 0a6 6 0 0 1 0 12z"
                  fill="currentColor"
                />
              </svg>
              {extension.toUpperCase()}
            </a>
          </Link>
        </li>)
      )}
    </AssetLinks>
  </AssetCell>
)

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Logo & Brand Assets"
    title="Brand Assets"
    description={
      <React.Fragment>
        Official versions of the Buildkite logo, <Br maxWidth="30em" />
        marks, screenshots and words.
      </React.Fragment>
    }
    loggedIn={loggedIn}
  >
    <MaxWidthSection>
      <SectionHeader>Guidelines and Rules</SectionHeader>
      <Paragraph>
        Our logo and mark are trademarks, and we need to protect them. If you’d like to use our logo or mark anywhere, we’ve provided files here for you. Please don’t alter the files in any way—we’ve put a lot of love into them and appreciate everyone using them only in the ways we’ve covered on this page ❤️
      </Paragraph>
    </MaxWidthSection>

    <Section>
      <SectionHeader>Primary Logo</SectionHeader>
      <Paragraph>
        If you’re putting a Buildkite logo anywhere, this is one we like to see. <Br maxWidth="38em" />
        It’s the official one, and the one we love the most.
      </Paragraph>

      <AssetList>
        <Asset
          description="Landscape version for light backgrounds"
          image={logoLightSvg}
          formats={{ svg: logoLightSvg, png: logoLightPng }}
        />
        <Asset
          description="Landscape version for dark backgrounds"
          image={logoDarkSvg}
          darkBackground
          formats={{ svg: logoDarkSvg, png: logoDarkPng }}
        />
        <Asset
          description="Portrait version for light backgrounds"
          image={logoPortraitLightSvg}
          formats={{ svg: logoPortraitLightSvg, png: logoPortraitLightPng }}
        />
        <Asset
          description="Portrait version for dark backgrounds"
          image={logoPortraitDarkSvg}
          darkBackground
          formats={{ svg: logoPortraitDarkSvg, png: logoPortraitDarkPng }}
        />
      </AssetList>
    </Section>

    <Section>
      <SectionHeader>Secondary Logos</SectionHeader>
      <Paragraph>
        Our secondary logos (our mark and wordmark) can be used for making emoji, an icon, or if you <Br maxWidth="38em" />
        need to work in a small space.
      </Paragraph>
      <AssetList>
        <Asset
          description="Mark for light or transparent backgrounds"
          image={markLightSvg}
          formats={{ svg: markLightSvg, png: markLightPng }}
        />
        <Asset
          description="Mark for dark backgrounds"
          image={markDarkSvg}
          darkBackground
          formats={{ svg: markDarkSvg, png: markDarkPng }}
        />
        <Asset
          description="Wordmark for light or transparent backgrounds"
          image={wordmarkLightSvg}
          formats={{ svg: wordmarkLightSvg, png: wordmarkLightPng }}
        />
        <Asset
          description="Wordmark for dark backgrounds"
          image={wordmarkDarkSvg}
          darkBackground
          formats={{ svg: wordmarkDarkSvg, png: wordmarkDarkPng }}
        />
      </AssetList>
    </Section>

    {/* <Section>
      <SectionHeader>Screenshots</SectionHeader>
      <Paragraph>If you need screenshots of Buildkite to use anywhere, we’d rather you use ours than taking your own. If you need different pages, get in touch and we can add more.</Paragraph>
      <AssetList>
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
      </AssetList>
    </Section> */}

    {/* <Section>
      <SectionHeader>Production description</SectionHeader>
      <Paragraph>If you need a description of Buildkite that will appear in text, you can use the following paragraph to explain who we are and what we do:</Paragraph>
      <blockquote>
        <p>This is an excellent description of what Buildkite does, who it’s for, and what makes it special. Lorem ipsum ipsum ipsum ipsum ipsum ipusm ipsum.</p>
      </blockquote>
    </Section> */}

    <Callout
      heading="Need something else?"
      description={
        <React.Fragment>
          Get in touch with our design team, <Br maxWidth="30em" />
          and we can help you out.
        </React.Fragment>
      }
      buttonTitle="Email design@buildkite.com"
      url="mailto:design@buildkite.com"
    />
  </Page>
))