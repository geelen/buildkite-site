import Page, { page } from 'components/Page'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Screencasts"
    title="Screencasts"
    description="TODO"
    loggedIn={loggedIn}
  >
  </Page>
))