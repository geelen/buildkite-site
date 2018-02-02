import styled from 'styled-components'
import { Keyframes, Frame } from 'react-keyframes'

const PreInSVG = styled.pre`
  text-align: left;
  color: #F8F8F8;
  font-size: 18px;
  line-height: 1.65em;
  font-family: SFMono-Regular, SF Mono, Monaco, Menlo, Consolas, Liberation Mono, Courier, monospace;
`

const SVGCommon = ({ children, ...props }) => (
  // NOTE: We don't do any styling here, as we pass props through to the SVG,
  //       that way it can be styled using styled-components when implemented
  <svg
    width="547"
    height="280"
    viewBox="0 0 547 280"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient
        x1="0%"
        y1="50%"
        y2="50%"
        id="buildAgentStartGradient"
      >
        <stop
          stopOpacity="0"
          offset="0%"
        />
        <stop offset="100%"/>
      </linearGradient>
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path
        fill="#000"
        d="M0 0h547v280H0z"
      />
      <foreignObject
        width="506"
        height="230"
        x="40"
        y="50"
      >
        <PreInSVG>
          {children}
        </PreInSVG>
      </foreignObject>
      <path
        fill="url(#buildAgentStartGradient)"
        d="M487 0h59v280h-59z"
      />
    </g>
  </svg>
)

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

export default ({...props}) => (
  <Keyframes component={React.Fragment}>
    {TEXT_FRAGMENTS.map(({ duration, children }, index) => (
      // We concatenate each frame of children to build each subsequent frame,
      // just because I didn't want to have to repeat them a bunch in the code
      <Frame duration={duration} key={index}>
        <SVGCommon {...props}>
          {
            TEXT_FRAGMENTS
              .slice(0, index + 1)
              .map(({ children }) => children)
          }
        </SVGCommon>
      </Frame>
    ))}
  </Keyframes>
)