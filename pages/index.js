import styled from 'styled-components'

const Title = styled.h1`
  ${props => props.theme.mainCallout}
`

export default () => (
  <Title>oh hai world</Title>
)