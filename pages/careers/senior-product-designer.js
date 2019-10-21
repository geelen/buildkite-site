import styled from 'styled-components'
import Br from 'components/Br'

import Page, { page } from 'components/Page'
import { Section, SectionHeader, Subsection, SubSectionHeader } from 'components/sections/sections'
import BodyCopy from 'components/BodyCopy'
import { Masonry, Brick } from 'components/Masonry'
import { LinkList, LinkListItem, LinkListItemLink } from 'components/LinkList'
import Callout from 'components/Callout'
import Benefits, { CareersParagraph } from 'components/Benefits'
import CareersAboutUs from 'components/CareersAboutUs'

import headOfficeImage from '../../assets/images/about/head-office.jpg'

const CareersSectionParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopy};
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s3} 0 0;
`

const OfferSummary = styled.div`
  margin-bottom: ${({ theme }) => theme.innerSpacing.s3};
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

const RolePage = (props) => (
  <Page
    headTitle="Senior Product Designer"
    image={headOfficeImage}
    imageAlt="Person looking at points around a globe"
    imageHeight="220"
    imageWidth="374"
    title="Senior Product Designer"
    description={
      <>
        Build tools for the best <Br maxWidth="30em" />
        software teams in the world.
      </>
    }
    {...props}
  >
    <Section>
      <OfferSummary>
        <BodyCopy>
          <table>
            <tbody>
              <tr>
                <th>Salary</th>
                <td>
                  AUD $130–160K salary<br />
                  USD $90–110K salary<br />
                  EUR €80–100K salary<br />
                  Depending on experience, plus benefits, for 38 hours per week (pro-rata for part-time). Salary amount excludes superannuation / 401k.
                </td>
              </tr>
              <tr>
                <th>Timezone</th>
                <td>Remote with at least 3 hours of overlap with UTC+10 mornings (you’ll be working with people in Vancouver, Perth, and Melbourne)</td>
              </tr>
              <tr>
                <th>Hours</th>
                <td>22.5–38 hours a week depending on your preferences and availability</td>
              </tr>
              <tr>
                <th>Applications close</th>
                <td>8pm, 28th Oct 2019 UTC</td>
              </tr>
            </tbody>
          </table>
        </BodyCopy>
      </OfferSummary>
      <BodyCopy>
        <p>As a Senior Product Designer at Buildkite you’ll work on a small team with a big impact, and help shape a tool that thousands of developers use every day. You’ll report to Tim Lucas, our co-founder and design lead, and you’ll be working alongside an existing senior product designer and print designer. In this small team you’ll have the chance to influence all corners of Buildkite’s product and brand.</p>

        <h3>A typical day for a Senior Product Designer might look like:</h3>

        <ul>
          <li>Pairing with a product engineer on Zoom to talk through a new feature being worked on, and working on improvements to UI, copy, and user flows.</li>
          <li>Mocking up user interface ideas in Sketch or Figma, and posting them to Basecamp, to help clarify discussions between everyone on the team.</li>
          <li>Collaborating on a scope doc for a new feature, and helping to explore the possible solutions and tradeoffs.</li>
          <li>Helping polish a new UI animation, pairing with a frontend engineer over Zoom.</li>
          <li>Writing a post to the team on Basecamp with some design strategies and ideas, and getting feedback from a range of perspectives on the team.</li>
          <li>Giving feedback on and helping to iterate our UI component libraries, helping to empower the rest of the team with great design tools.</li>
          <li>Creating polished design assets for product launches, and designing changes to the Buildkite marketing site.</li>
          <li>Joining in the weekly design catchup over Zoom, giving feedback on a commissioned illustration project for a new conference sticker, contributing to a sponsorship booth design idea, and demonstrating designs you’ve been working on.</li>
          <li>Pairing on support to answer customer questions, and venturing into the far corners of Buildkite’s product, tools and documentation to understand how things are working in practice.</li>
        </ul>

        <h3>This job is for you if you have:</h3>

        <ul>
          <li>An eye for detail, and feel comfortable advocating for the user through the lens of great design.</li>
          <li>The ability to navigate ambiguity, create clarity through design, and lead by example.</li>
          <li>Experience working closely with frontend and backend engineers, and enjoy participating in the process of bringing your design ideas to life.</li>
          <li>An interest in working in remote, cross-functional teams.</li>
          <li>Worked on an existing product, helping to iterate it towards an overarching vision.</li>
          <li>Confidence to seek critical feedback, ask questions, and participate in decision making.</li>
          <li>Experience with leading discussions about tradeoffs in the product development process, and helping to ensure a cohesive product experience in the face of challenges.</li>
          <li>An interest in helping build a small company with big impact, and influencing many aspects of the business with great design.</li>
          <li>Proficiency in Sketch, Figma, Illustrator, or other design tools.</li>
          <li>Basic proficiency in HTML, CSS and Javascript.</li>
          <li>Basic proficiency working with Ruby on Rails or similar web app framework.</li>
        </ul>

        <CareersAboutUs />
      </BodyCopy>

      <Callout
        url={`https://app.beapplied.com/apply/wwyp05k9oz?utm_source=${props.utmSource || 'site'}`}
        external
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
        <Benefits />
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

    {/* <Section>
      <SectionHeader>Other Open Positions</SectionHeader>

      <Subsection>
        <LinkList>
          <LinkListItem>
            <LinkListItemLink href="/careers/head-of-marketing">Head of Marketing</LinkListItemLink>
          </LinkListItem>
        </LinkList>
      </Subsection>
    </Section> */}

    <Callout
      heading="Get in touch"
      description="If you’ve got any questions or issues with the application process, please let us know."
      url="mailto:careers@buildkite.com"
      external
      buttonTitle="Email careers@buildkite.com"
    />
  </Page>
)

RolePage.getInitialProps = async({ query }) => {
  return {
    utmSource: query && query.utm_source
  }
}

export default page(RolePage)
