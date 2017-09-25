import Link from 'next/link'
import styled from 'styled-components'

const showDebugOutlines = false;

const LinkTag = styled('a')`
  position: relative;
  width: 152px;
  height: 30px;
  ${showDebugOutlines && 'outline: 1px solid red'};

  .__mark {
    position: absolute;
    top: 0px;
    left: 52px;
    width: 45px;
    height: 30px;
    ${showDebugOutlines && 'outline: 1px solid green'};
    pointer-events: none;
    will-change: transform;
    transition: transform 200ms;
  }

  .__word-mark {
    width: 94px;
    height: 19px;
    position: absolute;
    top: 4px;
    left: 53px;
    ${showDebugOutlines && 'outline: 1px solid blue'};
    pointer-events: none;
    opacity: 0;
    transform: translateX(-20px);
    perspective: 20px;
    transform-origin: left top;
    will-change: opacity, transform;
    transition: opacity 120ms, transform 200ms;
  }

  &:hover {
    .__mark {
      transform: translateX(-50px) scale(.85);
    }
    .__word-mark {
      opacity: 1;
      transform: translateX(0px);
      transition: opacity 200ms, transform 200ms;
    }
  }
`

export default class Logo extends React.Component {
  render() {
    const expanded = false;
    
    return (
      <Link prefetch href="/">
        <LinkTag href="/">
          <img className="__mark" src="/static/images/brand/mark.svg" alt="Buildkite logo" />
          <img className="__word-mark" src="/static/images/brand/wordmark.svg" alt="Buildkite" />
        </LinkTag>
      </Link>
    );
  }
}