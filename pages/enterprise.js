import Link from 'next/link'

import Br from 'components/Br'
import Button from 'components/Button'
import Callout from 'components/Callout'
import CaseStudyCallout from 'components/CaseStudyCallout'
import Page, { page } from 'components/Page'
import { FeatureGrid, FeatureCell, FeatureTitle, FeatureDescription } from 'components/FeatureGrid'

import { shopify } from './case-studies/_data'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Enterprise"
    title="Enterprise"
    description={<span>Build, test and deliver software at scale.</span>}
    loggedIn={loggedIn}
    >

    (callout to Thoughtworks Technology Radar)

    <h2>Scale</h2>
    <p>Our scalable platform lets your company grows.</p>
    <p>Distributed build agents with cloud scaling enables you to scale as big as you need, as soon as you need it. With elastic scaling, you no longer have to choose between power and cost savings.</p>

    <h2>Security</h2>
    <p>Your data is our top priority.</p>
    <p>Our team is uncompromising in our approach to security. Your code never passes through our servers, and you run Buildkite agents behind your own firewall. Find out more about our platform and company security on our Security page.</p>

    <h2>Enterprise</h2>
    <p>Our Enterprise customers receive priority support and a dedicated account manager. A private support chat for your engineers provides help to your team as soon as they need it.</p>

    <h2>Customers</h2>
    <p>You’ll be in good company</p>    
    <p>(logos)</p>

    <h2>Enterprise plan features</h2>
    <p>All the features your organisation needs.</p>

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

    <h2>Case Study</h2>
    
    <CaseStudyCallout caseStudy={shopify} />
    
    <Link href="/case-studies" passHref>
      <Button>View more case studies</Button>
    </Link>

    <Callout
      heading="Talk to our team"
      description="We're here to support your enterprise needs. Send us an email to arrange a call."
      url="mailto:sales@buildkite.com"
      buttonTitle="Email sales@buildkite.com"
    />
  </Page>
))