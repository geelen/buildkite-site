import styled from 'styled-components'
import * as theme from 'theme'
import Header from 'components/Header'

const Page = styled.div`
  ${theme.pageContainer}
`

const Title = styled.h1`
  ${theme.textStyles.mainCallout}
  text-align: center;
`

export default () => (
  <div>
    <Header transparent />
    <Page>
      <Title>Sign In</Title>
    </Page>
  </div>
)