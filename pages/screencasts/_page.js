import styled from 'styled-components'

import Link from 'components/Link'
import Page, { page } from 'components/Page'
import RawScreencastLink from 'components/ScreencastLink'

import screencasts from './_data'

const Wrapper = styled.div`
  text-align: center;
  margin-top: -${({ theme }) => theme.outerSpacing.s1};
`

const IndexLink = styled.a`
  ${({ theme }) => theme.textStyles.mainCallout}
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
`

const ScreencastParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.innerSpacing.s1} auto;
  max-width: 35em;
`

const ScreenshotVideo = styled.video`
  ${({ theme }) => theme.images.screenshots}
  width: 800px;
  max-width: 100%;
  margin: ${({ theme }) => theme.innerSpacing.s2} 0;
`

const DocumentationLink = styled.a`
  ${({ theme }) => theme.textStyles.hyperlink}
  white-space: nowrap;
`

const NextScreencastHeader = styled.h2`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const ScreencastLink = styled(RawScreencastLink)`
  display: inline-block;
`

const Sentencify = ({ children: rawChildren, separator=', ', lastSeparator=' and ' }) => (
  React.Children.toArray(rawChildren).reduce((acc, child, index, children) => {
    if (index > 0 && index < children.length - 1) {
      acc.push(separator)
    }

    if (index === children.length - 1) {
      acc.push(lastSeparator)
    }

    acc.push(child)

    return acc
  }, [])
)

export default function screencastPage(pathname) {
  const index = screencasts.findIndex((screencast) => screencast.pathname == pathname);
  const screencast = screencasts[index];
  const nextScreencast = screencasts[index + 1] || screencasts[0];

  return page(({ loggedIn }) => (
    <Page
      title={screencast.title}
      description={screencast.description}
      headTitle={`${screencast.title} - Buildkite Screencasts`}
      loggedIn={loggedIn}
    >
      <Wrapper>
        <ScreencastParagraph>{`Duration: ${screencast.duration}`}</ScreencastParagraph>

        <ScreenshotVideo controls playsinline preload="auto" poster={screencast.images.poster}>
          <source src={screencast.videos.webm} type="video/webm"/>
          <source src={screencast.videos.mp4} type="video/mp4"/>
        </ScreenshotVideo>

        {screencast.relatedDocumentation && (
          <ScreencastParagraph>
            {'Related documentation: '}
            <Sentencify>
              {screencast.relatedDocumentation.map(({ title, url }, index) => (
                <Link href={url} external key={index}>
                  <DocumentationLink>{title}</DocumentationLink>
                </Link>
              ))}
            </Sentencify>
          </ScreencastParagraph>
        )}

        {screencast.exampleCode &&
          <ScreencastParagraph>
            You can read the <Link href={screencast.exampleCode} external>
              <DocumentationLink>example code on GitHub</DocumentationLink>
            </Link>
          </ScreencastParagraph>
        }

        <NextScreencastHeader>Next up…</NextScreencastHeader>
        <ScreencastLink screencast={nextScreencast} />
      </Wrapper>
    </Page>
  ))
}