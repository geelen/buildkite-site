import Page, { page } from 'components/Page'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Pricing"
    title="Pricing"
    description="TODO"
    loggedIn={loggedIn}
    >
  </Page>
))