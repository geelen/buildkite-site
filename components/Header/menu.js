import { withRouter } from 'next/router'
import styled from 'styled-components'

import Link from 'components/Link'

const Menu = styled.nav`
  ${({ theme }) => theme.maxWidthContainer}
  position: absolute;
  width: 100%;
  background-color: rgba(255,255,255,.98);
  padding: ${({ theme }) => theme.innerSpacing.s1};
  box-shadow: ${({ theme }) => theme.boxShadows.menuBar};
`

const MenuLinkAnchor = styled.a`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  font-weight: bold;
  display: block;
  line-height: 1;
  padding: ${({ theme }) => theme.innerSpacing.s0} 0;
`

const MenuLink = withRouter(({ children, router, href, external }) => {
  // The following should both mark it as active
  // "/case-studies" and "/case-studies"
  // "/case-studies" and "/case-studies/shopify"
  const active = router.pathname === href || router.pathname.indexOf(`${href}/`) === 0

  return (
    <Link href={href} external={external}>
      <MenuLinkAnchor
        active={active}
      >
        {children}
      </MenuLinkAnchor>
    </Link>
  )
})

export default ({ loggedIn, ...props }) => (
  <Menu {...props}>
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
    <MenuLink href="/docs" external>
      Documentation
    </MenuLink>
    <MenuLink href="/support">
      Support
    </MenuLink>
    <MenuLink href="/about">
      About
    </MenuLink>
    {loggedIn || (
      <MenuLink href="/login" external>
        Login
      </MenuLink>
    )}
  </Menu>
)