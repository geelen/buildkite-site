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

const A = styled.a`
  margin-right: ${theme.innerSpacing.s1};
  margin-bottom: ${theme.textSpacing.s1};
  display: block;
`

export default () => (
  <Footer>
    <FooterInner>
      <Grid columns={3}>
        <Cell>
          <nav>
            <Link href="/" passHref><A>Home</A></Link>
            <Link href="/features" passHref><A>Features</A></Link>
            <Link href="/screencasts" passHref><A>Screencasts</A></Link>
            <Link href="/pricing" passHref><A>Pricing</A></Link>
            <Link href="/enterprise" passHref><A>Enterprise</A></Link>
          </nav>
        </Cell>
        <Cell>
          <nav>
            <Link href="/about" passHref><A>About</A></Link>
            <Link href="/case-studies" passHref><A>Case Studies</A></Link>
            <Link href="/brand-assets" passHref><A>Brand Assets</A></Link>
            <Link href="/security" passHref><A>Security</A></Link>
            <Link href="https://shop.buildkite.com/" passHref><A>Shop</A></Link>
          </nav>
        </Cell>
        <Cell>
          <nav>
            <Link href="/docs" passHref><A>Documentation</A></Link>
            <Link href="/support" passHref><A>Support</A></Link>
            <Link href="/contact" passHref><A>Contact Us</A></Link>
            <Link href="https://buildkitestatus.com/" passHref><A>System Status</A></Link>
         </nav>
        </Cell>
      </Grid>
    </FooterInner>
  </Footer>
)