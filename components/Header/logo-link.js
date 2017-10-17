import Link from 'next/link'
import styled from 'styled-components'

const showDebugOutlines = false;

const markSvgPath = require('../../assets/images/brand/mark.svg');
const wordmarkSvgPath = require('../../assets/images/brand/wordmark.svg');

const LinkTag = styled.a`
  position: relative;
  @media (max-width: 799px) {
    width: 52px;
  }
  width: 152px;
  height: 30px;
  display: inline-block;
  ${showDebugOutlines && 'outline: 1px solid red'};
`

const Mark = styled.img`
  position: absolute;
  top: 0px;
  left: 0;
  width: 45px;
  height: 30px;
  ${showDebugOutlines && 'outline: 1px solid green'};

  @media (min-width: 800px) {
    left: 52px;
    pointer-events: none;
    will-change: transform;
    transition: transform 200ms;

    ${LinkTag}:hover & {
      transform: translateX(-50px) scale(.85);
    }  
  }
`

const WordMark = styled.img`
  width: 94px;
  height: 19px;
  position: absolute;
  top: 4px;
  left: 53px;
  ${showDebugOutlines && 'outline: 1px solid blue'};
  display: none;

  @media (min-width: 800px) {
    display: inline-block;
    pointer-events: none;
    opacity: 0;    
    transform: translateX(-20px);
    perspective: 20px;
    transform-origin: left top;
    will-change: opacity, transform;
    transition: opacity 120ms, transform 200ms;
    ${LinkTag}:hover & {
      opacity: 1;
      transform: translateX(0px);
      transition: opacity 200ms, transform 200ms;
    }
  }
`

export default () => (
  <Link prefetch href="/">
    <LinkTag href="/">
      <Mark src={markSvgPath} alt="Buildkite logo" />
      <WordMark src={wordmarkSvgPath} alt="Buildkite" />
    </LinkTag>
  </Link>
)