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

const Anchor = styled.a`
  ${theme.textStyles.hyperlink}
  margin-right: ${theme.innerSpacing.s1};
  margin-bottom: ${theme.textSpacing.s1};
  display: block;
`

export default () => (
  <Footer>
    <FooterInner>
      <Grid columns="180px">
        <Cell>
          <nav>
            <Link href="/" passHref><Anchor>Home</Anchor></Link>
            <Link href="/features" passHref><Anchor>Features</Anchor></Link>
            <Link href="/screencasts" passHref><Anchor>Screencasts</Anchor></Link>
            <Link href="/pricing" passHref><Anchor>Pricing</Anchor></Link>
            <Link href="/enterprise" passHref><Anchor>Enterprise</Anchor></Link>
          </nav>
        </Cell>
        <Cell>
          <nav>
            <Link href="/about" passHref><Anchor>About</Anchor></Link>
            <Link href="/case-studies" passHref><Anchor>Case Studies</Anchor></Link>
            <Link href="/brand-assets" passHref><Anchor>Brand Assets</Anchor></Link>
            <Link href="/security" passHref><Anchor>Security</Anchor></Link>
            <Link href="https://shop.buildkite.com/" passHref><Anchor>Shop</Anchor></Link>
          </nav>
        </Cell>
        <Cell>
          <nav>
            <Link href="/docs" passHref><Anchor>Documentation</Anchor></Link>
            <Link href="/support" passHref><Anchor>Support</Anchor></Link>
            <Link href="/contact" passHref><Anchor>Contact Us</Anchor></Link>
            <Link href="https://buildkitestatus.com/" passHref><Anchor>System Status</Anchor></Link>
         </nav>
        </Cell>
      </Grid>
    </FooterInner>
  </Footer>
)