import styled, { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import cookies from 'next-cookies'

import isLoggedIn from '../../lib/isLoggedIn'

import * as buildkiteTheme from 'theme'
import Header from 'components/Header'
import Footer from 'components/Footer'

import { fonts } from '../../theme/fonts'

const Container = styled.div`
  ${({ theme }) => theme.pageContainer}
`

export const Title = styled.h1`
  ${({ theme }) => theme.textStyles.mainCallout}
  text-align: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

export const Description = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  text-align: center;
  max-width: 30em;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
  color: ${({ theme }) => theme.colors.text.subdued};
`

const ImageContainer = styled.div`
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

// Helper function for setting up standard page props
export function page(Component) {
  const componentInitialProps = Component.getInitialProps

  Component.getInitialProps = (context) => {
    // Copy in wrapped component's getInitialProps value
    const processedProps = (
      componentInitialProps
        ? componentInitialProps.call(this, context)
        : {}
    )

    processedProps.loggedIn = isLoggedIn(cookies(context))

    return processedProps
  }

  return Component
}

export const BasePage = ({ headTitle, description, image, imageAlt, children, loggedIn }) => (
  <ThemeProvider theme={buildkiteTheme}>
    <React.Fragment>
      <Head>
        <title>{headTitle}</title>
        {fonts.map((path) =>
          <link as="font" href={path} key={path} rel="preload" type="font/woff2" crossOrigin="anonymous" />
        )}
      </Head>
      <Header loggedIn={loggedIn} />
      <Container>
        <React.Fragment>
          {children}
        </React.Fragment>
      </Container>
      <Footer />
    </React.Fragment>
  </ThemeProvider>
)

export default (props) => (
  <BasePage {...props}>
    <React.Fragment>
      {props.image && (
        <ImageContainer>
          <Image src={props.image} alt={props.imageAlt} />
        </ImageContainer>
      )}
      {props.title && (
        <Title>{props.title}</Title>
      )}
      {props.description && (
        <Description>{props.description}</Description>
      )}
      {props.children}
    </React.Fragment>
  </BasePage>
)