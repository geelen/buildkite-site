import Page, { page } from 'components/Page'
import Screencast from 'components/Screencast'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Devops Pipelines Buildkite Screencast"
    loggedIn={loggedIn}
    >
    <Screencast
      screencast={{ title: "Ops Pipelines", href: "/screencasts/ops" }}
      nextScreencast={{ title: "Pipeline Steps", href: "/screencasts/pipeline-steps"}}
    />
  </Page>
))