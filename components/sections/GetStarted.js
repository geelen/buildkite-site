import Link from 'next/link'
import styled from 'styled-components'

import Button from 'components/Button'
import { MediaItem, ImageCell, TextCell } from 'components/MediaItem'

const image = require('../../assets/images/get-started/get-started.jpg');

const OffscreenH1 = styled.h1`
  ${({ theme }) => theme.offscreen};
`

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

const Image = styled.img`
  width: 400px;
  max-width: 100%;
`

export default () => (
  <section>
    <MediaItem>
      <ImageCell>
        <Image src={image} alt="" />
      </ImageCell>
      <GetStartedText>
        <OffscreenH1>Get Started</OffscreenH1>
        <Paragraph>Sign up for free, and connect your first agent.</Paragraph>
        <p>
          <Link href="/sign-up" passHref>
            <Button primary>Get Started →</Button>
          </Link>
        </p>
      </GetStartedText>
    </MediaItem>
  </section>
)