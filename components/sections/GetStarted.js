import styled from 'styled-components'

import Br from 'components/Br'
import Button from 'components/Button'
import Link from 'components/Link'
import { MediaItem, ImageCell, TextCell } from 'components/MediaItem'
import { OffscreenH1 } from 'components/OffscreenHeading'
import { ResponsiveImageContainer } from 'components/ResponsiveContainer'

import image from '../../assets/images/get-started/get-started.jpg'

const Paragraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const GetStartedText = TextCell.extend`
  text-align: center;

  @media (min-width: 600px) {
    text-align: initial;
  }
`

const ImageContainer = ResponsiveImageContainer.extend`
  max-width: 400px;
`

export default () => (
  <section>
    <MediaItem>
      <ImageCell>
        <ImageContainer width={800} height={437}>
          <img src={image} alt="Two people launching a pod" />
        </ImageContainer>
      </ImageCell>
      <GetStartedText>
        <OffscreenH1>Get Started</OffscreenH1>
        <Paragraph>Sign up for free, and <Br minWidth="30em" /> connect your first agent.</Paragraph>
        <p>
          <Link href="/signup" external>
            <Button primary>Get Started →</Button>
          </Link>
        </p>
      </GetStartedText>
    </MediaItem>
  </section>
)