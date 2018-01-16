import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import Page, { page } from 'components/Page'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Contact Buildkite"
    title="Contact Us"
    description="We’d love to hear from you."
    loggedIn={loggedIn}
  >
    <ActionGrid columns="280px">
      <ActionGridItem
        heading="Feedback & Suggestions"
        image=""
        imageAlt=""
        description="Have a request or idea? Let us know what you'd like to see."
        url="https://github.com/buildkite/feedback/issues"
        buttonTitle="Open a GitHub Issue"
      />
      <ActionGridItem
        heading="Report a Vulnerability"
        image=""
        imageAlt=""
        description="Found a security issue? Request an invite to our bug bounty."
        url="mailto:security@buildkite.com"
        buttonTitle="security@buildkite.com"
      />
      <ActionGridItem
        heading="Questions & Support"
        image=""
        imageAlt=""
        description="Things not going smoothly? Our team is here to help."
        url="mailto:support@buildkite.com"
        buttonTitle="support@buildkite.com"
      />
      <ActionGridItem
        heading="Say Hello!"
        image=""
        imageAlt=""
        description="For press enquries and anything else, drop us a line."
        url="mailto:hello@buildkite.com"
        buttonTitle="hello@buildkite.com"
      />
    </ActionGrid>

    <Callout
      heading="Anyting else?"
      description="Our friendly support team can help."
      url="mailto:support@buildkite.com"
      buttonTitle="support@buildkite.com"
    />
  </Page>
))