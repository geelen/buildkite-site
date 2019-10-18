import styled, { css } from 'styled-components'
import Br from 'components/Br'

import Page, { page } from 'components/Page'
import BodyCopy from 'components/BodyCopy'
import { Masonry, Brick } from 'components/Masonry'
import { LinkList, LinkListItem, LinkListItemLink } from 'components/LinkList'
import Callout from 'components/Callout'

import headOfficeImage from '../../assets/images/about/head-office.jpg'

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
    headTitle="Head of Marketing"
    image={headOfficeImage}
    imageAlt="Person looking at points around a globe"
    imageHeight="220"
    imageWidth="374"
    title="Head of Marketing"
    description={
      <>
        Build tools for the best <Br maxWidth="30em" />
        software teams in the world.
      </>
    }
    {...props}
  >
    <Section>
      <BodyCopy>

        <table>
          <tr>
            <th>Salary:</th>
            <td>AUD $160K &mdash; $200K salary (ex. super) plus benefits</td>
          </tr>
          <tr>
            <th>Location:</th>
            <td>Remote with at least 3 hours of overlap with an Australian timezone</td>
          </tr>
          <tr>
            <th>Hours:</th>
            <td>22.5 &mdash; 38 hours a week depending on your preferences and availability</td>
          </tr>
          <tr>
            <th>Role closes:</th>
            <td>11:59pm, 8th Sep 2019 AEST (Australia/Sydney)</td>
          </tr>
        </table>

        <p>Buildkite is a continuous delivery platform that helps development teams ship quality code, fast. Making developers happy and productive makes us happy, and we&lsquo;re lucky to work closely with some of the best software teams in the world, including Airbnb, Shopify, Wayfair, Intercom, PagerDuty, and Basecamp.</p>

        <p>We are an independently owned, profitable company that values sustainable growth, transparency and work-life balance. We&lsquo;re currently a distributed team of eleven, and we work remotely from Melbourne, Vancouver, Perth, Sydney, and Adelaide.</p>

        <p>As the Head of Marketing, you&lsquo;ll accelerate Buildkite&lsquo;s growth and help support our vibrant developer community. You&lsquo;ll be our first marketing hire, so you&lsquo;ll have lots of autonomy and impact.</p>

        <h3>A typical day for a Head of Marketing might look like:</h3>

        <ul>
          <li>Developing new marketing and community strategies, and collaborating on them with leadership and the team.</li>
          <li>Working with engineering and product teams to help spread the word to our community about product launches and changes.</li>
          <li>Developing programs, content and campaigns to help our customers create the fastest developer workflows for their teams.</li>
          <li>Identifying case studies and stories from our community, highlighting some of the most interesting ways in which Buildkite is helping developers build software.</li>
          <li>Spending time with customers and the community, becoming an expert in messaging and positioning Buildkite.</li>
          <li>Collaborating with our team and community on event sponsorship and speaking opportunities.</li>
          <li>Building and managing scalable marketing campaigns across paid advertising, social media and content marketing.</li>
          <li>Managing a guest content program from and for our community, helping teach technical topics, best practices, integrations, and new development tools.</li>
        </ul>

        <h3>This job is for you if you:</h3>

        <ul>
          <li>Are experienced with building product for developers in marketing, demand generation, or community.</li>
          <li>Have a passion for marketing technical products.</li>
          <li>Enjoy analysing data, and developing strategies to shift numbers in the right direction.</li>
          <li>Have worked remotely, and value clear and open written and verbal communication. You should value empathy and kindness, and be able to articulate your ideas and feelings when writing or speaking.</li>
          <li>Are self-motivated. You're comfortable stepping into gaps in the planning, and taking initiative on what needs to be done and how to get it done.</li>
          <li>Learn fast. You might not be an expert in everything we do initially, but you will quickly become an expert in some aspects, learn other bits you haven't done before and generally dive into things even if they are new to you.</li>
        </ul>
      </BodyCopy>

      <Callout
        url="https://beapplied.co"
        buttonTitle="Apply for this position"
      />

    </Section>

    <Section>
      <SectionHeader>Why Apply?</SectionHeader>
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
      <SectionHeader>Benefits</SectionHeader>
      <Subsection>
        <Masonry>
          <Brick
            icon={learningIcon}
          >
            <SubSectionHeader>Learning & development</SubSectionHeader>
            <CareersParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ornare lectus. Aenean sit amet condimentum leo. Integer sit amet odio lectus.</CareersParagraph>
          </Brick>
          <Brick
            icon={healthCoverIcon}
          >
            <SubSectionHeader>Health cover</SubSectionHeader>
            <CareersParagraph>We provide health cover </CareersParagraph>
          </Brick>
          <Brick
            icon={parentalLeaveIcon}
          >
            <SubSectionHeader>Parental leave</SubSectionHeader>
            <CareersParagraph>Vivamus nunc eros, gravida eu tempor non, finibus tempor arcu. Quisque venenatis imperdiet tellus sed varius. Praesent vitae ornare sem.</CareersParagraph>
          </Brick>
          <Brick
            icon={homeOfficeIcon}
          >
            <SubSectionHeader>Home office & coworking</SubSectionHeader>
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
            <SubSectionHeader>Profit share & ownership</SubSectionHeader>
            <CareersParagraph>Nam porttitor enim at arcu ornare facilisis. Nullam varius vehicula erat vitae egestas. In tempor ac lorem justo molestie vehicula. Proin convallis euismod risus ac feugiat.</CareersParagraph>
          </Brick>
        </Masonry>
      </Subsection>
    </Section>

    <Section small>
      <SectionHeader>Application Process</SectionHeader>
      <CareersSectionParagraph>We respect your time when applying for a position, and we’ll give you feedback at every stage. Most applications go through the following four steps.</CareersSectionParagraph>

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
      <SectionHeader>Other Open Positions</SectionHeader>

      <Subsection>
        <LinkList>
          <LinkListItem>
            <LinkListItemLink href="/careers/senior-product-designer">Senior Product Designer</LinkListItemLink>
          </LinkListItem>
        </LinkList>
      </Subsection>
    </Section>

    <Callout
      heading="Get in touch"
      description="If you've got any questions or issues with the application process, please let us know."
      url="mailto:careers@buildkite.com"
      buttonTitle="Email careers@buildkite.com"
    />
  </Page>
))
