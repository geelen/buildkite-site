import styled from 'styled-components'

import { Grid, Cell } from 'components/Grid'
import Link from 'components/Link'

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  box-shadow: 0 50px 50px ${({ theme }) => theme.colors.backgrounds.grey};
`

const FooterInner = styled.div`
  ${({ theme }) => theme.maxWidthContainer}
  padding-top: ${({ theme }) => theme.innerSpacing.s2};
  padding-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const FooterLinkAnchor = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
  margin-right: ${({ theme }) => theme.innerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
  display: block;
`

const FooterLink = ({ children, href, external }) => (
  <Link href={href} external={external}>
    <FooterLinkAnchor>{children}</FooterLinkAnchor>
  </Link>
)

export default () => (
  <Footer>
    <FooterInner>
      <Grid columns="180px">
        <Cell>
          <nav>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/screencasts">Screencasts</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/enterprise">Enterprise</FooterLink>
          </nav>
        </Cell>
        <Cell>
          <nav>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/case-studies">Case Studies</FooterLink>
            <FooterLink href="/brand-assets">Brand Assets</FooterLink>
            <FooterLink href="/security">Security</FooterLink>
            {/* <FooterLink href="https://shop.buildkite.com/">Shop</FooterLink> */}
          </nav>
        </Cell>
        <Cell>
          <nav>
            <FooterLink href="/docs" external>Documentation</FooterLink>
            <FooterLink href="/support">Support</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="https://buildkitestatus.com/">System Status</FooterLink>
          </nav>
        </Cell>
      </Grid>
    </FooterInner>
  </Footer>
)