import Link from 'next/link'
import styled from 'styled-components'

import * as theme from 'theme'

const OffscreenH1 = styled.h1`
  ${theme.offscreen}
`

export default () => (
  <section>
    <OffscreenH1>Screencasts</OffscreenH1>
    <p>See what it’s like in production, with our short series of 60 second screencasts</p>
    <p>
      <Link href="/screencasts" passHref><a>View the screencasts</a></Link>
    </p>
  </section>
)