import styled from 'styled-components'
import { Keyframes, Frame } from 'react-keyframes'

const Console = styled.pre`
  background: black;
  color: #F8F8F8;
  font-size: 18px;
  line-height: 1.25em;
  height: calc(40px + 9.5em);
  font-family: SFMono-Regular, SF Mono, Monaco, Menlo, Consolas, Liberation Mono, Courier, monospace;
  text-align: left;
  padding: 40px 30px;
  overflow: scroll;
`

const TEXT_FRAGMENTS = [
  {
    duration: 300,
    children: (
      <React.Fragment key="prompt">
        <font color="#9B9B9B">{'$ '}</font>
        <font color="#00FF93">buildkite-agent start</font>
      </React.Fragment>
    )
  },
  {
    duration: 150,
    children: (
      <React.Fragment key="starting">
        <br />
        Starting buildkite-agent with PID: 11301<br/>
        Registering agent with Buildkite...
      </React.Fragment>
    )
  },
  {
    duration: 2500,
    children: (
      <React.Fragment key="registered">
        <br />
        Successfully registered agent "website-1"
      </React.Fragment>
    )
  },
  {
    duration: 700,
    children: (
      <React.Fragment key="waiting">
        <br />
        Waiting for work...
      </React.Fragment>
    )
  },
  {
    duration: 300,
    children: (
      <React.Fragment key="assigned">
        <br />
        Assigned job 69f662c7-b990-489e-8e77-8e02550
      </React.Fragment>
    )
  }
]

export default () => (
  <Keyframes component={Console}>
    {TEXT_FRAGMENTS.map(({ duration, children }, index) => (
      // We concatenate each frame of children to build each subsequent frame,
      // just because I didn't want to have to repeat them a bunch in the code
      <Frame duration={duration} key={index}>
        <React.Fragment>
          {
            TEXT_FRAGMENTS
              .slice(0, index + 1)
              .map(({ children }) => children)
          }
        </React.Fragment>
      </Frame>
    ))}
  </Keyframes>
)