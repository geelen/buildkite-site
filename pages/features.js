import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { FeatureGrid, FeatureCell, FeatureTitle, FeatureDescription } from 'components/FeatureGrid'

import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

const Heading = styled.h2`
  text-align: center;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
`

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Features"
    title="Features"
    loggedIn={loggedIn}
  >
    <section>
      <Heading>Build agents that give you full control</Heading>
      <Description>Run the open-source buildkite-agent on your own infrastructure for maximum speed, control, and security. And your source code never leaves your machine.</Description>
      <Description>You can install the agent easily using one of our installers or binaries for almost every platform and architecture, including Ubuntu, Debian, Mac, Windows, Docker, and more.</Description>
    </section>
    <section>
      <Heading>Tools to scale across hundreds or thousands of agents</Heading>
      <Description>The agent’s <a href="/TODO">artifact</a> and <a href="/TODO">meta-data</a> storage allows for share-nothing, state-free build jobs that can be easily distributed across any number of agents.</Description>
      <Description>Run up to 10,000 simultaneously connected build agents without breaking a sweat.</Description>
      <Description>The <a href="/TODO">Elastic CI Stack for AWS</a> gives you an easy to maintain,  elastically scaling CI stack for your entire organization in minutes. Or use the same ops infrastructure you do for production, such as Packer and Terraform.</Description>
      <Description>The buildkite-metrics collector allows you to send aggregated build activity to CloudWatch or StatsD. Scale up your testing infrastructure during busy times, and scale down to reduce costs during quiet times.</Description>
    </section>
    <section>
      <Heading>Pipelines that can automate more than just your tests</Heading>
      <Description>Model delivery pipelines or ops tasks with <a href="/TODO">custom fields</a>, and unblock them via the web or the API with a full log of who did what when.</Description>
      <Description><a href="/TODO">Dynamically generate pipeline steps</a>, and even modify running pipelines. Or build your own abstractions and tools for common delivery workflows.</Description>
      <Description>Buildkite’s <a href="/TODO">open-source web interface</a> allows you to monitor, control and visualize all your pipelines in one place, whilst still having quick access to your own builds.</Description>
      <Description>You can also <a href="/TODO">create teams</a>, ensuring only the people with the correct permissions have access to sensitive pipelines.</Description>
      <Description>Treat infrastructure as code with <a href="/TODO">scheduled builds</a>, separate <a href="/TODO">agent queues</a>, <a href="/TODO">concurrency controls</a>, and <a href="/TODO">dynamic pipeline logic</a>. All using your existing ops scripts and infrastructure.</Description>
      <Description>Full control of your environment allows you take full advantage of the latest version of tools, so you can use Docker, SDK betas and pre-release operating systems without any constraints.</Description>
    </section>
    <section>
      <Heading>Build logs that are beautiful and powerful</Heading>
      <Description><a href="/TODO">Embeddable image artifacts</a>, with inline gif support, means that you can show failures visually, and link directly to the failing piece of code.</Description>
      <Description>Add your own, <a href="/TODO">custom build annotations</a> using Markdown or HTML. Link to deployments, summarise test failures, or report on your own flakey test analysis.</Description>
      <Description><a href="/TODO">Log output grouping</a>, emoji support, and detailed timing information.</Description>
    </section>
    <section>
      <Heading>Customize any part of the build workflow</Heading>
      <Description>The buildkite-agent exposes customizable <a href="/TODO">agent hooks</a>, allowing you to add your own high performing checkout logic, integrate with a secret store, expose environment variables, or add your own security checks.</Description>
      <Description><a href="/TODO">Webhooks</a>, <a href="/TODO">REST APIs</a> and <a href="/TODO">GraphQL APIs</a> allow you to create your own tools and workflows, to fit your team’s needs.</Description>
    </section>
    <section>
      <Heading>Other Features</Heading>
      <FeatureGrid>
        <FeatureCell>
          <FeatureTitle>Source Control Integration</FeatureTitle>
          <FeatureDescription>Full integration with GitHub, GitHub Enterprise, GitLab, BitBucket, and more. Pull request testing TODO.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Chat Integration</FeatureTitle>
          <FeatureDescription>Slack and HipChat integration lets your team team to monitor and control your build pipelines.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Comprehensive APIs</FeatureTitle>
          <FeatureDescription>Build your own cli tools, write chatops bots, or integrate with your internal systems using the REST and GraphQL APIs.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Environment Agnostic</FeatureTitle>
          <FeatureDescription>Buildkite’s environment agnostic design means you can always stay current, and migrate to new technologies as you need.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Docker Support</FeatureTitle>
          <FeatureDescription>The agent has built-in support for running build jobs via Docker Compose. Or use your own build scripts for maximum control.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Plugins</FeatureTitle>
          <FeatureDescription>Use the agent’s new plugin system provides out of the box support for a variety of tools. And you can easily write your own.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>SSO and Permissions</FeatureTitle>
          <FeatureDescription>Control which users have access to projects and resources from within your settings page.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Human Support</FeatureTitle>
          <FeatureDescription>TODO.</FeatureDescription>
        </FeatureCell>
      </FeatureGrid>
    </section>

    <Screencasts/>

    <GetStarted/>
  </Page>
))