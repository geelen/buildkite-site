import Link from 'next/link'
import styled from 'styled-components'
import Page, { page } from 'components/Page'
import RawScreencastLink from 'components/ScreencastLink'

import screencasts from './_data'

const placeholderImage = require('../../assets/images/screencasts/placeholder.png')

const ScreenshotImage = styled.img`
  width: 800px;
  max-width: 100%;
`

const ScreencastLink = styled(RawScreencastLink)`
  display: inline-block;
`

export default function screencastPage(pathname) {
  const index = screencasts.findIndex((s) => s.pathname == pathname);
  const screencast = screencasts[index];
  const nextScreencast = screencasts[index + 1] || screencasts[0];

  return page(({ loggedIn }) => (
    <Page
      headTitle={screencast.headTitle}
      loggedIn={loggedIn}
      >
      <div>
        <p>
          <Link href="/screencasts">
            <a>Screencasts</a>
          </Link>
        </p>

        <h1>{screencast.title}</h1>
        <p>{screencast.description}</p>

        <ScreenshotImage src={screencast.image} />

        <p>
          Related documentation:
          {' '}
          {screencast.relatedDocumentation.map(({ title, url }, index) => (
            <Link href={url} key={index}>
              <a>{title}</a>
            </Link>
          ))}
        </p>

        <h2>Next up…</h2>
        <ScreencastLink screencast={nextScreencast} />
      </div>
    </Page>
  ))
}