import Link from 'next/link'
import styled from 'styled-components'
import * as theme from 'theme'

const Menu = styled.nav`
  ${theme.maxWidthContainer}
  background-color: rgba(255,255,255,.98);
  padding: ${theme.innerSpacing.s2} ${theme.innerSpacing.s1};
`

const MenuLinkAnchor = styled.a`
  color: ${props => props.active ? theme.colors.text.green : 'black'};
  text-decoration: none;
  font-weight: bold;
  transition: color ${theme.timings.color};
  will-change: color;
  display: block;
  line-height: 1;
  & + * {
    margin-top: ${theme.innerSpacing.s1};
  }
  ${theme.textStyles.bodyCopyLarge};
`

const MenuLink = ({ children, href }) => (
  <Link href={href} passHref>
    <MenuLinkAnchor>{children}</MenuLinkAnchor>
  </Link>
)

export default () => (
  <Menu>
    <MenuLink href="/features">
      Features
    </MenuLink>
    <MenuLink href="/screencasts">
      Screencasts
    </MenuLink>
    <MenuLink href="/support">
      Support
    </MenuLink>
    <MenuLink href="/pricing">
      Pricing
    </MenuLink>
    <MenuLink href="/login">
      Login
    </MenuLink>
  </Menu>
)