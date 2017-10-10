import styled from 'styled-components'
import * as theme from 'theme'
import Header from 'components/Header'
import Head from 'next/head'

import { team, leadership, advisors } from './people'

const Page = styled.div`
  ${theme.pageContainer}
`

const Title = styled.h1`
  ${theme.textStyles.mainCallout}
  text-align: center;
`

const PersonImage = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
`

const Person = ({ person }) => (
  <div>
    <h3>{person.name}</h3>
    <PersonImage src={person.photo} alt={`Photo of ${person.name}`} />
    <p>{person.bio}</p>
    <nav>
      <ul>
        {person.links.map((link) => (
          <li key={link.name}><a href={link.url}>{link.name}</a></li>
        ))}
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
        {team.map((person) => (
          <Person person={person} key={person.name} />
        ))}

        <h2>Leadership Team</h2>
        {leadership.map((person) => (
          <Person person={person} key={person.name} />
        ))}

        <h2>Advisors</h2>
        {advisors.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </section>
    </Page>
  </div>
)