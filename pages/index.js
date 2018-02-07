import styled from 'styled-components'

import Button from 'components/Button'
import Link from 'components/Link'
import { ResponsiveImageContainer } from 'components/ResponsiveContainer'
import Page, { page } from 'components/Page'
import { OffscreenH1, OffscreenP } from 'components/OffscreenHeading'

import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

const screenshotPath = require('../assets/images/home/screenshot.png')
const logosNarrowPath = require('../assets/images/home/homepage-logos-narrow.png')
const logosWidePath = require('../assets/images/home/homepage-logos-wide.png')

const ScreenshotImageContainer = ResponsiveImageContainer.extend`
  ${({ theme }) => theme.images.screenshots}
  margin-top: ${({ theme }) => theme.innerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const PositioningStatement = styled.h2`
  ${({ theme }) => theme.textStyles.mainCallout}
  max-width: 50rem;
  padding-left: ${({ theme }) => theme.innerSpacing.s1};
  padding-right: ${({ theme }) => theme.innerSpacing.s1};
  margin: 0 auto;
  text-align: center;
`

const ExplanationStatement = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  margin-top: ${({ theme }) => theme.innerSpacing.s1};
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.subdued};
`

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
`

const FeaturesSection = Section.extend`
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  position: relative;
`

const FeaturesButton = Button.extend`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`

const LargeParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  text-align: center;
`

const Logos = styled.div`
  margin: ${({ theme }) => theme.innerSpacing.s1} auto;
  max-width: 100%;
  @media (min-width: 580px) {
    max-width: 85%;
  }
  @media (min-width: 780px) {
    max-width: 70%;
  }
`

const LogoImages = styled.div`
  background-image: url(${logosNarrowPath});
  padding-bottom: ${1175 / 832 * 100}%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;

  @media (min-width: 400px) {
    background-image: url(${logosWidePath});
    padding-bottom: ${599 / 1632 * 100}%;
  }
`

export default page((props) => (
  <Page
    headTitle="Buildkite"
    headDescription="Buildkite is a platform for running fast, secure, and scaleable continuous integration pipelines on your own infrastructure."
    {...props}
  >
    <section>
      <OffscreenH1>Buildkite</OffscreenH1>
      <PositioningStatement>
        Lightning fast testing and delivery <br />
        for all your software projects
      </PositioningStatement>
      <ExplanationStatement>
        Buildkite is a platform for running fast, secure, and scaleable continuous integration pipelines on your own infrastructure.
      </ExplanationStatement>
    </section>

    <FeaturesSection>
      <OffscreenH1>Features</OffscreenH1>

      <ScreenshotImageContainer width={2468} height={1080}>
        <img
          src={screenshotPath}
          alt="A screenshot of Buildkite in action"
        />
      </ScreenshotImageContainer>

      <Link href="/features">
        <FeaturesButton>See the features</FeaturesButton>
      </Link>
    </FeaturesSection>

    <Section>
      <OffscreenH1>Customers</OffscreenH1>
      <LargeParagraph>Join these teams who’ve switched to Buildkite…</LargeParagraph>

      <Logos><LogoImages><OffscreenP>Airbnb, Shopify, Digital Ocean, Intercom, Basecamp, Venmo, 99designs, Envato, Canva, MYOB, Cochlear, REA Group, Discord, LIFX, Webflow, Sendgrid, Bugsnag, Code Climate, Pivotal Tracker, SourceGroup</OffscreenP></LogoImages></Logos>
    </Section>

    <Section>
      <Screencasts />
    </Section>

    <Section>
      <GetStarted />
    </Section>
  </Page>
))