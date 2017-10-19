import Link from 'next/link'
import styled from 'styled-components'

import Button from 'components/Button'

import * as theme from 'theme'

const Section = styled.section`
  margin-top: ${theme.outerSpacing.s2};
  margin-bottom: ${theme.outerSpacing.s2};
  text-align: center;
`

const Header = styled.h1`
  ${theme.textStyles.secondLevelHeading}
`

export default ({ heading, description, url, buttonTitle }) => (
  <Section>
    <Header>{heading}</Header>
    <p>{description}</p>
    <p><Link href={url} passHref><Button>{buttonTitle}</Button></Link></p>
  </Section>
)