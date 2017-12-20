import Link from 'next/link'
import styled from 'styled-components'

import Button from 'components/Button'
import { Grid, Cell } from 'components/Grid'

import * as theme from 'theme'

const image = require('../../assets/images/get-started/get-started.jpg');

const OffscreenH1 = styled.h1`
  ${theme.offscreen}
`

const Paragraph = styled.p`
  ${theme.textStyles.bodyCopyLarge}
`

const ImageCell = Cell.extend`
  text-align: right;
`

const Image = styled.img`
  width: 400px;
  max-width: 100%;

  @media (min-width: 350px) {
    margin-right: ${theme.innerSpacing.s2};
  }
`

const TextCell = Cell.extend`
  padding-top: ${theme.innerSpacing.s1};
`

export default () => (
  <section>
    <Grid>
      <ImageCell>
        <Image src={image} alt="" />
      </ImageCell>
      <TextCell>
        <OffscreenH1>Get Started</OffscreenH1>
        <Paragraph>Sign up for free, and connect your first agent.</Paragraph>
        <p>
          <Link href="/sign-up" passHref><Button primary>Get Started →</Button></Link>
        </p>
      </TextCell>
    </Grid>
  </section>
)