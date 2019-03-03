import styled from 'styled-components'

import Link from 'components/Link'
import Page, { page } from 'components/Page'
import { ResponsiveVideoContainer } from 'components/ResponsiveContainer'
import RawScreencastLink from 'components/ScreencastLink'

import screencasts from './_data'

const Wrapper = styled.div`
  text-align: center;
  margin-top: 0;

  @media (min-width: 350px) {
    margin-top: -10px;
  }

  @media (min-width: 640px) {
    margin-top: -50px;
  }

  @media (min-width: 960px) {
    margin-top: -${({ theme }) => theme.outerSpacing.s1};
  }
`

const ScreencastParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.innerSpacing.s1} auto;
  max-width: 35em;
`

const VideoContainer = styled(ResponsiveVideoContainer)`
  ${({ theme }) => theme.images.screenshots}
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
  width: 100%;
  max-width: 440px;
`

const Sentencify = ({ children: rawChildren, separator = ', ', lastSeparator = ' and ' }) => (
  React.Children.toArray(rawChildren).reduce((acc, child, index, children) => {
    if (index > 0) {
      if (index < children.length - 1) {
        acc.push(separator)
      }

      if (index === children.length - 1) {
        acc.push(lastSeparator)
      }
    }

    acc.push(child)

    return acc
  }, [])
)

export default function screencastPage(pathname) {
  const index = screencasts.findIndex((screencast) => screencast.pathname === pathname)
  const screencast = screencasts[index]
  const nextScreencast = screencasts[index + 1] || screencasts[0]

  return page((props) => (
    <Page
      title={screencast.title}
      description={screencast.description}
      headTitle={`${screencast.title} - Buildkite Screencasts`}
      headImage={screencast.images.poster}
      video={screencast.videos.mp4}
      {...props}
    >
      <Wrapper>
        <ScreencastParagraph>{`Duration: ${screencast.duration}`}</ScreencastParagraph>

        <VideoContainer width={1920} height={1080}>
          <video
            controls
            playsInline
            preload="auto"
            poster={screencast.images.poster}
            data-matomo-title={`Screencast - ${screencast.title}`}
          >
            <source src={screencast.videos.webm} type="video/webm" />
            <source src={screencast.videos.mp4} type="video/mp4" />
          </video>
        </VideoContainer>

        {screencast.relatedDocumentation && (
          <ScreencastParagraph>
            {'Related documentation: '}
            <Sentencify>
              {screencast.relatedDocumentation.map(({ title, url }) => (
                <Link href={url} external key={`[${title}](${url})`}>
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