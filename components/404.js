import styled, { css, keyframes } from 'styled-components'

const nebulaImage = require('../assets/images/components/404/nebula.png')
const smallStarsImage = require('../assets/images/components/404/stars-small.png')
const largeStarsImage = require('../assets/images/components/404/stars-large.png')
const tetherImage = require('../assets/images/components/404/tether.png')
const cosmonautImage = require('../assets/images/components/404/cosmonaut.png')

const fastAndTheFuriousCelestialDrift = (extent) => keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(calc(${extent} * 1.25deg));
  }
`

const Universe = styled.div`
  /* TODO: Make this shrink to the left on mobile devices */
`

const Supercluster = styled.div`
  /* This element gives us a fixed aspect ratio to work with. */
  width: 100%;
  /* 1514 * 794 is our base size, so 794 / 1514 * 100 gets us our ratio. */
  padding-bottom: 52.44%;
  height: 0;
  position: relative;
`

const Galaxy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const animatedCommon = css`
  position: absolute;
  animation-duration: 30s;
  animation-direction: alternate;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  user-select: none;
  user-drag: none;

  @media screen and (prefers-reduced-motion) {
    animation-duration: 0;
  }
`

const Nebula = styled.img.attrs({
  src: nebulaImage
})`
  ${animatedCommon}
  width: 90.29%; /* 1367px / 1514px * 100% */
  top: 5.54%; /* 44px / 794px * 100% */
  left: 8.39%; /* 127px / 1514px * 100% */
  animation-name: ${fastAndTheFuriousCelestialDrift(1)};
`

const SmallStars = styled.img.attrs({
  src: smallStarsImage
})`
  ${animatedCommon}
  width: 100%; /* 1514px / 1514px * 100% */
  top: 4.16%; /* 33px / 794px * 100% */
  left: 0;
  animation-name: ${fastAndTheFuriousCelestialDrift(2)};
`

const LargeStars = styled.img.attrs({
  src: largeStarsImage
})`
  ${animatedCommon}
  width: 74.83%; /* 1133px / 1514px * 100% */
  top: 0;
  left: 13.74%; /* 208px / 1514px * 100% */
  animation-name: ${fastAndTheFuriousCelestialDrift(3)};
`

const TetherGroup = styled.div`
  ${animatedCommon}
  width: 38.83%; /* 588px / 1514px * 100% */
  height: 68.14%; /* 541px / 794px * 100% */
  top: 31.86%; /* 253px / 794px * 100% */
  left: 49.34%; /* 747px / 1514px * 100% */
  animation-name: ${fastAndTheFuriousCelestialDrift(-5)};
  transform-origin: center bottom;
`

const Tether = styled.img.attrs({
  src: tetherImage
})`
  ${animatedCommon}
  width: 88.44%; /* 520px / 588px * 100% */
  right: 0;
  bottom: 0;
`

const Cosmonaut = styled.img.attrs({
  src: cosmonautImage
})`
  ${animatedCommon}
  width: 40.82%; /* 240px / 588px * 100% */
  top: 0;
  left: 0;
  animation-name: ${fastAndTheFuriousCelestialDrift(-5)};
  transform-origin: 10% 50%;
`

export default () => (
  <Universe>
    <Supercluster>
      <Galaxy>
        <Nebula />
        <SmallStars />
        <LargeStars />
        <TetherGroup>
          <Tether />
          <Cosmonaut />
        </TetherGroup>
      </Galaxy>
    </Supercluster>
  </Universe>
)
