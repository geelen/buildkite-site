import Page, { page } from 'components/Page'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Get Started with Buildkite"
    title="Get Started"
    description="TODO"
    loggedIn={loggedIn}
  >
  </Page>
))