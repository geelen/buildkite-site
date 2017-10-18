import styled from 'styled-components'

import * as theme from 'theme'

// Columns need at least 300px each otherwise we just single-column
export const Grid = styled('div')`
  @media (min-width: ${props => props.columns * 300}px) {
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-gap: ${theme.innerSpacing.s1};
  }
`

export const Cell = styled('div')``;