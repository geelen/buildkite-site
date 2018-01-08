import Page, { page } from 'components/Page'
import Screencast from 'components/Screencast'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Pipeline Step Types Buildkite Screencast"
    loggedIn={loggedIn}
    >
    <Screencast
      screencast={{ title: "Step Types", href: "/screencasts/pipeline-steps" }}
      nextScreencast={{ title: "Testing Docker", href: "/screencasts/docker"}}
    />
  </Page>
))