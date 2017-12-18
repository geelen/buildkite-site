import Page, { page } from 'components/Page'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Security"
    title="Security"
    description="TODO"
    loggedIn={loggedIn}
  >
  </Page>
))