import Link from 'next/link'
import styled from 'styled-components'
import Page, { page } from 'components/Page'
import RawScreencastLink from 'components/ScreencastLink'

import screencasts from './_data'

const placeholderImage = require('../../assets/images/screencasts/placeholder.png')

const Wrapper = styled.div`
  text-align: center;
`

const IndexLink = styled.a`
  ${({ theme }) => theme.textStyles.mainCallout}
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
`

const ScreencastTitle = styled.h1`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
`

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
      <Wrapper>
        <Link href="/screencasts" passHref>
          <IndexLink>Screencasts</IndexLink>
        </Link>

        <div>
          <ScreencastTitle>
            {screencast.title}
          </ScreencastTitle>
          <p>{screencast.description}</p>
        </div>

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

        <h3>Next up…</h3>
        <ScreencastLink screencast={nextScreencast} />
      </Wrapper>
    </Page>
  ))
}