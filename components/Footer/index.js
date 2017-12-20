import Link from 'next/link'
import styled from 'styled-components'

import * as theme from 'theme'
import Header from 'components/Header'
import Pricing from '../../pages/pricing';
import {Grid, Cell} from '../Grid/index';

const Footer = styled.footer`
  background-color: ${theme.colors.backgrounds.grey};
  box-shadow: 0 50px 50px ${theme.colors.backgrounds.grey};
`

const FooterInner = styled.div`
  ${theme.maxWidthContainer}
  padding-top: ${theme.innerSpacing.s2};
  padding-bottom: ${theme.innerSpacing.s2};
`

const FooterLinkAnchor = styled.a`
  ${theme.textStyles.hyperlink}
  margin-right: ${theme.innerSpacing.s1};
  margin-bottom: ${theme.textSpacing.s1};
  display: block;
`

const FooterLink = ({ children, href }) => (
  <Link href={href} passHref>
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
            <FooterLink href="https://shop.buildkite.com/">Shop</FooterLink>
          </nav>
        </Cell>
        <Cell>
          <nav>
            <FooterLink href="/docs">Documentation</FooterLink>
            <FooterLink href="/support">Support</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
            <FooterLink href="https://buildkitestatus.com/">System Status</FooterLink>
         </nav>
        </Cell>
      </Grid>
    </FooterInner>
  </Footer>
)