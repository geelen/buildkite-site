import styled from 'styled-components'

import Button from 'components/Button'
import CenteredLink from 'components/CenteredLink'
import * as theme from 'theme'

const Section = styled.section`
  margin-top: ${theme.outerSpacing.s2};
  margin-bottom: ${theme.outerSpacing.s2};
  text-align: center;
`

const OffscreenH1 = styled.h1`
  ${theme.offscreen}
`

export default () => (
  <Section>
    <OffscreenH1>Screencasts</OffscreenH1>
    <p>See what it’s like in production, with our short series of 60 second screencasts</p>
    <CenteredLink href="/screencasts"><Button>View the screencasts</Button></CenteredLink>
  </Section>
)