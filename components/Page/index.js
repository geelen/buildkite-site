import styled from 'styled-components'
import Head from 'next/head'

import * as theme from 'theme'
import Header from 'components/Header'

const Container = styled.div`
  ${theme.pageContainer}
`

const Title = styled.h1`
  ${theme.textStyles.mainCallout}
  text-align: center;
`

const Description = styled.p`
`

export default ({ headTitle, title, description, children }) => (
  <Container>
    <Head>
      <title>{headTitle}</title>
    </Head>
    <Header />
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </div>
  </Container>
)