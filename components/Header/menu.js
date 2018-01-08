import Link from 'next/link'
import styled from 'styled-components'

const Menu = styled.nav`
  ${({ theme }) => theme.maxWidthContainer}
  position: absolute;
  width: 100%;
  background-color: rgba(255,255,255,.98);
  padding: ${({ theme }) => theme.innerSpacing.s2} ${({ theme }) => theme.innerSpacing.s1};
  box-shadow: ${({ theme }) => theme.boxShadows.menuBar};
`

const MenuLinkAnchor = styled.a`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  font-weight: bold;
  display: block;
  line-height: 1;

  & + * {
    margin-top: ${({ theme }) => theme.innerSpacing.s1};
  }
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