import Link from 'next/link'
import styled from 'styled-components'

import Button from 'components/Button'
import { Grid, Cell } from 'components/Grid'

import * as theme from 'theme'

const image = require('../../assets/images/get-started/get-started.png');

const OffscreenH1 = styled.h1`
  ${theme.offscreen}
`

const Paragraph = styled.p`
  ${theme.textStyles.bodyCopyLarge}
`

export default () => (
  <section>
    <Grid columns={2}>
      <Cell>
        <img src={image} alt="" />
      </Cell>
      <Cell>
        <OffscreenH1>Get Started</OffscreenH1>
        <Paragraph>Jump in, and connect your first agent.</Paragraph>
        <p>
          <Link href="/sign-up" passHref><Button primary>Get Started →</Button></Link>
        </p>
      </Cell>
    </Grid>
  </section>
)