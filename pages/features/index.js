import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { FeatureGrid, FeatureCell, FeatureTitle as RawFeatureTitle, FeatureDescription } from 'components/FeatureGrid'
import { MediaItem as RawMediaItem, ImageCell as RawImageCell, TextCell as RawTextCell } from 'components/MediaItem'
import { OffscreenH1 } from 'components/OffscreenHeading'

import RawSVGConsoleImage from 'components/SVGConsoleImage'
import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

import RawBuildAgentStart from './build-agent-start'

// -- Feature Section 1 --
// Shown after styled version of RawBuildAgentStart, which is defined way below
const pipelineRunningImage = require('../../assets/images/features/pipeline-running.png')

// -- Feature Section 2 --
const parallelismImage = require('../../assets/images/features/parallelism.png')

// -- Feature Section 3 --
const elasticCiStackImage = require('../../assets/images/features/elastic-ci-stack.png')

// -- Feature Section 4 --
const buildkiteMetricsImage = require('../../assets/images/features/buildkite-metrics.png')

// -- Feature Section 5 --
const customFieldsUnblockImage = require('../../assets/images/features/custom-fields-unblock.png')

// -- Feature Section 7 --
const webInterfaceImage = require('../../assets/images/features/web-interface.png')

// -- Feature Section 8 --
const unblockStepImage = require('../../assets/images/features/unblock-step.png')

// -- Feature Section 10 --
const embeddableImageArtifactsImage = require('../../assets/images/features/embeddable-image-artifacts.png')

// -- Feature Section 11 --
const buildAnnotationsImage = require('../../assets/images/features/build-annotations.png')

// -- Feature Section 12 --
const logOutputGroupingImage = require('../../assets/images/features/log-output-grouping.png')

// -- Feature Section 14 --
const graphqlApiImage = require('../../assets/images/features/graphql-api.png')

const Heading = styled.h2`
  text-align: center;
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
  margin-top: 60px;

  @media (min-width: 640px) {
    margin-top: ${({ theme }) => theme.outerSpacing.s1};
  }

  @media (min-width: 960px) {
    margin-top: ${({ theme }) => theme.outerSpacing.s2};
  }
`

const Description = styled.p`
  padding: ${({ theme }) => theme.textSpacing.s1} 0;
  color: ${({ theme }) => theme.colors.text.subdued};
`

const Image = styled.img`
  width: 100%;
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

const TextCell = RawTextCell.extend`
  flex-grow: 2;
`

const ImageCell = RawImageCell.extend`
  flex-grow: 4;
`

const FeatureTitle = RawFeatureTitle.withComponent('h3')

const OtherFeaturesSection = styled.section`
  margin: ${({ theme }) => theme.outerSpacing.s3} 0;
`

const SVGAnimation = Image.extend`
  height: auto;
