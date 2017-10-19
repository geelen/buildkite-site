import styled from 'styled-components'

import * as theme from 'theme'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import { Grid, Cell } from 'components/Grid'
import Page from 'components/Page'
import Person from 'components/Person'

import { team, leadership, advisors } from './people'

const hqImage = require('../../assets/images/about/hq.png')
const brandAssetsImage = require('../../assets/images/about/brand-assets.png')

const OffscreenH2 = styled.h2`
  ${theme.offscreen}
`

const SectionHeader = styled.h1`
  ${theme.textStyles.secondLevelHeading}
  margin-top: ${theme.innerSpacing.s2};
  margin-bottom: ${theme.innerSpacing.s2};
  text-align: center;
`

const SectionSecondLevelHeader = styled.h2`
  ${theme.textStyles.thirdLevelHeading}
  text-align: center;
  margin-top: ${theme.outerSpacing.s1};
  margin-bottom: ${theme.innerSpacing.s2};
`

const Section = styled.section`
  margin-top: ${theme.outerSpacing.s2};
  margin-bottom: ${theme.outerSpacing.s2};
`

const SubduedParagraph = styled.section`
  color: ${theme.colors.text.subdued};
`

const PeopleSection = Section.extend`
  text-align: center;
`

const People = ({ children }) => (
  <Grid columns={children.length}>
    {children.map((child, i) => (
      <Cell key={i}>{child}</Cell>
    ))}
  </Grid>
)

export default () => (
  <Page
    headTitle="About Buildkite"
    title="About"
    description="The Buildkite team is dedicated to creating a CI platform that gives you fast and reliable builds. We want you to love using Buildkite as much as we love making it for you."
    >
    <PeopleSection>
      <SectionHeader>Get to know the team</SectionHeader>
      
      <OffscreenH2>Everyone</OffscreenH2>
      <People>
        {team.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </People>

      <SectionSecondLevelHeader>Leadership Team</SectionSecondLevelHeader>
      <People>
        {leadership.map((person) => (
          <Person person={person} key={person.name} showRoles />
        ))}
      </People>

      <SectionSecondLevelHeader>Advisors</SectionSecondLevelHeader>
      <People>
        {advisors.map((person) => (
          <Person person={person} key={person.name} showRoles />
        ))}
      </People>
    </PeopleSection>

    <Section>
      <SectionHeader>Head Office</SectionHeader>
      <Grid columns={2}>
        <Cell>
          <img src={hqImage} />
        </Cell>
        <Cell style={{ width: '20em' }}>
          <p>Our team is spread across the globe, but if you want to visit our head office or send us something in the post, you can find us at:</p>
          <SubduedParagraph>149a Brunswick St<br/>Fitzroy, Victoria<br/>Australia, 3065</SubduedParagraph>
        </Cell>
      </Grid>
    </Section>

    <Section>
      <SectionHeader>Our Values</SectionHeader>
      <Grid columns={2}>
        <Cell>
          <h2>Transparency</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Empathy</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Quality</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Collaboration</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Diversity</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Sustainable Growth</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Independence</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
      </Grid>
    </Section>

    <ActionGrid>
      <ActionGridItem
        heading="Brand Assets"
        image={brandAssetsImage}
        imageAlt=""
        description="Download our official logos, screenshots and media assets."
        url="/brand-assets"
        buttonTitle="View the brand assets"
      />
      <ActionGridItem
        heading="Buildkite Shop"
        image={brandAssetsImage}
        imageAlt=""
        description="Order yourself some official Buildkite stickers, t-shirts, and more."
        url="https://shop.buildkite.com/"
        buttonTitle="Browse the Shop"
      />
    </ActionGrid>

    <Callout
      heading="Want to chat?"
      description="We're here to help. Let us know if you have any questions about getting up and running."
      url="mailto:support@buildkite.com"
      buttonTitle="support@buildkite.com"
    />
  </Page>
)