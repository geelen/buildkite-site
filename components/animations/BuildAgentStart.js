import { Keyframes, Frame } from 'react-keyframes'

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
      <text
        fontFamily="SFMono-Regular, SF Mono, Monaco, Menlo, Consolas, Liberation Mono, Courier, monospace"
        fontSize="18"
      >
        {children}
      </text>
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
        <tspan
          x="40"
          y="67"
          fill="#9B9B9B"
        >
          {'$ '}
        </tspan>
        <tspan
          x="62.254"
          y="67"
          fill="#00FF93"
        >
          buildkite-agent start
        </tspan>
      </React.Fragment>
    )
  },
  {
    duration: 150,
    children: (
      <React.Fragment key="starting">
        <tspan
          x="40"
          y="97"
          fill="#F8F8F8"
        >
          Starting buildkite-agent with PID: 11301
        </tspan>
        <tspan
          x="40"
          y="127"
          fill="#F8F8F8"
        >
          Registering agent with Buildkite...
        </tspan>
      </React.Fragment>
    )
  },
  {
    duration: 2500,
    children: (
      <tspan
        key="registered"
        x="40"
        y="157"
        fill="#F8F8F8"
      >
        Successfully registered agent "website-1"
      </tspan>
    )
  },
  {
    duration: 700,
    children: (
      <tspan
        key="waiting"
        x="40"
        y="187"
        fill="#F8F8F8"
      >
        Waiting for work...
      </tspan>
    )
  },
  {
    duration: 300,
    children: (
      <tspan
        key="assigned"
        x="40"
        y="217"
        fill="#F8F8F8"
      >
        Assigned job 69f662c7-b990-489e-8e77-8e02550
      </tspan>
    )
  }
]

export default ({...props}) => (
  <Keyframes
    component={React.Fragment}
  >
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