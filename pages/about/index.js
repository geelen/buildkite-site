import styled from 'styled-components'

import * as theme from 'theme'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import { Grid, Cell } from 'components/Grid'
import Page, { page } from 'components/Page'
import Person from 'components/Person'

import { team, leadership, advisors } from './people'

const headOfficeImage = require('../../assets/images/about/head-office.jpg')
const brandAssetsImage = require('../../assets/images/about/brand-assets.jpg')
const shopImage = require('../../assets/images/about/shop.jpg')

const OffscreenH2 = styled.h2`
  ${theme.offscreen}
`

const SectionHeader = styled.h1`
  ${theme.textStyles.secondLevelHeading}
  margin-top: ${theme.innerSpacing.s2};
  margin-bottom: ${theme.outerSpacing.s1};
  text-align: center;
`

const InlineSectionHeader = SectionHeader.extend`
  margin-top: 0;
  text-align: left;
  margin-bottom: ${theme.textSpacing.s1};
`

const SectionSecondLevelHeader = styled.h2`
  ${theme.textStyles.thirdLevelHeading}
  text-align: center;
  margin-top: ${theme.outerSpacing.s1};
  margin-bottom: ${theme.innerSpacing.s2};
`

const Section = styled.section`
  margin-top: ${theme.outerSpacing.s3};
  margin-bottom: ${theme.outerSpacing.s3};
`

const LocationParagraph = styled.section`
  ${theme.textStyles.bodyCopyLarge}
  color: ${theme.colors.text.subdued};
`

const PeopleSection = Section.extend`
  text-align: center;
`

const HeadOfficeImageCell = Cell.extend`
  text-align: right;
`

const HeadOfficeImage = styled.img`
  width: 100%;
  max-width: 450px;
`

const People = ({ children }) => (
  <Grid columns={children.length}>
    {children.map((child, i) => (
      <Cell key={i}>{child}</Cell>
    ))}
  </Grid>
)

const LocationLink = styled.a`
  text-decoration: none;
  color: inherit;
  :hover, :active {
    text-decoration: underline;
  }
`

export default page(({ loggedIn }) => (
  <Page
    headTitle="About Buildkite"
    title="About"
    description="We’re building the best software automation tools"
    loggedIn={loggedIn}
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
          <Person person={person} key={person.name} showName showRoles />
        ))}
      </People>

      <SectionSecondLevelHeader>Advisors</SectionSecondLevelHeader>
      <People>
        {advisors.map((person) => (
          <Person person={person} key={person.name} showName showRoles />
        ))}
      </People>
    </PeopleSection>

    <Section>
      <Grid columns={2}>
        <HeadOfficeImageCell>
          <HeadOfficeImage src={headOfficeImage} />
        </HeadOfficeImageCell>
        <Cell style={{ width: '20em' }}>
          {<InlineSectionHeader>Head Office</InlineSectionHeader>}
          <p>Our team is spread across the globe, but if you want to visit Buildkite HQ, or send us something in the post, you can find us at:</p>
          <LocationParagraph><LocationLink href="https://www.google.com/maps/place/149A+Brunswick+St,+Fitzroy+VIC+3065/@-37.803127,144.9752413,17z">149a Brunswick St<br/>Fitzroy, Victoria<br/>Australia, 3065</LocationLink></LocationParagraph>
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
        image={shopImage}
        imageAlt=""
        description="Order yourself some official Buildkite stickers, t-shirts, and more."
        url="https://shop.buildkite.com/"
        buttonTitle="Browse the shop"
      />
    </ActionGrid>

    <Callout
      heading="Have a question?"
      description="Drop us a line, we’re here to help."
      url="mailto:support@buildkite.com"
      buttonTitle="support@buildkite.com"
    />
  </Page>
))