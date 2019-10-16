import styled, { css } from 'styled-components'
import Br from 'components/Br'

import Page, { page } from 'components/Page'
import { Testimonial, Quotation, Attribution, Headshot, ImageGrid, ImageItem } from 'components/Page/case-study'
import { Masonry, Brick } from 'components/Masonry'
import { TextLink } from 'components/Link'
import { LinkList, LinkListItem, LinkListItemLink } from 'components/LinkList'
import Callout from 'components/Callout'

import headOfficeImage from '../../assets/images/about/head-office.jpg'
import testimonialImage from '../../assets/images/careers/pretend-koalas.jpg'
import testimonialAvatar from '../../assets/images/about/eleanor.jpg'

import healthCoverIcon from '../../assets/images/careers/streamline-icon-hospital-house@48x48.svg'
import homeOfficeIcon from '../../assets/images/careers/streamline-icon-office-desk@48x48.svg'
import learningIcon from '../../assets/images/careers/streamline-icon-tools-box@48x48.svg'
import parentalLeaveIcon from '../../assets/images/careers/streamline-icon-baby-care-body@48x48.svg'
import profitShareIcon from '../../assets/images/careers/streamline-icon-saving-piggy-dollars@48x48-2.svg'
import wellnessIcon from '../../assets/images/careers/streamline-icon-messages-bubble-smile@48x48.svg'

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};

  ${(props) => props.small && css`
    margin: ${({ theme }) => theme.outerSpacing.s3} auto;
    max-width: 510px;
  `}
`

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  text-align: center;
`

const Subsection = styled.section`
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const SubSectionHeader = styled.h3`
  ${({ theme }) => theme.textStyles.bodyCopy}
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s1} 0;
`

const CareersSectionParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopy};
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s3} 0 0;
`

const CareersParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
`

const OrderedList = styled.ol`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  columns: auto 13.2rem;
  column-gap: 1rem;
  counter-reset: subdued-numbers;
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s1} 0;
`

const OrderedListItem = styled.li`
  counter-increment: subdued-numbers;
  margin: 0 0 ${({ theme }) => theme.textSpacing.s1} 0;

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
  color: ${({ theme }) => theme.colors.text.subdued};
  margin:
    ${({ theme }) => theme.textSpacing.s1}
    0
    ${({ theme }) => theme.textSpacing.s1}
    ${({ theme }) => theme.innerSpacing.s1};
  padding:
     ${({ theme }) => theme.textSpacing.s1}
     0
     ${({ theme }) => theme.textSpacing.s2}
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
          {/* <Brick>
            <SubSectionHeader>Work From Anywhere</SubSectionHeader>
            <CareersParagraph>We’re a distributed, remote-first company. Work from your home office, a co-working space, or your local cat café.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Flexible Work Hours</SubSectionHeader>
            <CareersParagraph>Shift your hours around life’s commitments, whether it be exercise, family or whatever life throws at you.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Skills and Growth</SubSectionHeader>
            <CareersParagraph>We’ve people that are self-taught and have phd, valuing different perspectives, opinions, strengths and capabilities.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Work Closely with Customers</SubSectionHeader>
            <CareersParagraph>We think of ourselves as close partners to our customers. This means  an extension of our customer’s businesses. This means help on support, and ship work that makes their lives better every day.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Small Company Big Impact</SubSectionHeader>
            <CareersParagraph>Small teams can have a huge impact, and theres, a can achieve big things. Everyone on the team becomes an important part of Buildkite.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Ship Work You’re Proud Of</SubSectionHeader>
            <CareersParagraph>Design, engineering and doing a </CareersParagraph>
          </Brick> */}
        </Masonry>
      </Subsection>
    </Section>

    <Section>

      <Testimonial>
        <Quotation>
          Sometimes we pretend to be koalas. Sometimes we pretend to be koalas. Sometimes we pretend to be koalas. Sometimes we pretend to be koalas. Sometimes we pretend to be koalas.
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
          alt="Buildkittens in trees, pretending to be koalas."
        />
      </ImageGrid>

    </Section>

    <Section small>
      <SectionHeader>Our Values</SectionHeader>
      <CareersSectionParagraph>Buildkite’s values guide our priorities, products, hiring, the way we treat our customers, and the way we treat each other. You can read all about them on our <TextLink href="/about">about page.</TextLink></CareersSectionParagraph>

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
        <Masonry>
          <Brick
            icon={learningIcon}
          >
            <SubSectionHeader>Learning & Development</SubSectionHeader>
            <CareersParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ornare lectus. Aenean sit amet condimentum leo. Integer sit amet odio lectus.</CareersParagraph>
          </Brick>
          <Brick
            icon={healthCoverIcon}
          >
            <SubSectionHeader>Health Cover</SubSectionHeader>
            <CareersParagraph>Phasellus in hendrerit felis. In tempor eleifend semper. Aenean ac ex ut lorem dapibus blandit. Proin placerat sollicitudin leo.</CareersParagraph>
          </Brick>
          <Brick
            icon={parentalLeaveIcon}
          >
            <SubSectionHeader>Parental Leave</SubSectionHeader>
            <CareersParagraph>Vivamus nunc eros, gravida eu tempor non, finibus tempor arcu. Quisque venenatis imperdiet tellus sed varius. Praesent vitae ornare sem.</CareersParagraph>
          </Brick>
          <Brick
            icon={homeOfficeIcon}
          >
            <SubSectionHeader>Home Office & Coworking</SubSectionHeader>
            <CareersParagraph>In convallis consequat sapien, dignissim aliquet dui auctor ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</CareersParagraph>
          </Brick>
          <Brick
            icon={wellnessIcon}
          >
            <SubSectionHeader>Wellness</SubSectionHeader>
            <CareersParagraph>Fusce ut eleifend nibh. Cras orci diam, auctor id nulla nec, posuere pretium massa. Suspendisse pellentesque felis sit amet congue lacinia. Nunc gravida velit dolor.</CareersParagraph>
          </Brick>
          <Brick
            icon={profitShareIcon}
          >
            <SubSectionHeader>Profit Share & Ownership</SubSectionHeader>
            <CareersParagraph>Nam porttitor enim at arcu ornare facilisis. Nullam varius vehicula erat vitae egestas. In tempor ac lorem justo molestie vehicula. Proin convallis euismod risus ac feugiat.</CareersParagraph>
          </Brick>
        </Masonry>
      </Subsection>
    </Section>

    <Section small>
      <SectionHeader>Application Process</SectionHeader>
      <CareersSectionParagraph>This is a short statement about the principles behind our application process aka why we’ve done what we’ve done.</CareersSectionParagraph>

      <Subsection>
        <ApplicationProcess>
          <ApplicationStep>Submit an application</ApplicationStep>
          <ApplicationStepDescription>First step is submitting an application using Applied. It’s anonymized and we ask a number of written questions to test skill and experience. No CV required.</ApplicationStepDescription>

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
            <LinkListItemLink href="https://beapplied.co/">Support Engineer</LinkListItemLink>
          </LinkListItem>
          <LinkListItem>
            <LinkListItemLink href="https://beapplied.co/">Site Reliability Engineer</LinkListItemLink>
          </LinkListItem>
          <LinkListItem>
            <LinkListItemLink href="https://beapplied.co/">Designer</LinkListItemLink>
          </LinkListItem>
          <LinkListItem>
            <LinkListItemLink href="https://beapplied.co/">Head of Marketing</LinkListItemLink>
          </LinkListItem>
        </LinkList>
      </Subsection>
    </Section>

    <Callout
      heading="Get in touch"
      description="If you've got any questions or want to be notified of new positions, say hi &mdash; we'd love to hear from you."
      url="mailto:careers@buildkite.com"
      buttonTitle="Email careers@buildkite.com"
    />
  </Page>
))
