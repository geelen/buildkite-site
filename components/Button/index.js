import styled from 'styled-components'

import * as theme from 'theme'

export default styled.a`
  display: inline-block;
  background-color: ${theme.colors.backgrounds.black};
  color: ${theme.colors.text.white};
  padding-left: ${theme.innerSpacing.s1};
  padding-right: ${theme.innerSpacing.s1};
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: bold;
  border-radius: 3px;
  text-decoration: none;
  :hover {
    backgroundColor: ${theme.colors.backgrounds.blackHover}
  }
`