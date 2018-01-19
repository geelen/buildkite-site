import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import Page, { page } from 'components/Page'

const questionsImage = require('../assets/images/contact/questions.jpg')
const feedbackImage = require('../assets/images/contact/feedback.jpg')
const vulnerabilityImage = require('../assets/images/security/vulnerability.jpg')
const sayhelloImage = require('../assets/images/contact/sayhello.jpg')

export default page(({ loggedIn }) => (
  <Page
    headTitle="Contact Buildkite"
    title="Contact Us"
    description="We’d love to hear from you."
    loggedIn={loggedIn}
  >
    <ActionGrid>
      <ActionGridItem
        heading="Questions & Support"
        image={questionsImage}
        imageWidth={433}
        imageAlt=""
        description="Things not going smoothly? Our team is here to help."
        url="/support"
        buttonTitle="See Support"
      />
      <ActionGridItem
        heading="Feedback & Suggestions"
        image={feedbackImage}
        imageWidth={466}
        imageAlt=""
        description="Have a request or idea? Let us know what you'd like to see."
        url="https://github.com/buildkite/feedback/issues"
        buttonTitle="Open a GitHub Issue"
      />
      <ActionGridItem
        heading="Report a Vulnerability"
        image={vulnerabilityImage}
        imageAlt=""
        description="Found a security issue? Request an invite to our bug bounty."
        url="/security"
        buttonTitle="See Security Docs"
      />
      <ActionGridItem
        heading="Say Hello!"
        image={sayhelloImage}
        imageAlt=""
        description="For press enquries and anything else, drop us a line."
        url="mailto:hello@buildkite.com"
        buttonTitle="hello@buildkite.com"
      />
    </ActionGrid>

    <Callout
      heading="TODO: The Socials™"
      description="We're on all the socials you can think of"
      url=""
      buttonTitle="We just haven't linked 'em yet"
    />

    <Callout
      heading="Anyting else?"
      description="Our friendly support team can help."
      url="mailto:support@buildkite.com"
      buttonTitle="support@buildkite.com"
    />
  </Page>
))