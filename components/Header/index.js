import { withRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import throttle from 'raf-throttle'

import * as theme from 'theme'
import LogoLink from './logo-link'
import LoadingBar from './loading-bar'

export const height = '70px';

const scrollTransparencyThreshold = 60;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${height};
  box-shadow: ${props => props.transparent ? '0 0 15px rgba(0, 0, 0, 0)' : '0 0 15px rgba(0, 0, 0, 0.1)'};
  padding: ${theme.innerSpacing.s1};
  background-color: ${props => props.transparent ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,1)'};
  will-change: background-color, box-shadow;
  transition: background-color 300ms, box-shadow 300ms;
  z-index: 1;
`;

const Content = styled.div`
  ${theme.maxWidthContainer}
  display: flex;
  align-items: center;
`;

const LinkContainer = styled.div`
  flex: 2;
  text-align: ${props => props.left ? 'left' : 'right'};
`;

const LinkAnchor = styled.a`
  color: ${props => props.active ? theme.colors.text.green : 'black'};
  text-decoration: none;
  margin-left: ${props => props.right && theme.innerSpacing.s1};
  margin-right: ${props => props.left && theme.innerSpacing.s1};
  font-weight: bold;
  transition: color 300ms;
  will-change: color;
  &:hover {
    color: ${theme.colors.text.green};
  }
`

const NavLink = withRouter(({ children, router, href, prefetch, left, right }) => {
  return (
    <Link prefetch href={href} passHref>
      <LinkAnchor left={left} right={right} active={router.pathname === href}>
        {children}
      </LinkAnchor>
    </Link>
  )
})

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
    this.checkScroll();
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  render() {
    var { transparent } = this.props;

    if (this.state.scrolled) {
      transparent = false;
    }

    return (
      <HeaderWrapper transparent={transparent}>
        <LoadingBar/>
        <Content>
          <LinkContainer left>
            <NavLink left prefetch href="/features">
              Features
            </NavLink>
            <NavLink left prefetch href="/screencasts">
              Screencasts
            </NavLink>
            <NavLink left prefetch href="/support">
              Support
            </NavLink>
          </LinkContainer>
          <LogoLink/>
          <LinkContainer right>
            <NavLink left prefetch href="/pricing">
              Pricing
            </NavLink>
            <NavLink left prefetch href="/login">
              Sign In
            </NavLink>
            <NavLink left prefetch href="/sign-up">
              Get Started
            </NavLink>
          </LinkContainer>
        </Content>
      </HeaderWrapper>
    );
  }

  handleWindowScroll = throttle(() => this.checkScroll())

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
