import Page, { page } from 'components/Page'
import Screencast from 'components/Screencast'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Docker Integration Buildkite Screencast"
    loggedIn={loggedIn}
    >
    <Screencast
      screencast={{ title: "Testing Docker", href: "/screencasts/docker" }}
      nextScreencast={{ title: "Github Pull Requsts", href: "/screencasts/github"}}
    />
  </Page>
))