import styled from 'styled-components'
import Link from 'next/link'

import { Grid, Cell } from 'components/Grid'
import Page, { page } from 'components/Page'
import Br from 'components/Br'

const placeholderImage = require('../assets/images/screencasts/placeholder.png')

const ScreenshotImage = styled.img`
  width: 400px;
  max-width: 100%;
`

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Screencasts"
    title="Screencasts"
    description={<span>See how Buildkite works in production, <Br maxWidth='30em'/>with this short series of 90 second videos.</span>}
    loggedIn={loggedIn}
  >
    <Grid columns="180px">
      <Cell>
        <Link href="/screencasts/pipeline-steps">
          <a>
            <h2>Pipeline Steps</h2>
            <ScreenshotImage src={placeholderImage} />
            <p>Duration: 90s</p>
          </a>
        </Link>
      </Cell>
      <Cell>
        <Link href="/screencasts/github">
          <a>
            <h2>GitHub Pull Requests</h2>
            <ScreenshotImage src={placeholderImage} />
            <p>Duration: 90s</p>
          </a>
        </Link>
      </Cell>
      <Cell>
        <Link href="/screencasts/docker">
          <a>
            <h2>Testing with Docker</h2>
            <ScreenshotImage src={placeholderImage} />
            <p>Duration: 90s</p>
          </a>
        </Link>
      </Cell>
      <Cell>
        <Link href="/screencasts/ops">
          <a>
            <h2>Ops Pipelines</h2>
            <ScreenshotImage src={placeholderImage} />
            <p>Duration: 90s</p>
          </a>
        </Link>
      </Cell>
    </Grid>
  </Page>
))