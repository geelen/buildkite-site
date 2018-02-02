import { Grid } from 'components/Grid'
import Page, { page } from 'components/Page'
import Br from 'components/Br'
import ScreencastLink from 'components/ScreencastLink'

import screencasts from './_data'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Screencasts"
    title="Screencasts"
    description={
      <React.Fragment>
        See how Buildkite works in production, <Br maxWidth='30em'/>
        with this series of short videos.
      </React.Fragment>
    }
    loggedIn={loggedIn}
  >
    <Grid>
      {screencasts.map((screencast, index) => (
        <ScreencastLink
          screencast={screencast}
          key={index}
        />
      ))}
    </Grid>
  </Page>
))