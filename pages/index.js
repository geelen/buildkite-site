import styled from 'styled-components'
import * as theme from 'theme'
import Header from 'components/Header'
import Head from 'next/head'
import Link from 'next/link'

const Page = styled.div`
  ${theme.pageContainer}
`

const PositioningStatement = styled.h1`
  ${theme.textStyles.mainCallout}
  margin-top: ${theme.outerSpacing.s2};
  margin-bottom: ${theme.innerSpacing.s1};
  max-width: 50rem;
  padding-left: ${theme.innerSpacing.s1};
  padding-right: ${theme.innerSpacing.s1};
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
    <Header />
    <Page>
      <section>
        <PositioningStatement>Lightning fast testing and delivery<br/>for all your software projects</PositioningStatement>
        <ExplanationStatement>Buildkite makes it simple to run and scale your own continuous integration pipelines, so you can stay productive no matter how large you grow.</ExplanationStatement>
      </section>

      <section>
        <h1>Features</h1>

        <p>Screenshot</p>

        <div>
          <h2>buildkite-agent gives you full control</h2>
          <p>Small description of what this feature even means, how it works, intrigues them to read more.</p>
        </div>

        <div>
          <h2>Tools to scale and parallelize</h2>
          <p>Small description of what this feature even means, how it works, intrigues them to read more.</p>
        </div>

        <div>
          <h2>Automate more than just tests</h2>
          <p>Small description of what this feature even means, how it works, intrigues them to read more.</p>
        </div>

        <div>
          <h2>Create beautiful build logs</h2>
          <p>Small description of what this feature even means, how it works, intrigues them to read more.</p>
        </div>

        <p>
          <Link href="/features" passHref><a>See all the features</a></Link>
        </p>
      </section>

      <section>
        <h1>Screencasts</h1>
        <p>Join these teams who’ve switched to Buildkite…</p>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <p>
          <Link href="/case-studies" passHref><a>Read the case studies</a></Link>
        </p>
      </section>

      <section>
        <h1>Screencasts</h1>
        <p>See what it’s like in production, with our short series of 60 second screencasts</p>

        <p>
          <Link href="/screencasts" passHref><a>View the screencasts</a></Link>
        </p>
      </section>

      <section>
        <h1>Get Started</h1>
        <p>Get started and connect your first agent.</p>
        <p>
          <Link href="/sign-up" passHref><a>Sign up</a></Link>
        </p>
      </section>
    </Page>
  </div>
)