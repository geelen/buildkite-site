import styled from 'styled-components'

import Link from 'components/Link'
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
  margin: ${({ theme }) => theme.innerSpacing.s1} 0;
`

const ScreencastParagraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.innerSpacing.s1} 0;
`

const ScreenshotImage = styled.img`
  ${({ theme }) => theme.images.screenshots}
  width: 800px;
  max-width: 100%;
  margin: ${({ theme }) => theme.innerSpacing.s2} 0;
`

const DocumentationLink = styled.a`
  ${({ theme }) => theme.textStyles.hyperlink}
`

const NextScreencastHeader = styled.h2`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const ScreencastLink = styled(RawScreencastLink)`
  display: inline-block;
`

const Zip = ({ children: rawChildren, separator=', ', lastSeparator=' and ' }) => (
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
      headTitle={screencast.headTitle}
      loggedIn={loggedIn}
    >
      <Wrapper>
        <Link href="/screencasts">
          <IndexLink>Screencasts</IndexLink>
        </Link>

        <ScreencastTitle>
          {screencast.title}
        </ScreencastTitle>
        <ScreencastParagraph>
          {screencast.description}
        </ScreencastParagraph>

        <ScreenshotImage src={screencast.image} />

        {screencast.relatedDocumentation && (
          <ScreencastParagraph>
            {'Related documentation: '}
            <Zip>
              {screencast.relatedDocumentation.map(({ title, url }, index) => (
                <Link href={url} external key={index}>
                  <DocumentationLink>{title}</DocumentationLink>
                </Link>
              ))}
            </Zip>
          </ScreencastParagraph>
        )}

        <NextScreencastHeader>Next up…</NextScreencastHeader>
        <ScreencastLink screencast={nextScreencast} />
      </Wrapper>
    </Page>
  ))
}