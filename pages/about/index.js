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

      <section>
        <h1>Head Office</h1>
        <img src="/static/TODO"/>
        <p>Buildkite HQ is in Melbourne, but our team is spread around the globe. If you want to visit HQ, or send us something, you can find us at:</p>
        <p>149a Brunswick St<br/>Fitzroy, Victoria<br/>Australia, 3065</p>
      </section>

      <section>
        <h1>Our Values</h1>
        <div>
          <h2>Transparency</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </div>
        <div>
          <h2>Empathy</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </div>
        <div>
          <h2>Quality</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </div>
        <div>
          <h2>Collaboration</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </div>
        <div>
          <h2>Diversity</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </div>
        <div>
          <h2>Sustainable Growth</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </div>
        <div>
          <h2>Independence</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </div>
      </section>

      <nav>
        <a href="/brand-assets">
          <section>
            <h1>Brand Assets</h1>
            <p>Download our official logos, screenshots and media assets.</p>
            <p>View the brand assets</p>
          </section>
        </a>
        <a href="https://shop.buildkite.com/">
          <section>
            <h1>Buildkite Shop</h1>
            <p>Order yourself some official Buildkite stickers, t-shirts, and more.</p>
            <p>Browse the Shop</p>
          </section>
        </a>
      </nav>

      <section>
        <h1>Want to chat?</h1>
        <p>We're here to help. Let us know if you have any questions about getting up and running.</p>
        <p><a href="mailto:support@buildkite.com">support@buildkite.com</a></p>
      </section>
    </Page>
  </div>
)