import styled from 'styled-components'

import { Grid, Cell } from 'components/Grid'
import Link from 'components/Link'

import portraitLogo from '../../assets/images/brand-assets/buildkite-logo-portrait-on-light.svg'

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

const SmallNav = styled.nav`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  ${FooterLinkAnchor} {
    margin-bottom: .25em;
  }
`

const LogoImage = styled.img`
  max-width: 80px;
`

export default ({ loggedIn }) => (
  <Footer>
    <FooterInner>
      <Grid columns="200px">
        <Cell>
          <Link href={loggedIn ? "/home" : "/"}>
            <a><LogoImage src={portraitLogo} alt="Buildkite" /></a>
          </Link>
        </Cell>
        <Cell>
          <nav>
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/screencasts">Screencasts</FooterLink>
            <FooterLink href="/case-studies">Case Studies</FooterLink>
            <FooterLink href="/enterprise">Enterprise</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
          </nav>
        </Cell>
        <Cell>
          <SmallNav>
            <FooterLink href="/docs" external>Documentation</FooterLink>
            <FooterLink href="/support">Support</FooterLink>
            <FooterLink href="/plugins">Plugins</FooterLink>
            <FooterLink href="https://buildkite.com/changelog" external>Changelog</FooterLink>
            <FooterLink href="/security">Security</FooterLink>
            <FooterLink href="https://forum.buildkite.community/" external>Community Forum</FooterLink>
            <FooterLink href="https://buildkitestatus.com/" external>System Status</FooterLink>
          </SmallNav>
        </Cell>
        <Cell>
          <SmallNav>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="/brand-assets">Brand Assets</FooterLink>
            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="https://shop.buildkite.com/" external>Shop</FooterLink>
          </SmallNav>
        </Cell>
      </Grid>
    </FooterInner>
  </Footer>
)
