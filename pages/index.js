import styled from 'styled-components'

import Button from 'components/Button'
import CenteredLink from 'components/CenteredLink'
import { Grid, Cell } from 'components/Grid'
import Page, { page } from 'components/Page'

import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

const screenshotPath = require('../assets/images/home/screenshot.png');

const ScreenshotImage = styled.img`
  max-width: 100%;
  border: 1px solid black;
  margin-top: ${({ theme }) => theme.innerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const OffscreenH1 = styled.h1`
  ${({ theme }) => theme.offscreen}
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
  max-width: 33rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.subdued};
`

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
`

const FeatureCell = styled(Cell)`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
`

const FeatureTitle = styled.h2`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const FeatureDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
`

// For this content it should be ul/li instead of div/div
const CustomerGrid = styled(Grid)`
  padding: 0;
`.withComponent('ul');
const CustomerCell = Grid.withComponent('li');

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite"
    loggedIn={loggedIn}
  >
    <section>
      <OffscreenH1>Buildkite</OffscreenH1>
      <PositioningStatement>
        Lightning fast testing and delivery <br/>
        for all your software projects
      </PositioningStatement>
      <ExplanationStatement>
        Buildkite makes it simple to run and scale your own continuous integration pipelines, so you can stay productive no matter how large you grow.
      </ExplanationStatement>
    </section>

    <Section>
      <OffscreenH1>Features</OffscreenH1>

      <ScreenshotImage src={screenshotPath} />

      <Grid>
        <FeatureCell>
          <FeatureTitle>buildkite-agent gives you full control</FeatureTitle>
          <FeatureDescription>
            Small description of what this feature even means, how it works, intrigues them to read more.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Tools to scale and parallelize</FeatureTitle>
          <FeatureDescription>
            Small description of what this feature even means, how it works, intrigues them to read more.
          </FeatureDescription>
        </FeatureCell>      
        <FeatureCell>
          <FeatureTitle>Automate more than just tests</FeatureTitle>
          <FeatureDescription>
            Small description of what this feature even means, how it works, intrigues them to read more.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Create beautiful build logs</FeatureTitle>
          <FeatureDescription>
            Small description of what this feature even means, how it works, intrigues them to read more.
          </FeatureDescription>
        </FeatureCell>
      </Grid>

      <CenteredLink href="/features">
        <Button>See all the features</Button>
      </CenteredLink>
    </Section>

    <Section>
      <OffscreenH1>Customers</OffscreenH1>
      <p>Join these teams who’ve switched to Buildkite…</p>

      <CustomerGrid>
        <CustomerCell>Logo 1</CustomerCell>
        <CustomerCell>Logo 1</CustomerCell>
        <CustomerCell>Logo 1</CustomerCell>
        <CustomerCell>Logo 1</CustomerCell>
        <CustomerCell>Logo 1</CustomerCell>
        <CustomerCell>Logo 1</CustomerCell>
      </CustomerGrid>

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