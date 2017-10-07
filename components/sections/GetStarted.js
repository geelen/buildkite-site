import Link from 'next/link'
import styled from 'styled-components'

import * as theme from 'theme'

const OffscreenH1 = styled.h1`
  ${theme.offscreen}
`

export default () => (
  <section>
    <OffscreenH1>Get Started</OffscreenH1>
    <p>Get started and connect your first agent.</p>
    <p>
      <Link href="/sign-up" passHref><a>Sign up</a></Link>
    </p>
  </section>
)