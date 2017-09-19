import Link from 'next/link'
import styled from 'styled-components'

const showDebugOutlines = false;

const LinkTag = styled('a')`
  position: relative;
  width: 152px;
  height: 30px;
  outline: ${props => showDebugOutlines && '1px solid red'};
`

const Mark = styled('img')`
  position: absolute;
  top: 0px;
  left: 52px;
  height: 30px;
  outline: ${props => showDebugOutlines && '1px solid green'};
  pointer-events: none;
`

const Wordmark = styled('img')`
  height: 19px;
  position: absolute;
  top: 4px;
  left: 53px;
  outline: ${showDebugOutlines && '1px solid blue'};
  pointer-events: none;
  opacity: 0;
`

export default class Logo extends React.Component {
  render() {
    const expanded = false;
    
    return (
      <Link prefetch href="/">
        <LinkTag href="/">
          <Mark src="/static/images/brand/mark.svg" alt="Buildkite logo" />
          <Wordmark src="/static/images/brand/wordmark.svg" alt="Buildkite" />
        </LinkTag>
      </Link>
    );
  }
}