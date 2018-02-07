import styled from 'styled-components'

import Link from 'components/Link'
import { ResponsiveImageContainer } from 'components/ResponsiveContainer'

const ScreencastLink = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s1};
`

const ThumbnailImageContainer = ResponsiveImageContainer.extend`
  ${({ theme }) => theme.images.screenshots}
  width: 400px;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
  background-color: white;
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
      <ThumbnailImageContainer width={800} height={450}>
        <img src={screencast.images.thumbnail} alt={screencast.title} />
      </ThumbnailImageContainer>
      <ScreencastTitle>
        {screencast.title}
      </ScreencastTitle>
      <ScreencastDetail>
        Duration: {screencast.duration}
      </ScreencastDetail>
    </ScreencastLink>
  </Link>
)
