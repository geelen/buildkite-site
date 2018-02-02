import styled from 'styled-components'

const PreInsideSVG = styled.pre`
  text-align: left;
  padding: 40px;
  height: 100%;
  color: #F8F8F8;
  font-size: 18px;
  line-height: 1.65em;
  font-family: SFMono-Regular, SF Mono, Monaco, Menlo, Consolas, Liberation Mono, Courier, monospace;
`

export default ({ name, children, width="547", height="280", ...props }) => (
  // NOTE: We don't do any styling here, as we pass props through to the SVG,
  //       that way it can be styled using styled-components when implemented
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient
        id={`${name}-horizontalGradientOverlay`}
      >
        <stop
          stopOpacity="0"
          offset="0%"
        />
        <stop offset="100%"/>
      </linearGradient>
      <linearGradient
        x1="0" x2="0" y1="0" y2="1"
        id={`${name}-verticalGradientOverlay`}
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
        d={`M0 0h${width}v${height}H0z`}
      />
      <foreignObject
        width={width}
        height={height}
        x="0"
        y="0"
      >
        <PreInsideSVG>
          {children}
        </PreInsideSVG>
      </foreignObject>
      <path
        fill={`url(#${name}-horizontalGradientOverlay)`}
        d={`M${width - 60} 0h60v${height}h-60z`}
      />
      <path
        fill={`url(#${name}-verticalGradientOverlay)`}
        d={`M0 ${height - 60}h${width}v60H0z`}
      />
    </g>
  </svg>
)
