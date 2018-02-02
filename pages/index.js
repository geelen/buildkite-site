import styled from 'styled-components'

import Button from 'components/Button'
import Link from 'components/Link'
import CenteredLink from 'components/CenteredLink'
import Page, { page } from 'components/Page'
import { OffscreenH1 } from 'components/OffscreenHeading'

import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

const screenshotPath = require('../assets/images/home/screenshot.png')

const ScreenshotImage = styled.img`
  ${({ theme }) => theme.images.screenshots}
  max-width: 100%;
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
  position: relative;
`

const FeaturesButton = Button.extend`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LargeParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  text-align: center;
`

const Logos = styled.p`
  margin: ${({ theme }) => theme.innerSpacing.s2} 0 ${({ theme }) => theme.outerSpacing.s1} 0;
  text-align: center;
`

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite"
    loggedIn={loggedIn}
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

      <ScreenshotImage src={screenshotPath} />

      <Link href="/features">
        <FeaturesButton>See all the features</FeaturesButton>
      </Link>
    </FeaturesSection>

    <Section>
      <OffscreenH1>Customers</OffscreenH1>
      <LargeParagraph>Join these teams who’ve switched to Buildkite…</LargeParagraph>

      <Logos>&lt;Logos&gt;</Logos>

      <CenteredLink href="/case-studies">
        <Button>Read the case studies</Button>
      </CenteredLink>
    </Section>

    <Section>
      <Screencasts />
    </Section>

    <Section>
      <GetStarted />
    </Section>
  </Page>
))