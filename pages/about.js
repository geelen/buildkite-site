import styled from 'styled-components'
import * as theme from 'theme'
import Header from 'components/Header'
import Head from 'next/head'

const Page = styled.div`
  ${theme.pageContainer}
`

const Title = styled.h1`
  ${theme.textStyles.mainCallout}
  text-align: center;
`

const PlaceholderPerson = (props) => (
  <div {...props}>
    <h3>Jessica Stokes</h3>
    <img src="/static/TODO" alt="Photo of Jessica" />
    <p>Hi, I’m Jess! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.</p>
    <nav>
      <ul>
        <li><a href="/TODO">GitHub</a></li>
        <li><a href="/TODO">Twitter</a></li>
        <li><a href="/TODO">Keybase</a></li>
      </ul>
    </nav>
  </div>
)

export default () => (
  <div>
    <Head>
      <title>About Buildkite</title>
    </Head>
    <Header />
    <Page>
      <Title>About</Title>
      <p>The Buildkite team is dedicated to creating a CI platform that gives you fast and reliable builds. We want you to love using Buildkite as much as we love making it for you.</p>
      <section>
        <h1>Get to know the team</h1>
        <h2>Everyone</h2>
        {[1,2,3,4,5,6].map((n) => (
          <PlaceholderPerson key={n} />
        ))}
        <h2>Leadership Team</h2>
        {[1,2,3].map((n) => (
          <PlaceholderPerson key={n} />
        ))}
      </section>
    </Page>
  </div>
)