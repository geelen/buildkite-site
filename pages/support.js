import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import Page, { page } from 'components/Page'

const documentationImage = require('../assets/images/support/documentation.jpg')
const feedbackImage = require('../assets/images/contact/feedback.jpg')
const communityChatImage = require('../assets/images/support/community-chat.jpg')
const systemStatusImage = require('../assets/images/support/system-status.jpg')

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Support"
    title="Support"
    description="We’re here to help."
    loggedIn={loggedIn}
  >
    <ActionGrid>
      <ActionGridItem
        heading="Documentation"
        image={documentationImage}
        imageWidth={455}
        imageAlt=""
        description="Find reference pages, how-to guides, and more in our documentation."
        url="/docs"
        buttonTitle="View the Docs"
      />
      <ActionGridItem
        heading="Feedback"
        image={feedbackImage}
        imageWidth={466}
        imageAlt=""
        description="Report bugs and find answers to solved problems in our Feedback repository."
        url="https://github.com/buildkite/feedback/issues"
        buttonTitle="GitHub Issues"
      />
      <ActionGridItem
        heading="Community Chat"
        image={communityChatImage}
        imageWidth={415}
        imageAlt=""
        description="Ask questions and chat with other Buildkite users in our Slack community."
        url="https://chat.buildkite.com"
        buttonTitle="Buildkite Chat Slack"
      />
      <ActionGridItem
        heading="System Status"
        image={systemStatusImage}
        imageWidth={452}
        imageAlt=""
        description="Keep track of Buildkite and connected third party services on our Status page."
        url="https://buildkitestatus.com"
        buttonTitle="buildkitestatus.com"
      />
    </ActionGrid>

    <Callout
      heading="Need Help?"
      description="If you can’t find an answer to your question, send us an email and we’ll help you out."
      url="mailto:support@buildkite.com"
      buttonTitle="support@buildkite.com"
    />

    <Callout
      heading="Enterprise Support"
      description="Customers on an enterprise plan have access to our Priority Support. Guaranteed 24 hour response time to any queries, and a private chat room for your team to ask questions directly to ours. "
      url="mailto:enterprise.support@buildkite.com"
      buttonTitle="enterprise.support@buildkite.com"
    />
  </Page>
))