import styled from 'styled-components'

export default styled.br`
  @media (max-width: ${({ maxWidth }) => maxWidth}) {
    display: none;
  }
`