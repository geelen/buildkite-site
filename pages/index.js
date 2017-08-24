import styled from 'styled-components'
import * as theme from '../theme'

const Title = styled.h1`
  ${theme.textStyles.mainCallout}
`

export default () => (
  <Title>oh hai world</Title>
)