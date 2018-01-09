import styled from 'styled-components'
import Link from 'next/link'

import { Grid, Cell } from 'components/Grid'
import Page, { page } from 'components/Page'
import Br from 'components/Br'

import screencasts from './screencasts/_data'

const ScreencastLink = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  display: block;
  text-align: center;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s1};
`

const ScreenshotImage = styled.img`
  ${({ theme }) => theme.images.screenshots}
  width: 400px;
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const ScreencastTitle = styled.h2`
  font-size: 18px;
`

const ScreencastDetail = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.subdued};
  transition: color ${({ theme }) => theme.timings.color};
  will-change: color;

  ${ScreencastLink}:hover > &, ${ScreencastLink}:focus > & {
    color: ${({ theme }) => theme.colors.text.green};
  }
`

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Screencasts"
    title="Screencasts"
    description={
      <span>
        See how Buildkite works in production, <Br maxWidth='30em'/>
        with this short series of 90 second videos.
      </span>
    }
    loggedIn={loggedIn}
  >
    <Grid>
      {screencasts.map((screencast, index) => (
        <Link key={index} href={screencast.pathname} passHref>
          <ScreencastLink>
            <ScreenshotImage src={screencast.image} />
            <ScreencastTitle>
              {screencast.title}
            </ScreencastTitle>
            <ScreencastDetail>
              Duration: {screencast.duration}
            </ScreencastDetail>
          </ScreencastLink>
        </Link>
      ))}
    </Grid>
  </Page>
))