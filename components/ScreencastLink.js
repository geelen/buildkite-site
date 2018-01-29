import styled from 'styled-components'

import Link from 'components/Link'

const ScreencastLink = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  display: block;
  text-align: center;
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

export default ({ screencast, ...props }) => (
  <Link href={screencast.pathname} prefetch>
    <ScreencastLink {...props}>
      <ScreenshotImage src={screencast.images.thumbnail} />
      <ScreencastTitle>
        {screencast.title}
      </ScreencastTitle>
      <ScreencastDetail>
        Duration: {screencast.duration}
      </ScreencastDetail>
    </ScreencastLink>
  </Link>
)
