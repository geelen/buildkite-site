import styled from 'styled-components'

import Br from 'components/Br'
import Button from 'components/Button'
import Link from 'components/Link'
import { OffscreenH1 } from 'components/OffscreenHeading'

const stepTypesThumbnail = require('../../assets/images/screencasts/step-types-frame.thumbnail.jpg');

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

const CenteredButton = Button.withComponent('span').extend`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ScreencastLinkContainer = styled.a`
  display: inline-block;
  position: relative;
  white-space: nowrap;
  :hover ${CenteredButton} {
    background-color: ${({ theme }) => theme.colors.backgrounds.blackHover};
  }
`

const ScreencastImage = styled.img`
  ${({ theme }) => theme.images.screenshots}
  max-width: 400px;
  margin: 0 auto;
`

export default () => (
  <Section>
    <OffscreenH1>Screencasts</OffscreenH1>
    <Paragraph>
      See how it works in production, <Br maxWidth='30em'/>with our short series of 90 second videos…
    </Paragraph>
    <Link href="/screencasts">
      <ScreencastLinkContainer>
        <ScreencastImage src={stepTypesThumbnail} />
        <CenteredButton>View the screencasts</CenteredButton>
      </ScreencastLinkContainer>
    </Link>
  </Section>
)