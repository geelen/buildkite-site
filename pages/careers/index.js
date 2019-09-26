import styled from 'styled-components'
import Br from 'components/Br'
// import { ResponsiveImageContainer } from 'components/ResponsiveContainer'

import Page, { page } from 'components/Page'
import { Masonry, Brick } from 'components/Masonry'
import Callout from 'components/Callout'

import headOfficeImage from '../../assets/images/about/head-office.jpg'

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
`

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
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

const CareersParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
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
            <SubSectionHeader>Customers First</SubSectionHeader>
            <CareersParagraph>Work closely with customers, and help on support. We treat our customers like partners, and ship features that make their lives better every day.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Work From Anywhere</SubSectionHeader>
            <CareersParagraph>We’re a distributed, remote-first company, and all our work happens over chat and video calls. Work from your home office, a co-working space, or your local cat café.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Small Company Big Impact</SubSectionHeader>
            <CareersParagraph>We believe small companies are beautiful, and that small teams can achieve big things. This makes everyone on the team a really important part of Buildkite.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Ship Work You’re Proud Of</SubSectionHeader>
            <CareersParagraph>We have an extensive set of automated testing procedures that are run for every code change.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>No Set Office Hours</SubSectionHeader>
            <CareersParagraph>We don’t keep set office hours, letting you shift your hours around life’s commitments and non-work activities. Take time out of work for exercise, family or whatever life throws at you.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Skills and Growth</SubSectionHeader>
            <CareersParagraph>Something about not needing a degree, making people from all backgrounds feel welcome, valuing different perspectives, opinions, strengths and capabilities.</CareersParagraph>
          </Brick>
        </Masonry>
      </Subsection>
    </Section>

    <Section>
      <SectionHeader>Benefits</SectionHeader>
      <Subsection>
        <Masonry>
          <Brick>
            <SubSectionHeader>Learning & Development</SubSectionHeader>
            <CareersParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae ornare lectus. Aenean sit amet condimentum leo. Integer sit amet odio lectus.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Health Cover</SubSectionHeader>
            <CareersParagraph>Phasellus in hendrerit felis. In tempor eleifend semper. Aenean ac ex ut lorem dapibus blandit. Proin placerat sollicitudin leo.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Parental Leave</SubSectionHeader>
            <CareersParagraph>Vivamus nunc eros, gravida eu tempor non, finibus tempor arcu. Quisque venenatis imperdiet tellus sed varius. Praesent vitae ornare sem.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Home Office & Coworking</SubSectionHeader>
            <CareersParagraph>In convallis consequat sapien, dignissim aliquet dui auctor ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Wellness</SubSectionHeader>
            <CareersParagraph>Fusce ut eleifend nibh. Cras orci diam, auctor id nulla nec, posuere pretium massa. Suspendisse pellentesque felis sit amet congue lacinia. Nunc gravida velit dolor.</CareersParagraph>
          </Brick>
          <Brick>
            <SubSectionHeader>Profit Share & Ownership</SubSectionHeader>
            <CareersParagraph>Nam porttitor enim at arcu ornare facilisis. Nullam varius vehicula erat vitae egestas. In tempor ac lorem justo molestie vehicula. Proin convallis euismod risus ac feugiat.</CareersParagraph>
          </Brick>
        </Masonry>
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
