import Page, { page } from 'components/Page'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Login to Buildkite"
    title="Sign In"
    description="TODO"
    loggedIn={loggedIn}
    >
  </Page>
))