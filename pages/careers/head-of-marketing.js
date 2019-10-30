import styled from 'styled-components'
import Br from 'components/Br'

import Page, { page } from 'components/Page'
import { Section, SectionHeader, Subsection, SubSectionHeader } from 'components/sections/sections'
import Button from 'components/Button'
import BodyCopy from 'components/BodyCopy'
import Link from 'components/Link'
import { Masonry, Brick } from 'components/Masonry'
import { LinkList, LinkListItem, LinkListItemLink } from 'components/LinkList'
import Callout from 'components/Callout'
import Benefits, { CareersParagraph } from 'components/Benefits'
import CareersAboutUs from 'components/CareersAboutUs'
import CareersTestimonialSection from 'components/CareersTestimonialSection'

import headOfficeImage from '../../assets/images/about/head-office.jpg'

const OfferSummary = styled.div`
  margin-top: ${({ theme }) => theme.innerSpacing.s3};
  @media (max-width: 640px) {
    th, td {
      display: block;
      padding: 0 0 ${({ theme }) => theme.innerSpacing.s1} 0;
    }
  }
`

const ApplySubsection = styled.div`
  margin: ${({ theme }) => theme.outerSpacing.s1} 0;
  text-align: center;
`

const RolePage = (props) => (
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
        <p>As the Head of Marketing at Buildkite you’ll help support and grow our vibrant developer community, and help shape the tools used by some of the best software teams in the world. You’ll be our first marketing hire, so you’ll have lots of autonomy and impact.</p>

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
          <li>Are self-motivated. You’re comfortable stepping into gaps in the planning, and taking initiative on what needs to be done and how to get it done.</li>
          <li>Learn fast. You might not be an expert in everything we do initially, but you will quickly become an expert in some aspects, learn other bits you haven’t done before and generally dive into things even if they are new to you.</li>
        </ul>

        <CareersAboutUs />
      </BodyCopy>

      <OfferSummary>
        <BodyCopy>
          <table>
            <tbody>
              <tr>
                <th>Timezone</th>
                <td>Remote with at least 3 hours of overlap with UTC+10</td>
              </tr>
              <tr>
                <th>Hours</th>
                <td>22.5–38 hours a week depending on your preferences and availability</td>
              </tr>
            </tbody>
          </table>
        </BodyCopy>
      </OfferSummary>

      <ApplySubsection>
        <Link href="mailto:careers@buildkite.com?subject=Head of Marketing role" external>
          <Button primary>
            Email Us to Apply →
          </Button>
        </Link>
      </ApplySubsection>
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

    <CareersTestimonialSection />

    <Section>
      <SectionHeader>Other Open Positions</SectionHeader>
    </Section>

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
