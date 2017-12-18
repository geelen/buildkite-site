import styled from 'styled-components'
import Head from 'next/head'
import cookies from 'next-cookies'

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

// Helper function for setting up standard page props
export function page(fn) {
  fn.getInitialProps = (ctx) => {
    // Uses next-cookies to get this in either the browser or backend
    const { bk_logged_in } = cookies(ctx)
    
    return {
      loggedIn: (bk_logged_in == "true")
    }
  }

  return fn;
}

export default ({ headTitle, title, description, image, imageAlt, children, loggedIn }) => (
  <div>
    <Head>
      <title>{headTitle}</title>
    </Head>
    <Header loggedIn={loggedIn} />
    <Container>
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