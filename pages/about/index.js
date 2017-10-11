import styled from 'styled-components'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import Page from 'components/Page'
import Person from 'components/Person'

import { team, leadership, advisors } from './people'

export default () => (
  <Page
    headTitle="About Buildkite"
    title="About"
    description="The Buildkite team is dedicated to creating a CI platform that gives you fast and reliable builds. We want you to love using Buildkite as much as we love making it for you."
    >
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

    <ActionGrid>
      <ActionGridItem
        heading="Brand Assets"
        description="Download our official logos, screenshots and media assets."
        url="/brand-assets"
        buttonTitle="View the brand assets"
      />
      <ActionGridItem
        heading="Buildkite Shop"
        description="Order yourself some official Buildkite stickers, t-shirts, and more."
        url="https://shop.buildkite.com/"
        buttonTitle="Browse the Shop"
      />
    </ActionGrid>

    <Callout
      heading="Want to chat?"
      description="We're here to help. Let us know if you have any questions about getting up and running."
      url="mailto:support@buildkite.com"
      buttonTitle="support@buildkite.com"
    />
  </Page>
)