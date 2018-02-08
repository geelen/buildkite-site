import styled from 'styled-components'

const MaxWidthBr = styled.br`
  @media (max-width: ${({ maxWidth }) => maxWidth}) {
    display: none;
  }
`

const MinWidthBr = styled.br`
  @media (min-width: ${({ minWidth }) => minWidth}) {
    display: none;
  }
`

export default ({ maxWidth, minWidth }) => {
  if (maxWidth) {
    return <MaxWidthBr maxWidth={maxWidth} />
  }
  if (minWidth) {
    return <MinWidthBr minWidth={minWidth} />
  }
}