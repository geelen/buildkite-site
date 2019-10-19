import styled, { css } from 'styled-components'

export const Masonry = styled.div`
  columns: auto 18rem;
  column-gap: 3rem;
  margin: -${({ theme }) => theme.textSpacing.s1} 0;

  > * {
    page-break-inside: avoid; /* Firefox compat */
    break-inside: avoid;
  }
`

export const Brick = styled.div`
  padding: ${({ theme }) => theme.textSpacing.s1} 0;
`
