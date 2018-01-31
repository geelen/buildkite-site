import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { FeatureGrid, FeatureCell, FeatureTitle as RawFeatureTitle, FeatureDescription } from 'components/FeatureGrid'
import { MediaItem as RawMediaItem, ImageCell, TextCell } from 'components/MediaItem'

import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

import RawBuildAgentStart from 'components/animations/BuildAgentStart'

// -- Feature Section 1 --
// Shown after styled version of RawBuildAgentStart, which is defined way below
const pipelineRunningImage = require('../assets/images/features/pipeline-running.png')

// -- Feature Section 2 --
const artifactsAndParallelismImage = require('../assets/images/features/artifacts-and-parallelism.svg')
const parallelismImage = require('../assets/images/features/parallelism.png')

// -- Feature Section 3 --
const elasticCiStackImage = require('../assets/images/features/elastic-ci-stack.png')

// -- Feature Section 4 --
const buildkiteMetricsImage = require('../assets/images/features/buildkite-metrics.png')

// -- Feature Section 5 --
const customFieldsImage = require('../assets/images/features/custom-fields.svg')

// -- Feature Section 6 --
const dynamicPipelineImage = require('../assets/images/features/dynamic-pipeline.svg')

// -- Feature Section 9 --
const dockerWorksJustFineImage = require('../assets/images/features/docker-works-just-fine.svg')

// -- Feature Section 13 --
const customAgentHooksImage = require('../assets/images/features/custom-agent-hooks.svg')

const Heading = styled.h2`
  text-align: center;
  font-weight: normal;
  margin-top: ${({ theme }) => theme.outerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const Description = styled.p`
  padding: ${({ theme }) => theme.textSpacing.s1} 0;
  color: ${({ theme }) => theme.colors.text.subdued};
`

const Image = styled.img`
  max-width: 100%;
  margin: .25rem 0;

  &:first-child {
    margin-top: .5rem;
  }
`

const ImageWithBorder = Image.extend`
  border: 1px solid black;
`

const Link = styled.a`
  ${({ theme }) => theme.textStyles.hyperlink}
`

const MediaItem = RawMediaItem.extend`
  align-items: flex-start;
`

const FeatureTitle = RawFeatureTitle.withComponent('h3');

const SVGAnimation = Image.extend`
  height: auto;
