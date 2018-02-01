import styled from 'styled-components'

import Br from 'components/Br'
import Button from 'components/Button'
import Callout from 'components/Callout'
import CaseStudyCallout from 'components/CaseStudyCallout'
import Link from 'components/Link'
import Page, { page } from 'components/Page'
import { FeatureGrid, FeatureCell, FeatureTitle, FeatureDescription } from 'components/FeatureGrid'

import { shopify } from './case-studies/_data'

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
`

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  text-align: center;
`

const SectionDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  text-align: center;
`

const FeatureSection = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  text-align: ${({ align }) => align || 'left'};
  margin-${({ align }) => align === 'right' ? 'left' : 'right'}: auto;
  max-width: 30rem;
`

const FeatureSectionHeader = SectionHeader.extend`
  text-align: inherit;
`

const FeatureSectionTagline = SectionDescription.extend`
  text-align: inherit;
`

const FeatureSectionDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s2} 0;
`

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Enterprise"
    title="Enterprise"
    description={
      <span>
        Everything you need to build, test and <Br maxWidth="30em" />
        deliver software at scale
      </span>
    }
    loggedIn={loggedIn}
    >

    {/* (callout to Thoughtworks Technology Radar) */}
    <FeatureSection>
      <FeatureSectionHeader>Scale</FeatureSectionHeader>
      <FeatureSectionTagline>Our scalable platform lets your company grow.</FeatureSectionTagline>
      <FeatureSectionDescription>Distributed build agents with cloud scaling enables you to scale as big as you need, as soon as you need it. With elastic scaling, you no longer have to choose between power and cost savings.</FeatureSectionDescription>
    </FeatureSection>

    <FeatureSection align="right">
      <FeatureSectionHeader>Security</FeatureSectionHeader>
      <FeatureSectionTagline>Your data is our top priority.</FeatureSectionTagline>
      <FeatureSectionDescription>Our team is uncompromising in our approach to security. Your code never passes through our servers, and you run Buildkite agents behind your own firewall. Find out more about our platform and company security on our Security page.</FeatureSectionDescription>
    </FeatureSection>

    <FeatureSection>
      <FeatureSectionHeader>Support</FeatureSectionHeader>
      <FeatureSectionTagline>Get the most out of Buildkite.</FeatureSectionTagline>
      <FeatureSectionDescription>Our Enterprise customers receive priority support and a dedicated account manager. A private support chat for your engineers provides help to your team as soon as they need it.</FeatureSectionDescription>
    </FeatureSection>

    <Section>
      <SectionHeader>Customers</SectionHeader>
      <SectionDescription>You’ll be in good company</SectionDescription>    
      <p>(logos)</p>
    </Section>

    <Section>
      <SectionHeader>Enterprise plan features</SectionHeader>
      <SectionDescription>All the features your organisation needs.</SectionDescription>

      <FeatureGrid>
        <FeatureCell>
          <FeatureTitle>Single Sign On</FeatureTitle>
          <FeatureDescription>
            Support for the type of Single Sign On your company uses, including login, provisioning, Okta, SAML, etc.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Granular Access Control</FeatureTitle>
          <FeatureDescription>
            Control which users have access to projects and resources from within your settings page.
          </FeatureDescription>
        </FeatureCell>      
        <FeatureCell>
          <FeatureTitle>Audit Logging</FeatureTitle>
          <FeatureDescription>
            All the interactions your team members have with Buildkite are logged. Explore and export these logs with our extensive APIs.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Team Management</FeatureTitle>
          <FeatureDescription>
            Self-manage your team’s permissions and automate provisioning for new team members with our granular team management settings.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Reporting and Visibility</FeatureTitle>
          <FeatureDescription>
          Some words about how provides a single record of truth, with APIs allowing for extensive visibility.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Service Level Agreement</FeatureTitle>
          <FeatureDescription>
            An uptime SLA of 99.95%, and a maximum response time of 24 hours for support requests.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Platform Agnostic</FeatureTitle>
          <FeatureDescription>
            Public cloud and private cloud support, containers, functions, Lambda, monkeys and all the future magic.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Integrations</FeatureTitle>
          <FeatureDescription>
            In-built integration with GitHub Enterprise, BitBucket, Phabricator, GitLab, Slack, and HipChat.
          </FeatureDescription>
        </FeatureCell>
      </FeatureGrid>
    </Section>

    <Section>
      <SectionHeader>Case Study</SectionHeader>
      
      <CaseStudyCallout caseStudy={shopify} />

      <p style={{ textAlign: 'center' }}>
        <Link href="/case-studies">
          <Button>View more case studies</Button>
        </Link>
      </p>
    </Section>

    <Callout
      heading="Talk to our team"
      description="We're here to support your enterprise needs. Send us an email to arrange a call."
      url="mailto:sales@buildkite.com"
      buttonTitle="Email sales@buildkite.com"
    />
  </Page>
))