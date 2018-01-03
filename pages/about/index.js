import styled from 'styled-components'
import queryString from 'query-string';

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
  ${({ theme }) => theme.offscreen}
`

const SectionHeader = styled.h1`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  text-align: center;
`

const InlineSectionHeader = SectionHeader.extend`
  margin-top: 0;
  text-align: left;
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

const SectionSecondLevelHeader = styled.h2`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  text-align: center;
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
`

const PeopleSection = Section.extend`
  text-align: center;
`

const HeadOfficeImage = styled.img`
  width: 500px;
  max-width: 100%;
`

const People = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    margin: -18px -12px;
  }
`

const LocationParagraph = styled.section`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  margin-top: ${({ theme }) => theme.textSpacing.s1};
  color: ${({ theme }) => theme.colors.text.subdued};
`

const LocationLink = styled.a`
  text-decoration: none;
  color: inherit;

  :hover, :active {
    text-decoration: underline;
  }
`

const HeadOfficeLocation = {
  address: '149a Brunswick St, Fitzroy, Victoria 3065, Australia',
  z: 17,
  t: 'r'
}

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
      <Grid columns="200px">
        {leadership.map((person) => (
          <Person person={person} key={person.name} showName showRoles />
        ))}
      </Grid>

      <SectionSecondLevelHeader>Advisors</SectionSecondLevelHeader>
      <Grid columns="200px">
        {advisors.map((person) => (
          <Person person={person} key={person.name} showName showRoles />
        ))}
      </Grid>
    </PeopleSection>

    <Section>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '-5px' }}>
        <div style={{ flex: '0 1 510px', padding: '5px' }}>
          <HeadOfficeImage src={headOfficeImage} />
        </div>
        <div style={{ flex: '1 1 400px', padding: '5px'  }}>
          <InlineSectionHeader>
            Head Office
          </InlineSectionHeader>
          <p>
            Our team is spread across the globe, but if you want to visit Buildkite HQ, or send us something in the post, you can find us at:
          </p>
          <LocationParagraph>
            <LocationLink
              href={`https://maps.apple.com/?${queryString.stringify(HeadOfficeLocation)}`}
            >
              149a Brunswick St<br/>
              Fitzroy, Victoria 3065<br/>
              Australia
            </LocationLink>
          </LocationParagraph>
        </div>
      </div>
    </Section>

    <Section>
      <SectionHeader>Our Values</SectionHeader>
      <Grid columns="280px">
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

    <ActionGrid columns="280px">
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