import styled from 'styled-components'
import Link from 'next/link'

import { Grid, Cell } from 'components/Grid'
import Page, { page } from 'components/Page'
import Br from 'components/Br'

import screencasts from './screencasts/_data'

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
      {screencasts.map((screencast, index) => (
        <Cell id={index}>
          <Link href={screencast.pathname}>
            <a>
              <h2>{screencast.title}</h2>
              <ScreenshotImage src={screencast.image} />
              <p>Duration: {screencast.duration}</p>
            </a>
          </Link>
        </Cell>
      ))}
    </Grid>
  </Page>
))