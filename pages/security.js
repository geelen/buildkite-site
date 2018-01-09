import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Page, { page } from 'components/Page'

const vulnerabilityImage = require('../assets/images/security/vulnerability.jpg')
const securityImage = require('../assets/images/security/contact.jpg')

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Security"
    title="Security"
    description="TODO"
    loggedIn={loggedIn}
  >
    <ActionGrid columns="280px">
      <ActionGridItem
        heading="Report Vulnerability"
        image={vulnerabilityImage}
        imageAlt=""
        description="Request an invite to our responsible disclosure program on Hacker One"
        url="mailto:security@buildkite.com?subject=Vulnerability reporting invite"
        buttonTitle="Request Invite"
        note="For confidential information, please use our PGP key"
      />
      <ActionGridItem
        heading="Contact Security"
        image={securityImage}
        imageAlt=""
        description="For any security questions or concerns, you can email our team"
        url="mailto:security@buildkite.com"
        buttonTitle="Email security@buildkite.com"
        note="For confidential information, please use our PGP key"
      />
    </ActionGrid>
  </Page>
))