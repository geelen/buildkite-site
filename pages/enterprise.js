import styled from 'styled-components'

import Br from 'components/Br'
import Callout from 'components/Callout'
import CaseStudyCallout from 'components/CaseStudyCallout'
import Link from 'components/Link'
import Page, { page } from 'components/Page'
import { FeatureGrid, FeatureCell, FeatureTitle, FeatureDescription } from 'components/FeatureGrid'
import { MediaItem, ImageCell, TextCell } from 'components/MediaItem'

import { rea, shopify } from './case-studies/_data'

import { ResponsiveImageContainer } from 'components/ResponsiveContainer'

const scaleImage = require('../assets/images/enterprise/scale.jpg')
const securityImage = require('../assets/images/enterprise/security.jpg')
const supportImage = require('../assets/images/enterprise/support.jpg')

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
`

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  text-align: center;
`

const CaseStudiesHeader = styled(SectionHeader)`
  margin-bottom: 0;
`

const CaseStudyWrapper = styled.div`
  margin: ${({ theme }) => theme.innerSpacing.s2} 0;
`

const SectionDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  text-align: center;
`

const FeatureGridSectionDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  text-align: center;
  margin: ${({ theme }) => theme.innerSpacing.s1} 0 ${({ theme }) => theme.outerSpacing.s1} 0;
  max-width: 25em;
  margin-left: auto;
  margin-right: auto;
  > a {
    ${({ theme }) => theme.textStyles.navigationHyperlink}
    text-decoration: underline;
  }
`

const FeatureImageCell = styled(ImageCell)`
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '100%'};
`

const FeatureSection = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  margin-left: auto;
  margin-right: auto;

  ${TextCell} { order: 2; padding-top: 0; }
  ${FeatureImageCell} { order: 1; margin-top: ${({ theme }) => theme.textSpacing.s1}; }
  ${MediaItem} { justify-content: left; }

  @media (min-width: 500px) {
    max-width: 40em;
    ${TextCell} { order: 1; padding-top: ${({ theme }) => theme.textSpacing.s1}; }
    ${FeatureImageCell} { order: 2; padding-left: 40px; }
  }
`

const FeatureSectionHeader = styled(SectionHeader)`
  text-align: inherit;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const FeatureSectionTagline = styled(SectionDescription)`
  text-align: inherit;
`

const FeatureSectionDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopy}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s2} 0;
  > a {
    ${({ theme }) => theme.textStyles.navigationHyperlink}
  }
