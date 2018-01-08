import Page, { page } from 'components/Page'
import Screencast from 'components/Screencast'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Github Integration Buildkite Screencast"
    loggedIn={loggedIn}
    >
    <Screencast
      screencast={{ title: "GitHub Pull Requests", href: "/screencasts/github" }}
      nextScreencast={{ title: "Ops Pipelines", href: "/screencasts/ops"}}
    />
  </Page>
))