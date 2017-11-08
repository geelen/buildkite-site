import styled from 'styled-components'
import Head from 'next/head'

import * as theme from 'theme'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Container = styled.div`
  ${theme.pageContainer}
`

const Title = styled.h1`
  ${theme.textStyles.mainCallout}
  text-align: center;
  margin-top: 0;
  margin-bottom: ${theme.innerSpacing.s2};
`

const Description = styled.p`
  ${theme.textStyles.bodyCopyLarge}
  text-align: center;
  max-width: 30em;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.outerSpacing.s2};
`

const ImageContainer = styled.div`
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: ${theme.innerSpacing.s2};
`

export default ({ headTitle, title, description, image, imageAlt, children }) => (
  <div>
    <Container>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Header />
      <div>
        {image && <ImageContainer><Image src={image} alt={imageAlt} /></ImageContainer>}
        <Title>{title}</Title>
        <Description>{description}</Description>
        {children}
      </div>
    </Container>
    <Footer />
  </div>
)