import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.innerSpacing.s1};
  grid-template-columns: ${({ columns }) => {
    /*
     * Accept either a number of columns (which will be fixed at all sizes), or
     * a minimum column width. This must be less than the minimum screen size at
     * which the component is likely to be displayed. "300px" is a good maximum.
     */
    if (typeof columns === 'number') {
      return `repeat(${columns}, 1fr)`
    }

    return `repeat(auto-fit, minmax(${columns}, 1fr))`
  }};
`

Grid.defaultProps = {
  columns: '300px'
}

export const Cell = styled.div``;