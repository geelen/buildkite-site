import styled from 'styled-components'
import * as theme from 'theme'
import Header from 'components/Header'
import Head from 'next/head'

const Page = styled.div`
  ${theme.pageContainer}
`

const PositioningStatement = styled.p`
  ${theme.textStyles.mainCallout}
  margin-top: ${theme.outerSpacing.s2};
  margin-bottom: ${theme.innerSpacing.s1};
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const ExplanationStatement = styled.p`
  ${theme.textStyles.bodyCopyLarge}
  margin-top: ${theme.innerSpacing.s1};
  max-width: 33rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${theme.colors.text.subdued};
`

export default () => (
  <div>
    <Head>
      <title>Buildkite</title>
    </Head>
    <Header transparent />
    <Page>
      <PositioningStatement>Lightning fast testing and delivery<br/>for all your software projects</PositioningStatement>
      <ExplanationStatement>Buildkite makes it simple to run and scale your own continuous integration pipelines, so you can stay productive no matter how large you grow.</ExplanationStatement>
    </Page>
  </div>
)