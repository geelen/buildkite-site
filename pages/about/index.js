import styled from 'styled-components'
import queryString from 'query-string'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Br from 'components/Br'
import Callout from 'components/Callout'
import { Grid } from 'components/Grid'
import { Masonry, Brick } from 'components/Masonry'
import { MediaItem, ImageCell, TextCell } from 'components/MediaItem'
import { OffscreenH2 } from 'components/OffscreenHeading'
import Page, { page } from 'components/Page'
import Person from 'components/Person'
import { ResponsiveImageContainer } from 'components/ResponsiveContainer'

import { team, founders, advisors } from '../../lib/data/people'

import headOfficeImage from '../../assets/images/about/head-office.jpg'
import brandAssetsImage from '../../assets/images/about/brand-assets.jpg'
import sayhelloImage from '../../assets/images/contact/sayhello.jpg'
import shopImage from '../../assets/images/about/shop.jpg'
import careersImage from '../../assets/images/about/careers.jpg'
import aboriginalFlagImage from '../../assets/images/about/australian-aboriginal-flag.svg'

const SectionHeader = styled.h1`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  text-align: center;
`

const InlineSectionHeader = styled(SectionHeader)`
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

const PeopleSection = styled(Section)`
  text-align: center;
`

const People = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;

  > * {
    margin: -18px -12px;
  }
`

const HeadOfficeImageContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const LocationParagraph = styled.section`
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s3} 0;
  color: ${({ theme }) => theme.colors.text.green};
`

const FirstNationsSection = styled.section`
  display: flex;
  margin: 0 ${({ theme }) => theme.innerSpacing.s1};
  p {
    ${({ theme }) => theme.textStyles.bodyCopySmall}
    color: ${({ theme }) => theme.colors.text.subdued};
    max-width: 27em;
  }
  img {
    width: 40px;
    margin-top: .35rem;
    margin-right: ${({ theme }) => theme.innerSpacing.s1};
  }
`

const LocationLink = styled.a`
  text-decoration: none;
  color: inherit;

  :hover, :active {
    text-decoration: underline;
  }

  :after {
    content: ' →'
  }
`

const HeadOfficeLocation = {
  address: '149a Brunswick St, Fitzroy, Victoria 3065, Australia',
  z: 17, // eslint-disable-line id-length
  t: 'r' // eslint-disable-line id-length
}

const ValueParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  padding: ${({ theme }) => theme.textSpacing.s1} 0;
`

export default page((props) => (
  <Page
    headTitle="About Buildkite"
    title="About"
    description={
      <>
        We’re building tools to help the best <Br maxWidth="30em" />
        software teams stay happy and productive.
      </>
    }
    {...props}
  >
    <PeopleSection>
      <SectionHeader>Our Team</SectionHeader>

      <OffscreenH2>Everyone</OffscreenH2>
      <People>
        {team.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </People>

      <SectionSecondLevelHeader>Founders</SectionSecondLevelHeader>
      <Grid columns="200px">
        {founders.map((person) => (
          <Person person={person} key={person.name} showName />
        ))}
      </Grid>

      <SectionSecondLevelHeader>Advisors</SectionSecondLevelHeader>
      <Grid columns="200px">
        {advisors.map((person) => (
          <Person person={person} key={person.name} showName />
        ))}
      </Grid>
    </PeopleSection>

    <Section>
      <MediaItem alignItems="top">
        <ImageCell>
          <HeadOfficeImageContainer>
            <ResponsiveImageContainer width={1000} height={589}>
              <img src={headOfficeImage} alt="Person looking at points around a globe" />
            </ResponsiveImageContainer>
          </HeadOfficeImageContainer>
        </ImageCell>
        <TextCell>
          <InlineSectionHeader>
            Head Office
          </InlineSectionHeader>
          <p>
            Our team is spread across the globe, but our head office is based in Melbourne Australia. You can find us here:
          </p>
          <LocationParagraph>
            <LocationLink
              href={`https://maps.apple.com/?${queryString.stringify(HeadOfficeLocation)}`}
            >
              149a Brunswick St<br />
              Fitzroy, Victoria 3065<br />
              Australia
            </LocationLink>
          </LocationParagraph>
          <FirstNationsSection>
            <div><img src={aboriginalFlagImage} alt="Australian Aboriginal Flag" /></div>
            <p>Our office is located on the traditional lands of the Wurundjeri people of the Kulin nation. We acknowledge that sovereignty was never ceded and pay our respects to elders past, present and future.</p>
          </FirstNationsSection>
        </TextCell>
      </MediaItem>
    </Section>

    <Section>
      <SectionHeader>Our Values</SectionHeader>
      <Masonry>
        <Brick>
          <h2>Transparency</h2>
          <ValueParagraph>
            We default to working in the open, allowing everyone to understand context and contribute. We’re open about both our strengths and weaknesses.
          </ValueParagraph>
        </Brick>
        <Brick>
          <h2>Quality</h2>
          <ValueParagraph>
            We think developers need high-quality tools to build amazing products. We take the time to create things with high levels of design, utility, and support.
          </ValueParagraph>
        </Brick>
        <Brick>
          <h2>Diversity</h2>
          <ValueParagraph>
            We believe diversity of experience leads to better solutions, and creates more sustainable cultures. The tools we build must be accessible to people of all abilities and backgrounds.
          </ValueParagraph>
        </Brick>
        <Brick>
          <h2>Independence</h2>
          <ValueParagraph>
            We are majority owned by employees, and funded by our local developer community. We own our destiny, and build long term relationships with our customers.
          </ValueParagraph>
        </Brick>
        <Brick>
          <h2>Empathy</h2>
          <ValueParagraph>
            We believe empathy towards each other, customers and the community, creates the best environment for learning, change and inclusivity.
          </ValueParagraph>
        </Brick>
        <Brick>
          <h2>Collaboration</h2>
          <ValueParagraph>
            Our platform is a story that is always being written, and we encourage contributions from outside the Buildkite team. We actively support and collaborate with other organizations to better our industry, and the world.
          </ValueParagraph>
        </Brick>
        <Brick>
          <h2>Sustainable Growth</h2>
          <ValueParagraph>
            We believe that great companies grow sustainably, respect life outside work, maintain a healthy culture, and limit their impact on the environment.
          </ValueParagraph>
        </Brick>
      </Masonry>
    </Section>

    <ActionGrid>
      <ActionGridItem
        heading="Brand Assets"
        image={brandAssetsImage}
        imageAlt="Illustration of the Buildkite logo"
        description={<span>Download versions of our official<br /> logos to use as you need.</span>}
        url="/brand-assets"
        buttonTitle="View Brand Assets"
      />
      <ActionGridItem
        heading="Say Hello!"
        image={sayhelloImage}
        imageAlt="People waving hello"
        description="If you have any questions or queries, don’t hesitate to get in touch."
        url="mailto:hello@buildkite.com"
        external
        buttonTitle="Email hello@buildkite.com"
        adjustLeft={25}
        imageWidth={460}
      />
      <ActionGridItem
        heading="Buildkite Shop"
        image={shopImage}
        imageAlt="Illustration of a shop full of items"
        description="Order yourself some official Buildkite stickers, t-shirts, and more."
        url="https://shop.buildkite.com/"
        external
        buttonTitle="Browse the shop"
      />
      <ActionGridItem
        heading="Careers"
        image={careersImage}
        imageAlt="Illustration of people playing an arcade game"
        description="Want to join the Buildkite team? Check out our current open positions."
        url="/careers"
        buttonTitle="View Careers"
        adjustLeft={15}
        imageWidth={650}
      />
    </ActionGrid>

    <Callout
      heading="Have a question?"
      description="Send us an email, we’re here to help."
      url="mailto:support@buildkite.com"
      buttonTitle="Email support@buildkite.com"
    />
  </Page>
))
