import styled from 'styled-components'

import * as theme from 'theme'

// Exported because some other components need them for doing fancy :hover
// styles on things containing the buttons
export const colors = {
  default: {
    background: theme.colors.backgrounds.black,
    backgroundHover: theme.colors.backgrounds.blackHover
  },
  primary: {
    background: theme.colors.backgrounds.green,
    backgroundHover: theme.colors.backgrounds.greenHover
  }
}

export default styled.a`
  display: inline-block;
  background-color: ${props => props.primary ? colors.primary.background : colors.default.background};
  color: ${theme.colors.text.white};
  padding-left: ${theme.innerSpacing.s1};
  padding-right: ${theme.innerSpacing.s1};
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: bold;
  border-radius: 3px;
  text-decoration: none;
  transition: background-color ${theme.timings.color};
  :hover {
    background-color: ${props => props.primary ? colors.primary.backgroundHover : colors.default.backgroundHover}
  }
`