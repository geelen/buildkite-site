import { Grid } from 'components/Grid'
import Page, { page } from 'components/Page'
import Br from 'components/Br'
import ScreencastLink from 'components/ScreencastLink'

import screencasts from '../../lib/data/screencasts'

import openGraphImage from '../../assets/images/open-graph/screencasts.png'

export default page((props) => (
  <Page
    headTitle="Buildkite Screencasts"
    title="Screencasts"
    description={
      <>
        See how Buildkite works in production, <Br maxWidth="30em" />
        with this series of short videos.
      </>
    }
    headImage={openGraphImage}
    {...props}
  >
    <Grid columns={2} minWidth="400px">
      {screencasts.map((screencast) => (
        <ScreencastLink
          screencast={screencast}
          key={screencast.pathname}
        />
      ))}
    </Grid>
  </Page>
))