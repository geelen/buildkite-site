import Link from 'next/link'
import styled from 'styled-components'
import throttle from 'raf-throttle'

import * as theme from 'theme'
import LogoLink from './logo-link'
import LoadingBar from './loading-bar'

export const height = '70px';

const scrollTransparencyThreshold = 60;

const HeaderWrapper = styled('header')`
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

const Content = styled('div')`
  ${theme.maxWidthContainer}
  display: flex;
  align-items: center;
`;

const LinkContainer = styled('div')`
  flex: 2;
  text-align: ${props => props.left ? 'left' : 'right'};
`;

const LinkAnchor = styled('a')`
  color: black;
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

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
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
            <Link prefetch href="/features">
              <LinkAnchor href="/features" left>Features</LinkAnchor>
            </Link>
            <Link prefetch href="/screencasts">
              <LinkAnchor href="/screencasts" left>Screencasts</LinkAnchor>
            </Link>
            <Link prefetch href="/support">
              <LinkAnchor href="/support" left>Support</LinkAnchor>
            </Link>
          </LinkContainer>
          <LogoLink/>
          <LinkContainer right>
            <Link prefetch href="/pricing">
              <LinkAnchor href="/pricing" right>Pricing</LinkAnchor>
            </Link>
            <Link prefetch href="/login">
              <LinkAnchor href="/login" right>Sign In</LinkAnchor>
            </Link>
            <Link prefetch href="/sign-up">
              <LinkAnchor href="/sign-up" right>Get Started</LinkAnchor>
            </Link>
          </LinkContainer>
        </Content>
      </HeaderWrapper>
    );
  }

  handleWindowScroll = throttle(() => {
    if (window.scrollY > scrollTransparencyThreshold) {
      if (!this.state.scrolled) {
        this.setState({scrolled: true});
      }
    } else {
      if (this.state.scrolled) {
        this.setState({scrolled: false});
      }
    }
  })
}
