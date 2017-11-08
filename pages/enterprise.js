import Page, { page } from 'components/Page'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Enterprise"
    title="Enterprise"
    description="TODO"
    loggedIn={loggedIn}
    >
  </Page>
))