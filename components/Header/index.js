import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import throttle from 'raf-throttle'

import * as theme from 'theme'
import LogoLink from './logo-link'
import LoadingBar from './loading-bar'
import MenuLink from './menu-link'
import Menu from './menu'

export const height = '70px';

const scrollTransparencyThreshold = 60;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${height};
  box-shadow: ${props => props.shadow ? theme.boxShadows.menuBar : '0 0 15px rgba(0, 0, 0, 0)'};
  padding: ${theme.innerSpacing.s1};
  background-color: white;
  will-change: box-shadow;
  transition: box-shadow ${theme.timings.color};
  z-index: 10;
`;

const Content = styled.div`
  ${theme.maxWidthContainer}
  display: flex;
  align-items: center;
  line-height: 1;
`;

const LinkContainer = styled.div`
  flex: 2;
  text-align: ${props => props.left ? 'left' : 'right'};
`;

const LinkAnchor = styled.a`
  color: ${props => props.active ? theme.colors.text.green : 'black'};
  text-decoration: none;
  margin-left: ${props => props.right ? theme.innerSpacing.s1 : 0};
  margin-right: ${props => props.left ? theme.innerSpacing.s1 : 0};
  font-weight: bold;
  transition: color ${theme.timings.color};
  will-change: color;
  flex: none;
  &:hover {
    color: ${theme.colors.text.green};
  }
  ${props => props.widescreenOnly && css`
    @media (max-width: 799px) {
      display: none;
    }
  `}
`

const NavLink = withRouter(({ children, router, href, prefetch, left, right, widescreenOnly }) => {
  return (
    <Link prefetch href={href} passHref>
      <LinkAnchor
        left={left}
        right={right}
        widescreenOnly={widescreenOnly}
        active={router.pathname === href}
      >
        {children}
      </LinkAnchor>
    </Link>
  )
})

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      showMenu: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
    this.checkScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  render() {
    return (
      <div>
        <HeaderWrapper shadow={this.state.scrolled || this.state.showMenu}>
          <LoadingBar/>
          <Content>
            <LinkContainer left>
              <MenuLink onClick={this.handleMenuLinkClick} />
              <NavLink left prefetch widescreenOnly href="/features">
                Features
              </NavLink>
              <NavLink left prefetch widescreenOnly href="/screencasts">
                Screencasts
              </NavLink>
              <NavLink left prefetch widescreenOnly href="/support">
                Support
              </NavLink>
            </LinkContainer>
            <LogoLink/>
            <LinkContainer right>
              <NavLink right prefetch widescreenOnly href="/about">
                About
              </NavLink>
              <NavLink right prefetch widescreenOnly href="/pricing">
                Pricing
              </NavLink>
              <NavLink right prefetch widescreenOnly href="/login">
                Login
              </NavLink>
              <NavLink right prefetch href="/sign-up">
                Signup
              </NavLink>
            </LinkContainer>
          </Content>
        </HeaderWrapper>
        {this.state.showMenu && <Menu top={height} />}
      </div>
    );
  }

  handleWindowScroll = throttle(() => this.checkScroll())

  handleMenuLinkClick = (e) => {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu })
  }

  checkScroll() {
    if (window.scrollY > scrollTransparencyThreshold) {
      if (!this.state.scrolled) {
        this.setState({scrolled: true});
      }
    } else {
      if (this.state.scrolled) {
        this.setState({scrolled: false});
      }
    }
  }
}