`

export default page((props) => (
  <Page
    headTitle="Built for Enterprise"
    headDescription="Buildkite’s Enterprise plan gives you everything you need to build, test, and deliver software at scale."
    title="Built for Enterprise"
    description={
      <>
        Buildkite Enterprise provides the reliability <Br maxWidth="30em" /> and features you need for delivering software at scale.</>
    }
    {...props}
  >
    <FeatureSection>
      <FeatureSectionHeader>Scale</FeatureSectionHeader>
      <MediaItem>
        <TextCell>
          <FeatureSectionTagline>Architected for scale.</FeatureSectionTagline>
          <FeatureSectionDescription>Buildkite’s architecture uses modern scaling techniques, such as horizontal scaling and auto-scaling, to help you support massive engineering growth. And with Buildkite’s cloud agnostic design, you’re free to take advantage of new cloud platform features as they emerge, or even transition smoothly between cloud and compute platforms (including private cloud, and bare metal hardware).</FeatureSectionDescription>
        </TextCell>
        <FeatureImageCell maxWidth="240px">
          <ResponsiveImageContainer width={616} height={437}>
            <img src={scaleImage} alt="Graph trending up and to the right" />
          </ResponsiveImageContainer>
        </FeatureImageCell>
      </MediaItem>
    </FeatureSection>

    <FeatureSection>
      <FeatureSectionHeader>Security</FeatureSectionHeader>
      <MediaItem>
        <TextCell>
          <FeatureSectionTagline>Your data is our top priority.</FeatureSectionTagline>
          <FeatureSectionDescription>Buildkite provides clear platform boundaries where your security requirements can be enforced. The open-source buildkite-agent can be version controlled, audited, and locked down based on your requirements. And all source code stays behind your own firewall. See our <Link href="/security"><a>Security</a></Link> page for more details on our policies.</FeatureSectionDescription>
        </TextCell>
        <FeatureImageCell maxWidth="210px">
          <ResponsiveImageContainer width={532} height={509}>
            <img src={securityImage} alt="Safe with padlock" />
          </ResponsiveImageContainer>
        </FeatureImageCell>
      </MediaItem>
    </FeatureSection>

    <FeatureSection>
      <FeatureSectionHeader>Support</FeatureSectionHeader>
      <MediaItem>
        <TextCell>
          <FeatureSectionTagline>Consider us your Build Ops team.</FeatureSectionTagline>
          <FeatureSectionDescription>Get the support you need. Your team has live chat access to engineers via a shared Slack channel, a monthly call with a dedicated account manager, and pager access for undetected platform faults.</FeatureSectionDescription>
        </TextCell>
        <FeatureImageCell maxWidth="200px">
          <ResponsiveImageContainer width={491} height={394}>
            <img src={supportImage} alt="Chat speech bubble" />
          </ResponsiveImageContainer>
        </FeatureImageCell>
      </MediaItem>
    </FeatureSection>

    <Section>
      <SectionHeader>Exclusively on Buildkite Enterprise</SectionHeader>
      <FeatureGridSectionDescription>All of Buildkite’s <Link href="/features"><a>standard features</a></Link>,<Br maxWidth="25rem" /> with additional levels of security and support.</FeatureGridSectionDescription>

      <FeatureGrid>
        <FeatureCell>
          <FeatureTitle>24/7 Emergency Help</FeatureTitle>
          <FeatureDescription>
            Our standard technical support is during business hours, but with Buildkite Enterprise you get access to 24/7 help for emergency issues.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Prioritized Support</FeatureTitle>
          <FeatureDescription>
            Enterprise customers get priority support, including a dedicated private chat channel and guaranteed response times for high priority issues.
          </FeatureDescription>
        </FeatureCell>

        <FeatureCell>
          <FeatureTitle>Private Consultations</FeatureTitle>
          <FeatureDescription>
            Regular consultation with our Engineering and Account Management team. Help your team stay up to date with best practices and learn what features and developments are coming soon.
          </FeatureDescription>
        </FeatureCell>

        <FeatureCell>
          <FeatureTitle>99.95% SLA</FeatureTitle>
          <FeatureDescription>
            We understand that when your CI is down, your team can&apos;t work. We offer an uptime SLA on our key components, along with monitoring and alerting for your team.
          </FeatureDescription>
        </FeatureCell>

        <FeatureCell>
          <FeatureTitle>Single Sign On</FeatureTitle>
          <FeatureDescription>
            SSO for provisioning and login is supported for Google, Okta, OneLogin, ADFS (SAML) and custom SAML providers. Also available on the standard plan.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Access Control and Teams</FeatureTitle>
          <FeatureDescription>
            Manage permissions and teams with fine grained access control. And provide your organization with a default team for easy open sharing. Also available on the standard plan.
          </FeatureDescription>
        </FeatureCell>

        <FeatureCell>
          <FeatureTitle>Audit Logging</FeatureTitle>
          <FeatureDescription>
            Available only on the Enterprise plan, audit logging keeps a record of actions taken by users across your organization. The log can be explored via the web, or exported via the GraphQL API.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Reporting and Visibility</FeatureTitle>
          <FeatureDescription>
            Buildkite’s centralized platform gives you insight across your entire company’s engineering, and the GraphQL API allows you to easily create your own internal tools and metrics.
          </FeatureDescription>
        </FeatureCell>
      </FeatureGrid>
    </Section>

    <Section>
      <CaseStudiesHeader>Case Studies</CaseStudiesHeader>
      <CaseStudyWrapper><CaseStudyCallout noMargin caseStudy={shopify} /></CaseStudyWrapper>
      <CaseStudyWrapper><CaseStudyCallout noMargin caseStudy={rea} /></CaseStudyWrapper>
    </Section>

    <Callout
      heading="Talk to our team"
      description="We’re here to support your enterprise needs. Send us an email to arrange a call."
      url="mailto:sales@buildkite.com"
      buttonTitle="Email sales@buildkite.com"
    />
  </Page>
))
