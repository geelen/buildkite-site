import Link from 'next/link'
import styled from 'styled-components'

import Button from 'components/Button'

import * as theme from 'theme'

const Section = styled.section`
  margin-top: ${theme.outerSpacing.s3};
  margin-bottom: ${theme.outerSpacing.s3};
  text-align: center;
`

const Header = styled.h1`
  ${theme.textStyles.secondLevelHeading}
  margin-top: 0;
  margin-bottom: ${theme.textSpacing.s1};
`

const Description = styled.p`
  ${theme.textStyles.bodyCopyLarge}
  max-width: 20em;
  margin-top: 0;
  margin-bottom: ${theme.innerSpacing.s2};
  margin-left: auto;
  margin-right: auto;
`

const LinkSection = styled.p`
  margin: 0;
`

export default ({ heading, description, url, buttonTitle }) => (
  <Section>
    <Header>{heading}</Header>
    <Description>{description}</Description>
    <LinkSection>
      <Link href={url} passHref><Button>{buttonTitle}</Button></Link>
    </LinkSection>
  </Section>
)