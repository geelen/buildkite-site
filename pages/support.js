import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import Page, { page } from 'components/Page'

import documentationImage from '../assets/images/support/documentation.jpg'
import feedbackImage from '../assets/images/contact/feedback.jpg'
import communityChatImage from '../assets/images/support/community-chat.jpg'
import systemStatusImage from '../assets/images/support/system-status.jpg'

export default page((props) => (
  <Page
    headTitle="Buildkite Support"
    headDescription="Support resources and Buildkite system status."
    title="Support"
    description="We’re here to help."
    {...props}
  >
    <ActionGrid>
      <ActionGridItem
        heading="Documentation"
        image={documentationImage}
        imageWidth={455}
        imageAlt="Schematic diagram of a rocket"
        description="Find getting started guides, how-to docs, and API documentation."
        url="/docs"
        external
        buttonTitle="View the Docs"
      />
      <ActionGridItem
        heading="Feedback & Suggestions"
        image={feedbackImage}
        imageWidth={466}
        imageAlt="Post-it note"
        description="Let us know about something you’d like added or improved in Buildkite."
        url="https://forum.buildkite.community/c/feature-requests"
        external
        buttonTitle="Post a Topic"
        adjustLeft={-18}
      />
      <ActionGridItem
        heading="Community Chat"
        image={communityChatImage}
        imageWidth={415}
        imageAlt="Chat bubbles"
        description="Chat with other developers using Buildkite in our open community Slack."
        url="https://chat.buildkite.community"
        buttonTitle="Request an Invite"
        adjustLeft={-4}
      />
      <ActionGridItem
        heading="System Status"
        image={systemStatusImage}
        imageWidth={452}
        imageAlt="Person looking at monitoring screens"
        description="Check the health of Buildkite’s critical components and services."
        url="https://buildkitestatus.com"
        buttonTitle="Visit buildkitestatus.com"
        adjustLeft={6}
      />
    </ActionGrid>

    <Callout
      heading="Need Help?"
      description="If you can’t find an answer to your question, send us an email and we’ll help you out."
      url="mailto:support@buildkite.com"
      buttonTitle="Email support@buildkite.com"
    />
  </Page>
))
