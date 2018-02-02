import styled from 'styled-components'
import { Keyframes, Frame } from 'react-keyframes'

import SVGConsoleImage from 'components/SVGConsoleImage'

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
        Starting buildkite-agent with PID: 11301<br />
        Registering agent with Buildkite...
      </React.Fragment>
    )
  },
  {
    duration: 2500,
    children: (
      <React.Fragment key="registered">
        <br />
        Successfully registered agent "docker-builder-1"
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

export default ({ ...props }) => (
  <Keyframes
    component={SVGConsoleImage}
    {...props}
    name="buildAgentStart"
    width="547"
    height="260"
  >
    {TEXT_FRAGMENTS.map(({ duration, children }, index) => (
      // We concatenate each frame of children to build each subsequent frame,
      // just because I didn't want to have to repeat them a bunch in the code
      <Frame duration={duration} key={index}>
        {
          TEXT_FRAGMENTS
            .slice(0, index + 1)
            .map(({ children }) => children)
        }
      </Frame>
    ))}
  </Keyframes>
)