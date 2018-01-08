import Page, { page } from 'components/Page'
import Br from 'components/Br'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Screencasts"
    title="Screencasts"
    description={<span>See how Buildkite works in production, <Br maxWidth='30em'/>with this short series of 90 second videos.</span>}
    loggedIn={loggedIn}
  >
    <div>
      <h2></h2>
    </div>
  </Page>
))