`

const BuildAgentStart = SVGAnimation.withComponent(RawBuildAgentStart)

const SVGConsoleImage = SVGAnimation.withComponent(RawSVGConsoleImage)

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
            Run the open-source <Link external href="https://buildkite.com/docs/agent">buildkite-agent</Link> on your own infrastructure for maximum speed, control, and security. The agent checks out your source code, executes custom hooks and overrides, and then runs your build jobs. Your source code never leaves your infrastructure 🔒
          </Description>
          <Description>
            You can <Link external href="/docs/agent/installation">install the agent</Link> using one of our packages and binaries for almost every platform and architecture, including Ubuntu, Debian, Mac, Windows, Docker, and more.
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
            The agent’s <Link external href="/docs/builds/artifacts">artifact</Link> and <Link external href="/docs/builds/build-meta-data">meta-data</Link> storage allows for share-nothing, state-free build jobs that can be easily distributed and scaled across any number of agents ⚡️
          </Description>
          <Description>
            Run as many build agents as you need (up to 10,000 connected per account), without breaking a sweat.
          </Description>
        </TextCell>
        <ImageCell>
          <SVGConsoleImage
            name="artifactsAndParallelism"
            width="547"
            height="350"
          >
            <font color="#9B9B9B">- <font color="#00FF93">label</font>: </font>&quot;Build&quot;<br />
            <font color="#9B9B9B">  <font color="#00FF93">command</font>: </font>make<br />
            <font color="#9B9B9B">  <font color="#00FF93">artifact_paths</font>: </font>&quot;dist/*&quot;<br />
            <br />
            <font color="#9B9B9B">- </font><font color="#00FF93">wait</font><br />
            <br />
            <font color="#9B9B9B">- <font color="#00FF93">label</font>: </font>&quot;Test %n&quot;<br />
            <font color="#9B9B9B">  <font color="#00FF93">command</font>: </font>make test<br />
            <font color="#9B9B9B">  <font color="#00FF93">parallelism</font>: </font>300
          </SVGConsoleImage>
          <ImageWithBorder src={parallelismImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            The open-source <Link external href="/docs/quickstart/elastic-ci-stack-aws">Elastic CI Stack for AWS</Link> gives you an easy-to-maintain, elastically scaling CI stack in your own AWS account. Or if you prefer to roll your own, you can use the tools you’re already familiar with in your production environments (such as Packer and Terraform) 🛠
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={elasticCiStackImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            The <Link external href="https://github.com/buildkite/buildkite-metrics">buildkite-metrics</Link> collector is a Golang binary and Lambda function that send aggregated build activity to CloudWatch or StatsD. Scale up your testing infrastructure during busy times, and scale down to reduce costs during quiet times 📉
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
            Automate complicated delivery pipelines or ops tasks with <Link external href="/docs/pipelines/block-step">custom fields</Link>, and unblock them via the web or the API with a full log of who did what when 📃
          </Description>
        </TextCell>
        <ImageCell>
          <SVGConsoleImage
            name="customFields"
            width="547"
            height="210"
          >
            <font color="#9B9B9B">- <font color="#00FF93">block</font>: </font>&quot;:rocket: Release&quot;<br />
            <font color="#9B9B9B">  <font color="#00FF93">fields</font>:</font><br />
            <font color="#9B9B9B">    - <font color="#00FF93">text</font>: </font>&quot;Code Name&quot;<br />
            <font color="#9B9B9B">      <font color="#00FF93">key</font>: </font>&quot;release-name&quot;<br />
          </SVGConsoleImage>
          <ImageWithBorder src={customFieldsUnblockImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            <Link external href="/docs/pipelines/defining-steps#dynamic-pipelines">Dynamic pipeline definitions</Link> allow you to generate pipelines with your own code, and even modify running pipelines. Build your own abstractions to automate common workflows and tools within your team 📦
          </Description>
        </TextCell>
        <ImageCell>
          <SVGConsoleImage
            name="dynamicPipeline"
            width="547"
            height="325"
          >
            <font color="#9B9B9B">$ </font>cat <font color="#00FF93">./generate-pipeline.sh</font><br />
            #!/bin/bash<br />
            echo &quot;steps:&quot;<br />
            for i in $(seq 1 100); do<br />
            {"  "}echo &quot;  - command: echo $i&quot;<br />
            done<br />
            <br />
            <font color="#9B9B9B">$ </font><font color="#00FF93">buildkite-agent pipeline upload</font> &lt;(<font color="#00FF93">./generate-pipeline.sh</font>)
          </SVGConsoleImage>
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            Buildkite’s <Link href="https://github.com/buildkite/frontend">open-source web interface</Link> allows you to monitor, control and visualize all your pipelines in one place, whilst still having quick access to your own builds.
          </Description>
          <Description>
            You can also <Link external href="/docs/pipelines/permissions">create teams</Link>, ensuring only the people with the correct permissions have access to sensitive pipelines 🕶
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={webInterfaceImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            Treat infrastructure as code with <Link external href="/docs/builds/scheduled-builds">scheduled builds</Link>, separate <Link external href="/docs/agent/queues">agent queues</Link>, <Link external href="/docs/builds/controlling-concurrency">concurrency controls</Link>, and <Link external href="/docs/pipelines/defining-steps#dynamic-pipelines">dynamic pipeline logic</Link>. All using your existing ops scripts and infrastructure 📝
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={unblockStepImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            Full control of your environment allows you take advantage of the latest version of tools, so you can use Docker, SDK betas and pre-release operating systems without any constraints 📱
          </Description>
        </TextCell>
        <ImageCell>
          <SVGConsoleImage
            name="dockerWorksFine"
            width="547"
            height="410"
          >
            <font color="#9B9B9B">#!/bin/bash</font><br />
            <br />
            # Pull layer cache<br />
            <font color="#00FF93">docker pull app:latest</font><br />
            <br />
            # Build<br />
            <font color="#00FF93">{'docker build --cache-from app:latest -t "app:$BUILDKITE_COMMIT" .'}</font><br />
            <br />
            # Push to image repo<br />
            <font color="#00FF93">docker push &quot;app:$BUILDKITE_COMMIT&quot;<br />
            docker push app:latest</font>
          </SVGConsoleImage>
        </ImageCell>
      </MediaItem>
    </section>
    <section>
      <Heading>Build logs that are beautiful and powerful</Heading>
      <MediaItem>
        <TextCell>
          <Description>
            <Link external href="/docs/builds/images-in-log-output">Embeddable image artifacts</Link>, with inline gif support, means that you can show failures visually, and link directly to the failing piece of code 💖
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={embeddableImageArtifactsImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            Add your own custom build annotations using Markdown or HTML. Link to deployments, summarise test failures, or report on your own flakey test analysis 🚩
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={buildAnnotationsImage} alt="" />
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            <Link external href="/docs/builds/managing-log-output">Group log output</Link>, add your own <Link external href="https://github.com/buildkite/emojis">custom emojis</Link>, and get detailed timing information ⏱
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={logOutputGroupingImage} alt="" />
        </ImageCell>
      </MediaItem>
    </section>
    <section>
      <Heading>Customize any part of the build workflow</Heading>
      <MediaItem>
        <TextCell>
          <Description>
            The buildkite-agent exposes customizable <Link external href="/docs/agent/hooks">agent hooks</Link>, allowing you to add your own high performing checkout logic, integrate with a secret store, expose environment variables, or add your own security checks 🔐
          </Description>
        </TextCell>
        <ImageCell>
          <SVGConsoleImage
            name="customAgentHooks"
            width="547"
            height="275"
          >
            # Check permissions<br />
            <font color="#00FF93">if [[ ! $BUILDKITE_REPOSITORY == *&quot;github.com&quot; ]]; then<br />
              {"  "}echo &quot;Repository not allowed&quot;<br />
              {"  "}exit 1<br />
            fi</font><br />
            <br />
            # Mount in our source cache<br />
            <font color="#00FF93">ls -s /mnt/src-cache ./src</font>
          </SVGConsoleImage>
        </ImageCell>
      </MediaItem>
      <MediaItem>
        <TextCell>
          <Description>
            <Link external href="/docs/webhooks">Webhooks</Link>, <Link external href="/docs/rest-api">REST APIs</Link> and <Link external href="/docs/graphql-api">GraphQL APIs</Link> allow you to create your own tools and workflows, to fit your team’s needs 🎛
          </Description>
        </TextCell>
        <ImageCell>
          <ImageWithBorder src={graphqlApiImage} alt="" />
        </ImageCell>
      </MediaItem>
    </section>

    <OtherFeaturesSection>
      <OffscreenH1>Other Features</OffscreenH1>
      <FeatureGrid>
        <FeatureCell>
          <FeatureTitle>Unlimited Language Support</FeatureTitle>
          <FeatureDescription>It’s your infrastructure, so you’re free to run any language, toolchain or version you need, including Ruby, Xcode, Go, Node, Python, Java, Haskell, .NET or pre-release tools.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Cloud and Environment Agnostic</FeatureTitle>
          <FeatureDescription>The agent is an open-source Golang binary, and runs on a wide variety of operating systems and architectures including Linux, OSX, and Windows. Or use our optimized Docker image to run agent clusters on Kubernetes, ECS or any container platform.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Source Control Integration</FeatureTitle>
          <FeatureDescription>Integration with GitHub and GitHub Enterprise pull requests, GitLab, BitBucket, Phabricator, and more. Or use our APIs to create a custom SCM integration.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>No Source Code Access</FeatureTitle>
          <FeatureDescription>Buildkite never sees your source code or any secret keys. If you connect Buildkite with your GitHub or Bitbucket account we never request permission to read your code.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Chat Support</FeatureTitle>
          <FeatureDescription>Slack and HipChat integration lets everyone monitor their build pipelines. And use the REST and GraphQL APIs to easily create commands, or trigger and unblock pipelines straight from chat.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Agent Plugins</FeatureTitle>
          <FeatureDescription>Use agent plugins (v3 beta only) for common tools and workflows, such as Docker and Docker Compose. Or DRY your own workflows in private plugins with only a few lines of bash.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Docker Pipelines</FeatureTitle>
          <FeatureDescription>Build, test and and deploy Docker-based projects with the agent’s built in Docker Compose support, or your own build scripts for maximum control.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>GraphQL APIs</FeatureTitle>
          <FeatureDescription>Create your own dashboard, cli tools, chatops bots, and other integrations using the exact same GraphQL API that powers the buildkite.com web interface.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Access Control and SSO</FeatureTitle>
          <FeatureDescription>Manage teams to limit who can see and perform actions on pipelines. Login via SSO is supported for Google, Okta, OneLogin, ADFS (SAML) and custom SAML providers.</FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Friendly, Human Support</FeatureTitle>
          <FeatureDescription>Consider us your outsourced build support team, and a solid platform and great support. Our support engineers can help debug problems and answer any questions.</FeatureDescription>
        </FeatureCell>
      </FeatureGrid>
    </OtherFeaturesSection>

    <Screencasts />

    <GetStarted />
  </Page>
))