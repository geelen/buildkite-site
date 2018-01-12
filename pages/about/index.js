import styled from 'styled-components'
import queryString from 'query-string';

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import { Grid, Cell } from 'components/Grid'
import { Masonry, Brick } from 'components/Masonry'
import { MediaItem, ImageCell, TextCell } from 'components/MediaItem'
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

const People = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    margin: -18px -12px;
  }
`

const HeadOfficeImage = styled.img`
  width: 500px;
  max-width: 100%;
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

const ValueParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  padding: ${({ theme }) => theme.textSpacing.s1} 0;
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
      <MediaItem>
        <ImageCell>
          <HeadOfficeImage src={headOfficeImage} />
        </ImageCell>
        <TextCell>
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
        </TextCell>
      </MediaItem>
    </Section>

    <Section>
      <SectionHeader>Our Values</SectionHeader>
      <Masonry>
        <Brick>
          <h2>Transparency</h2>
          <ValueParagraph>We believe good work happens out in the open. Internally we believe it's important to .</ValueParagraph>
          <ValueParagraph>Open-source, company growth / success / plans internally. Open and frank discussion about security, our infrastructure and how we plan to grow and improve areas of both strength and weakness. </ValueParagraph>
        </Brick>
        <Brick>
          <h2>Quality</h2>
          <ValueParagraph>We think that developers need high-quality tools to build amazing products.</ValueParagraph>
        </Brick>
        <Brick>
          <h2>Diversity</h2>
          <ValueParagraph>We believe that mono-cultures are bad. All the diversity.</ValueParagraph>
        </Brick>
        <Brick>
          <h2>Independence</h2>
          <ValueParagraph>We are owned by employees and funded by our local developer community, we intend to keep the company focused on providing an amazing product for these people and by these people.</ValueParagraph>
        </Brick>
        <Brick>
          <h2>Empathy</h2>
          <ValueParagraph>Really great support, not just listening to customers (although we do that), but fixing things proactively and trying to deeply understand where people are coming from and what they are trying to accomplish and then being a strong partner in that.</ValueParagraph>
        </Brick>
        <Brick>
          <h2>Collaboration</h2>
          <ValueParagraph>Our platform is a story that is always being written, and we love contributions from outside the Buildkite team. This is reflected in our commitment to open-source as well...</ValueParagraph>
          <ValueParagraph>We want to know how you are using our platform, and we want to work with you to make it better!</ValueParagraph>
          <ValueParagraph>We also like to support other projects / tools and conferences that do amazing things.</ValueParagraph>
          <ValueParagraph>design of platform to allow external integration and customization.</ValueParagraph>
        </Brick>
        <Brick>
          <h2>Sustainable Growth</h2>
          <ValueParagraph>We believe that great companies grow sustainably. We want to build a company that grows at a pace that we can ensure sticks to our values. We believe that work/life balance and enjoying the work you do is really important. Commercial success is one thing, but we believe it shouldn't come at the expense of the humans that make it possible.</ValueParagraph>
        </Brick>
      </Masonry>
    </Section>

    <ActionGrid columns="280px">
      <ActionGridItem
        heading="Brand Assets"
        image={brandAssetsImage}
        imageAlt=""
        description="Download our official logos, screenshots and media assets."
        url="/brand-assets"
        buttonTitle="View brand assets"
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
      buttonTitle="Email support@buildkite.com"
    />
  </Page>
))