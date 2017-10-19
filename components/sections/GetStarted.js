import Link from 'next/link'
import styled from 'styled-components'

import Button from 'components/Button'
import { Grid, Cell } from 'components/Grid'

import * as theme from 'theme'

const image = require('../../assets/images/get-started/get-started.png');

const Header = styled.h1`
  ${theme.textStyles.secondLevelHeading}
`

export default () => (
  <section>
    <Grid columns={2}>
      <Cell>
        <img src={image} alt="" />
      </Cell>
      <Cell>
        <Header>Get Started</Header>
        <p>Get started and connect your first agent.</p>
        <p>
          <Link href="/sign-up" passHref><Button>Sign up</Button></Link>
        </p>
      </Cell>
    </Grid>
  </section>
)