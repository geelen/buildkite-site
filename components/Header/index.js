import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import throttle from 'raf-throttle'

import * as theme from 'theme'
import LogoLink from './logo-link'
import LoadingBar from './loading-bar'
import MenuLink from './menu-link'
import Menu from './menu'

const scrollTransparencyThreshold = 60;

const HeaderWrapper = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: ${props => props.shadow ? theme.boxShadows.menuBar : '0 0 15px rgba(0, 0, 0, 0)'};
  will-change: box-shadow;
  transition: box-shadow ${theme.timings.color};
  z-index: 10;
`;

const Content = styled.div`
  ${theme.maxWidthContainer}
  position: relative;
  background-color: white;
  padding: ${theme.innerSpacing.s1};
  display: flex;
  align-items: center;
  line-height: 1;
  box-shadow: ${props => props.shadow ? theme.boxShadows.menuBar : '0 0 15px rgba(0, 0, 0, 0)'};
  z-index: 1;
`;

const LinkContainer = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.left ? 'flex-start' : 'flex-end'};
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
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.text.green};
  }

  ${props => props.widescreenOnly && css`
    @media (max-width: 959px) {
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
    const shadow = this.state.scrolled || this.state.showMenu;

    return (
      <HeaderWrapper shadow={shadow}>
        <LoadingBar/>
        <Content shadow={this.state.showMenu}>
          <LinkContainer left>
            <MenuLink onClick={this.handleMenuLinkClick} />
            <NavLink left prefetch widescreenOnly href="/features">
              Features
            </NavLink>
            <NavLink left prefetch widescreenOnly href="/screencasts">
              Screencasts
            </NavLink>
            <NavLink left prefetch widescreenOnly href="/case-studies">
              Case Studies
            </NavLink>
          </LinkContainer>
          <LogoLink />
          <LinkContainer right>
            <NavLink right prefetch widescreenOnly href="/pricing">
              Pricing
            </NavLink>
            <NavLink right prefetch widescreenOnly href="/support">
              Support
            </NavLink>
            <NavLink right prefetch widescreenOnly href="/about">
              About
            </NavLink>
            {this.renderLoginLinks()}
          </LinkContainer>
        </Content>
        {this.state.showMenu && (
          <Menu />
        )}
      </HeaderWrapper>
    );
  }
  
  renderLoginLinks() {
    if (this.props.loggedIn) {
      return (
        <NavLink right href="/dashboard">
          Dashboard
        </NavLink>
      );
    } else {
      return (
        [
          <NavLink right prefetch widescreenOnly href="/login" key="login">
            Login
          </NavLink>,
          <NavLink right prefetch href="/sign-up" key="signup">
            Signup
          </NavLink>
        ]
      )
    }
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
