import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.p`
  text-align: center;
`

export default ({ href, children }) => (
  <Container>
    <Link href={href} passHref>{children}</Link>
  </Container>
)