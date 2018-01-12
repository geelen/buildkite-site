import styled from 'styled-components'

import Link from 'components/Link'

const Container = styled.p`
  text-align: center;
`

export default ({ href, children }) => (
  <Container>
    <Link href={href}>{children}</Link>
  </Container>
)