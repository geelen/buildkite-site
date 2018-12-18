import styled from 'styled-components'

import Button from 'components/Button'
import Link from 'components/Link'

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
  padding-top: ${({ theme }) => theme.outerSpacing.s1};
  padding-bottom: ${({ theme }) => theme.outerSpacing.s1};
  padding-left: ${({ theme, grey }) => (grey ? theme.innerSpacing.s1 : 0)} };
  padding-right: ${({ theme, grey }) => (grey ? theme.innerSpacing.s1 : 0)} };

  text-align: center;
  background-color: ${({ theme, grey }) => grey ? theme.colors.backgrounds.grey : 'transparent' }
`

const Header = styled.h1`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

const Description = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  max-width: 20em;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
  margin-left: auto;
  margin-right: auto;
`

const LinkSection = styled.p`
  margin: 0;
`

export default ({ heading, description, url, buttonTitle, ...props }) => (
  <Section {...props}>
    <Header>{heading}</Header>
    <Description>{description}</Description>
    <LinkSection>
      <Link href={url}><Button>{buttonTitle}</Button></Link>
    </LinkSection>
  </Section>
)