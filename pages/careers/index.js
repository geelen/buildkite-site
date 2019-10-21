import styled from 'styled-components'
import Br from 'components/Br'

import Page, { page } from 'components/Page'
import { Section, SectionHeader, Subsection, SubSectionHeader } from 'components/sections/sections'
import { Testimonial, Quotation, Attribution, Headshot, ImageGrid, ImageItem } from 'components/Page/case-study'
import { Masonry, Brick } from 'components/Masonry'
import { TextLink } from 'components/Link'
import { LinkList, LinkListItem, LinkListItemLink } from 'components/LinkList'
import Callout from 'components/Callout'
import Benefits, { CareersParagraph } from 'components/Benefits'

import headOfficeImage from '../../assets/images/about/head-office.jpg'
import testimonialImage from '../../assets/images/careers/team-photo.jpg'
import testimonialAvatar from '../../assets/images/about/eleanor.jpg'

const CareersSectionParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopy};
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s3} 0 0;
`

const OrderedList = styled.ol`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  columns: auto 13.2rem;
  column-gap: .5rem;
  counter-reset: subdued-numbers;
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s1} 0;
`

const OrderedListItem = styled.li`
  counter-increment: subdued-numbers;
  margin: ${({ theme }) => theme.textSpacing.s1} 0;

  &:before  {
    ${({ theme }) => theme.textStyles.bodyCopy}
    color: ${({ theme }) => theme.colors.text.subdued};
    content: "0" counter(subdued-numbers) " ";
    padding-right: 0.6rem;
  }
`

const ApplicationProcess = styled.dl`
  counter-reset: steps;
  padding:
    ${({ theme }) => theme.innerSpacing.s1};
`

const ApplicationStep = styled.dt`
  padding: 0 0 0 ${({ theme }) => theme.innerSpacing.s4};
  position: relative;

  &:before {
    color: ${({ theme }) => theme.colors.text.subdued};
    content: "Step " counter(steps);
    counter-increment: steps;
    left: 0;
    position: absolute;
  }
`

const ApplicationStepDescription = styled.dd`
  border-left: 1px solid ${({ theme }) => theme.colors.text.subdued};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text.subdued};
  margin:
    ${({ theme }) => theme.textSpacing.s1}
    0
    ${({ theme }) => theme.textSpacing.s1}
    ${({ theme }) => theme.innerSpacing.s1};
  padding:
     0
     0
     ${({ theme }) => theme.textSpacing.s3}
     ${({ theme }) => theme.innerSpacing.s3};

  &:last-of-type {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export default page((props) => (
  <Page
    headTitle="Work at Buildkite"
    image={headOfficeImage}
    imageAlt="Person looking at points around a globe"
    imageHeight="220"
    imageWidth="374"
    title="Work at Buildkite"
    description={
      <>
        Build tools for the best <Br maxWidth="30em" />
        software teams in the world.
      </>
    }
    {...props}
  >

    <Section>
      <Subsection>
        <Masonry>
          <Brick>
            <SubSectionHeader>Small team, global impact</SubSectionHeader>
            <CareersParagraph>We believe small companies are beautiful, and that small teams can achieve big things. This makes everyone on the team an important part of Buildkite.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Flexible work hours</SubSectionHeader>
            <CareersParagraph>We don’t keep set office hours, so you can shift your hours around life’s commitments and non-work activities. Take time out of work for exercise, family or whatever life throws at you.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Support and growth</SubSectionHeader>
            <CareersParagraph>In a small but growing company, you’ll have the opportunity to work on a wide range of projects, and ship work that helps customers.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Work from anywhere</SubSectionHeader>
            <CareersParagraph>We’re a globally distributed, remote-first company, and all our work happens over chat and video calls. Work from your home office, a co-working space, or your local cat café.</CareersParagraph>
          </Brick>
        </Masonry>
      </Subsection>
    </Section>

    <Section>

      <Testimonial>
        <Quotation>
          Working at Buildkite has given me the freedom to grow and flourish in all aspects of my life, personally and professionally. I’m proud to be a part of such a passionate and supportive team.
        </Quotation>
        <Attribution>
          <Headshot
            src={testimonialAvatar}
            alt="Headshot of Eleanor."
          />
          <p>
            Eleanor
            <br />
            Engineer
          </p>
        </Attribution>
      </Testimonial>

      <ImageGrid>
        <ImageItem />
        <ImageItem
          src={testimonialImage}
          alt="Some of the team on a Zoom video call."
        />
      </ImageGrid>

    </Section>

    <Section small>
      <SectionHeader>Our Values</SectionHeader>
      <CareersSectionParagraph>Buildkite’s values guide our priorities, products, hiring, the way we treat our customers, and the way we treat each other. You can read all about them on our <TextLink href="/about">about page</TextLink>.</CareersSectionParagraph>

      <Subsection>
        <OrderedList>
          <OrderedListItem>Transparency</OrderedListItem>
          <OrderedListItem>Quality</OrderedListItem>
          <OrderedListItem>Diversity</OrderedListItem>
          <OrderedListItem>Independence</OrderedListItem>
          <OrderedListItem>Empathy</OrderedListItem>
          <OrderedListItem>Collaboration</OrderedListItem>
          <OrderedListItem>Sustainable Growth</OrderedListItem>
        </OrderedList>
      </Subsection>
    </Section>

    <Section>
      <SectionHeader>Benefits</SectionHeader>
      <Subsection>
        <Benefits />
      </Subsection>
    </Section>

    <Section small>
      <SectionHeader>Application Process</SectionHeader>
      <CareersSectionParagraph>We respect your time when applying for a position, and we’ll give you feedback at every stage. Most applications go through the following four steps:</CareersSectionParagraph>

      <Subsection>
        <ApplicationProcess>
          <ApplicationStep>Submit an application</ApplicationStep>
          <ApplicationStepDescription>First step is submitting an application using Applied. It’s anonymized and we ask a number of written questions to assess your skills. No CV required.</ApplicationStepDescription>

          <ApplicationStep>First video interview</ApplicationStep>
          <ApplicationStepDescription>Two people from the team, at least one of who you’ll be working with, will join you on a video call for an hour.</ApplicationStepDescription>

          <ApplicationStep>Second video interview</ApplicationStep>
          <ApplicationStepDescription>Another two people from the team, usually a founder and a person who you’ll be working with, will join you on a video call for an hour.</ApplicationStepDescription>

          <ApplicationStep>Offer</ApplicationStep>
          <ApplicationStepDescription>We’ll send you an offer and have a video call to go through all the details with you.</ApplicationStepDescription>
        </ApplicationProcess>
      </Subsection>
    </Section>

    <Section>
      <SectionHeader>Open Positions</SectionHeader>

      <Subsection>
        <LinkList>
          <LinkListItem>
            <LinkListItemLink href="/careers/senior-product-designer">Senior Product Designer</LinkListItemLink>
          </LinkListItem>
          {/* <LinkListItem>
            <LinkListItemLink href="/careers/head-of-marketing">Head of Marketing</LinkListItemLink>
          </LinkListItem> */}
        </LinkList>
      </Subsection>
    </Section>

    <Callout
      heading="Get in touch"
      description="If you’ve got any questions, say hi—we’d love to hear from you."
      url="mailto:careers@buildkite.com"
      external
      buttonTitle="Email careers@buildkite.com"
    />
  </Page>
))
