import styled from 'styled-components'

import Link from 'components/Link'

const Menu = styled.nav`
  ${({ theme }) => theme.maxWidthContainer}
  position: absolute;
  width: 100%;
  background-color: rgba(255,255,255,.98);
  padding: 30px ${({ theme }) => theme.innerSpacing.s1};
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

const MenuLink = ({ children, href, external }) => (
  <Link href={href} external={external}>
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
    <MenuLink href="/case-studies">
      Case Studies
    </MenuLink>
    <MenuLink href="/pricing">
      Pricing
    </MenuLink>
    <MenuLink href="/docs">
      Documentation
    </MenuLink>
    <MenuLink href="/support">
      Support
    </MenuLink>
    <MenuLink href="/about">
      About
    </MenuLink>
    <MenuLink href="/login" external>
      Login
    </MenuLink>
  </Menu>
)