`

const BuildAgentStart = SVGAnimation.withComponent(RawBuildAgentStart);

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Features"
    title="Features"
    loggedIn={loggedIn}
  >
    <section>
      <Heading>Build agents that give you full control</Heading>
      <MediaItem>
        <TextCell>
          <Description>
            Run the open-source buildkite-agent on your own infrastructure for maximum speed, control, and security. And your source code never leaves your machine.
          </Description>
          <Description>
            You can install the agent easily using one of our installers or binaries for almost every platform and architecture, including Ubuntu, Debian, Mac, Windows, Docker, and more.
          </Description>
        </TextCell>
        <ImageCell>
          <BuildAgentStart />
          <ImageWithBorder src={pipelineRunningImage} alt="" />
        </ImageCell>
      </MediaItem>
    </section>
    <section>
      <Heading>Tools to scale across hundreds or thousands of agents</Heading>
      <MediaItem>
        <TextCell>
          <Description>
            The agent’s <Link href="/docs/builds/artifacts">artifact</Link> and <Link href="/docs/builds/build-meta-data">meta-data</Link> storage allows for share-nothing, state-free build jobs that can be easily distributed across any number of agents.
          </Description>
          <Description>
            Run up to 10,000 simultaneously connected build agents without breaking a sweat.
          </Description>
        </TextCell>
        <ImageCell>
          <Image src={artifactsAndParallelismImage} alt="" />
          <ImageWithBorder src={parallelismImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            The <Link href="/docs/quickstart/elastic-ci-stack-aws">Elastic CI Stack for AWS</Link> gives you an easy to maintain, elastically scaling CI stack for your entire organization in minutes. Or use the same ops infrastructure you do for production, such as Packer and Terraform.
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={elasticCiStackImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            The buildkite-metrics collector allows you to send aggregated build activity to CloudWatch or StatsD. Scale up your testing infrastructure during busy times, and scale down to reduce costs during quiet times.
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={buildkiteMetricsImage} alt="" />
        </ImageCell>
      </MediaItem>
    </section>
    <section>
      <Heading>Pipelines that can automate more than just your tests</Heading>
      <MediaItem>
        <TextCell>
          <Description>
            Model delivery pipelines or ops tasks with <Link href="/docs/pipelines/block-step">custom fields</Link>, and unblock them via the web or the API with a full log of who did what when.
          </Description>
        </TextCell>
        <ImageCell>
          <Image src={customFieldsImage} alt="" />
          <ImageWithBorder src="https://placeimg.com/547/96/nature" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            <Link href="/docs/pipelines/defining-steps#dynamic-pipelines">Dynamically generate pipeline steps</Link>, and even modify running pipelines. Or build your own abstractions and tools for common delivery workflows.
          </Description>
        </TextCell>
        <ImageCell>
          <Image src={dynamicPipelineImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            Buildkite’s <Link href="https://github.com/buildkite/frontend">open-source web interface</Link> allows you to monitor, control and visualize all your pipelines in one place, whilst still having quick access to your own builds.
          </Description>
          <Description>
            You can also <Link href="/docs/pipelines/permissions">create teams</Link>, ensuring only the people with the correct permissions have access to sensitive pipelines.
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src="https://placeimg.com/542/348/animals" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            Treat infrastructure as code with <Link href="/docs/builds/scheduled-builds">scheduled builds</Link>, separate <Link href="/docs/agent/queues">agent queues</Link>, <Link href="/docs/builds/controlling-concurrency">concurrency controls</Link>, and <Link href="/docs/pipelines/defining-steps#dynamic-pipelines">dynamic pipeline logic</Link>. All using your existing ops scripts and infrastructure.
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src="https://placeimg.com/543/211/tech" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            Full control of your environment allows you take full advantage of the latest version of tools, so you can use Docker, SDK betas and pre-release operating systems without any constraints.
          </Description>
        </TextCell>
        <ImageCell>
          <Image src={dockerWorksJustFineImage} alt="" />
        </ImageCell>
      </MediaItem>
    </section>
    <section>
      <Heading>Build logs that are beautiful and powerful</Heading>
      <MediaItem>
        <TextCell>
          <Description>
            <Link href="/docs/builds/images-in-log-output">Embeddable image artifacts</Link>, with inline gif support, means that you can show failures visually, and link directly to the failing piece of code.
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src="https://placeimg.com/542/412/animals" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            Add your own custom build annotations using Markdown or HTML. Link to deployments, summarise test failures, or report on your own flakey test analysis.
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src="https://placeimg.com/542/286/animals" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            <Link href="/docs/builds/managing-log-output">Log output grouping</Link>, emoji support, and detailed timing information.
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src="https://placeimg.com/542/238/animals" />
        </ImageCell>
      </MediaItem>
    </section>
    <section>
      <Heading>Customize any part of the build workflow</Heading>
      <MediaItem>
        <TextCell>
          <Description>
            The buildkite-agent exposes customizable <Link href="/docs/agent/hooks">agent hooks</Link>, allowing you to add your own high performing checkout logic, integrate with a secret store, expose environment variables, or add your own security checks.
          </Description>
        </TextCell>
        <ImageCell>
          <Image src={customAgentHooksImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            <Link href="/docs/webhooks">Webhooks</Link>, <Link href="/docs/rest-api">REST APIs</Link> and <Link href="/docs/graphql-api">GraphQL APIs</Link> allow you to create your own tools and workflows, to fit your team’s needs.
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src="https://placeimg.com/542/191/nature" />
        </ImageCell>
      </MediaItem>
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