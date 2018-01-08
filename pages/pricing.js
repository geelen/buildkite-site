import Page, { page } from 'components/Page'
import { Grid, Cell } from 'components/Grid'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Pricing"
    title="Pricing"
    description="TODO"
    loggedIn={loggedIn}
  >
    <Grid columns='15rem'>
      <Cell>
        <h2>Standard Plan</h2>
        <p>$19 USD per user per month</p>
        <ul>
          <li>Unlimited agents</li>
          <li>Unlimited builds</li>
          <li>Unlimited artifacts</li>
          <li>Priority email support</li>
          <li>Free 30 day trial</li>
          <li>Teams</li>
          <li>SSO</li>
          <li>Annual payment discount of 20%</li>
        </ul>
      </Cell>
      <Cell>
        <h2>Enterprise Plan</h2>
        <p>$2999 USD per month, paid annually</p>
        <ul>
          <li>Includes 100 users</li>
          <li>$29 per additional user</li>
          <li>Unlimited agents</li>
          <li>Unlimited builds</li>
          <li>Unlimited artifacts</li>
          <li>Priority email support</li>
          <li>Free 30 day trial</li>
          <li>Teams</li>
          <li>SSO</li>
          <li>Audit log</li>
          <li>Live support via chat</li>
          <li>Technical account manager</li>
          <li>SLA</li>
          <li>Invoice payment</li>
        </ul>
      </Cell>
    </Grid>

    <div>
      <h2>Frequently Asked Questions</h2>

      <Grid columns='12rem'>
        <Cell>
          <h3>What is an agent?</h3>
          <p>A build agent runs on your machine, and is capable of running a single build job at one time. You can run as many agents as you wish, and Buildkite will coordinate the work between them.</p>
        </Cell>
        <Cell>
          <h3>Students &amp; Teachers</h3>
          <p>We offer free accounts for all students and teachers. Simply create your account and email support.</p>
        </Cell>
        <Cell>
          <h3>Non-profits &amp; charities</h3>
          <p>We offer heavy discounts for non-profit and charity organizations. Email support to see how we can help you.</p>
        </Cell>
        <Cell>
          <h3>Open source</h3>
          <p>We offer free accounts for open source. Sign up, create the organization for your project, and email support.</p>
        </Cell>
      </Grid>
    </div>
  </Page>
))