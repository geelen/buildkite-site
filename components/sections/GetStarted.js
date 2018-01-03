import Link from 'next/link'
import styled from 'styled-components'

import Button from 'components/Button'

const image = require('../../assets/images/get-started/get-started.jpg');

const OffscreenH1 = styled.h1`
  ${({ theme }) => theme.offscreen};
`

const Paragraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -${({ theme }) => theme.innerSpacing.s1};
`

const ImageCell = styled.div`
  flex: 1 2 300px;
  padding: ${({ theme }) => theme.innerSpacing.s1};
  text-align: center;
`

const TextCell = styled.div`
  padding-top: ${({ theme }) => theme.innerSpacing.s1};
  flex: 2 3 300px;
  padding: ${({ theme }) => theme.innerSpacing.s1};
`

const Image = styled.img`
  width: 400px;
  max-width: 100%;
`

export default () => (
  <section>
    <ImageGrid>
      <ImageCell>
        <Image src={image} alt="" />
      </ImageCell>
      <TextCell>
        <OffscreenH1>Get Started</OffscreenH1>
        <Paragraph>Sign up for free, and connect your first agent.</Paragraph>
        <p>
          <Link href="/sign-up" passHref>
            <Button primary>Get Started →</Button>
          </Link>
        </p>
      </TextCell>
    </ImageGrid>
  </section>
)