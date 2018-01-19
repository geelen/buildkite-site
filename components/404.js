import styled, { css, keyframes } from 'styled-components'

const nebulaImage = require('../assets/images/components/404/nebula.jpg')
const distantStarsImage = require('../assets/images/components/404/stars-distant.png')
const nearbyStarsImage = require('../assets/images/components/404/stars-nearby.png')
const tetherImage = require('../assets/images/components/404/tether.png')
const cosmonautImage = require('../assets/images/components/404/cosmonaut.png')

const fastAndTheFuriousCelestialDrift = (degrees) => keyframes`
  to {
    transform: rotate(${degrees}deg);
  }
`

const Universe = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  margin: 0 -${({ theme }) => theme.innerSpacing.s1};
  padding: ${({ theme }) => theme.innerSpacing.s1};
`

const Supercluster = styled.div`
  width: 100%;
  min-width: 480px;
  max-width: 757px;
`

const Galaxy = styled.div`
  /* This element gives us a fixed aspect ratio to work with. */
  width: 100%;
  /* 1514 * 794 is our base size, so 794 / 1514 * 100 gets us our ratio. */
  padding-bottom: 52.44%;
  height: 0;
  position: relative;
`

const InterstellarCloud = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

class Image extends React.PureComponent {
  // Wow, it sucks that this is even necessary? Ugh.
  static defaultProps = { 
    onLoad() {}
  }

  handleLoad = () => {
    this.props.onLoad()
  }

  componentDidMount() {
    if (this.element && this.element.complete) {
      this.handleLoad()
    }
  }

  ref = (element) => {
    this.element = element
  }

  render() {
    return (
      <img
        {...this.props}
        ref={this.ref}
        onLoad={this.handleLoad}
      />
    )
  }
}

const animatedShared = css`
  position: absolute;
  animation-duration: 15s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  user-select: none;
  user-drag: none;

  @media (min-width: 480px) {
    animation-duration: 30s;
  }

  @media (prefers-reduced-motion) {
    animation-duration: 0;
  }
`

const deferredLoadShared = css`
  transition: opacity 200ms ease-in;
  opacity: ${({ show }) => show ? 1 : 0};
`

const Nebula = styled(Image).attrs({
  src: nebulaImage
})`
  ${animatedShared}
  ${deferredLoadShared}
  width: 90.29%; /* 1367px / 1514px * 100% */
  top: 5.54%; /* 44px / 794px * 100% */
  left: 8.39%; /* 127px / 1514px * 100% */
  animation-name: ${fastAndTheFuriousCelestialDrift(1.25)};
`

const DistantStars = styled(Image).attrs({
  src: distantStarsImage
})`
  ${animatedShared}
  ${deferredLoadShared}
  width: 100%; /* 1514px / 1514px * 100% */
  top: 4.16%; /* 33px / 794px * 100% */
  left: 0;
  animation-name: ${fastAndTheFuriousCelestialDrift(2.5)};
`

const NearbyStars = styled(Image).attrs({
  src: nearbyStarsImage
})`
  ${animatedShared}
  ${deferredLoadShared}
  width: 74.83%; /* 1133px / 1514px * 100% */
  top: 0;
  left: 13.74%; /* 208px / 1514px * 100% */
  animation-name: ${fastAndTheFuriousCelestialDrift(3.75)};
`

const TetherGroup = styled.div`
  ${animatedShared}
  ${deferredLoadShared}
  width: 38.83%; /* 588px / 1514px * 100% */
  height: 68.14%; /* 541px / 794px * 100% */
  top: 31.86%; /* 253px / 794px * 100% */
  left: 49.34%; /* 747px / 1514px * 100% */
  animation-name: ${fastAndTheFuriousCelestialDrift(-6.25)};
  transform-origin: center bottom;
`

const Tether = styled(Image).attrs({
  src: tetherImage
})`
  ${animatedShared}
  width: 88.44%; /* 520px / 588px * 100% */
  right: 0;
  bottom: 0;
`

const Cosmonaut = styled(Image).attrs({
  src: cosmonautImage
})`
  ${animatedShared}
  width: 40.82%; /* 240px / 588px * 100% */
  top: 0;
  left: 0;
  animation-name: ${fastAndTheFuriousCelestialDrift(-6.25)};
  transform-origin: 10% 50%;
`

export default class Animated404 extends React.PureComponent {
  state = {
    nebulaReady: false,
    distantStarsReady: false,
    nearbyStarsReady: false,
    tetherReady: false,
    cosmonautReady: false
  }

  handleNebulaLoad = (evt) => {
    this.setState({ nebulaReady: true });
  }

  handleDistantStarsLoad = (evt) => {
    this.setState({ distantStarsReady: true });
  }

  handleNearbyStarsLoad = (evt) => {
    this.setState({ nearbyStarsReady: true });
  }

  handleTetherLoad = (evt) => {
    this.setState({ tetherReady: true });
  }

  handleCosmonautLoad = (evt) => {
    this.setState({ cosmonautReady: true });
  }

  render() {
    return (
      <Universe>
        <Supercluster>
          <Galaxy>
            <InterstellarCloud>
              <Nebula
                onLoad={this.handleNebulaLoad}
                show={this.state.nebulaReady}
              />
              <DistantStars
                onLoad={this.handleDistantStarsLoad}
                show={this.state.distantStarsReady}
              />
              <NearbyStars
                onLoad={this.handleNearbyStarsLoad}
                show={this.state.nearbyStarsReady}
              />
              <TetherGroup
                show={this.state.tetherReady && this.state.cosmonautReady}
              >
                {/* There's a spacecraft here, it's just off-screen, I promise */}
                <Tether onLoad={this.handleTetherLoad} />
                <Cosmonaut onLoad={this.handleCosmonautLoad} />
              </TetherGroup>
            </InterstellarCloud>
          </Galaxy>
        </Supercluster>
      </Universe>
    )
  }
}