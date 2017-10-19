import styled from 'styled-components'

import * as theme from 'theme'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import { Grid, Cell } from 'components/Grid'
import Page from 'components/Page'
import Person from 'components/Person'

import { team, leadership, advisors } from './people'

const hqImage = require('../../assets/images/about/hq.png')
const brandAssetsImage = require('../../assets/images/about/brand-assets.png')

const SectionHeader = styled.h1`
  ${theme.textStyles.secondLevelHeading}
  text-align: center;
`

const People = ({ children }) => (
  <Grid columns={children.length}>
    {children.map((child, i) => (
      <Cell key={i}>{child}</Cell>
    ))}
  </Grid>
)

export default () => (
  <Page
    headTitle="About Buildkite"
    title="About"
    description="The Buildkite team is dedicated to creating a CI platform that gives you fast and reliable builds. We want you to love using Buildkite as much as we love making it for you."
    >
    <section>
      <SectionHeader>Get to know the team</SectionHeader>
      
      <h2>Everyone</h2>
      <People>
        {team.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </People>

      <h2>Leadership Team</h2>
      <People>
        {leadership.map((person) => (
          <Person person={person} key={person.name} showRoles />
        ))}
      </People>

      <h2>Advisors</h2>
      <People>
        {advisors.map((person) => (
          <Person person={person} key={person.name} showRoles />
        ))}
      </People>
    </section>

    <section>
      <SectionHeader>Head Office</SectionHeader>
      <Grid columns={2}>
        <Cell>
          <img src={hqImage} />
        </Cell>
        <Cell>
          <p>Buildkite HQ is in Melbourne, but our team is spread around the globe. If you want to visit HQ, or send us something, you can find us at:</p>
          <p>149a Brunswick St<br/>Fitzroy, Victoria<br/>Australia, 3065</p>
        </Cell>
      </Grid>
    </section>

    <section>
      <SectionHeader>Our Values</SectionHeader>
      <Grid columns={2}>
        <Cell>
          <h2>Transparency</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Empathy</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Quality</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Collaboration</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Diversity</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Sustainable Growth</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
        <Cell>
          <h2>Independence</h2>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
          <p>TODO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo tellus sit amet quam iaculis, eu blandit tortor elementum. Nulla non tortor gravida, ultricies nisi ac, rhoncus est.</p>
        </Cell>
      </Grid>
    </section>

    <ActionGrid>
      <ActionGridItem
        heading="Brand Assets"
        image={brandAssetsImage}
        imageAlt=""
        description="Download our official logos, screenshots and media assets."
        url="/brand-assets"
        buttonTitle="View the brand assets"
      />
      <ActionGridItem
        heading="Buildkite Shop"
        image={brandAssetsImage}
        imageAlt=""
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