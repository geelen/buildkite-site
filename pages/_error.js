import Page, { page } from 'components/Page'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Wheres that error"
    title="Error Not Found"
    description="TODO"
    loggedIn={loggedIn}
    >
    oh no it didn't work
  </Page>
))