import styled from 'styled-components'

import Br from 'components/Br'
import Button from 'components/Button'
import CenteredLink from 'components/CenteredLink'
import { OffscreenH1 } from 'components/OffscreenHeading'

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
  text-align: center;
`

const Paragraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
  text-align: center;
`

export default () => (
  <Section>
    <OffscreenH1>Screencasts</OffscreenH1>
    <Paragraph>
      See how Buildkite works in production, <Br maxWidth='30em'/>with our short series of 90 second videos.
    </Paragraph>
    <CenteredLink href="/screencasts">
      <Button>View the screencasts</Button>
    </CenteredLink>
  </Section>
)