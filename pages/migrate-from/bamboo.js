import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { Masonry, Brick } from 'components/Masonry'
import CaseStudyCallout from 'components/CaseStudyCallout'
import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

import { rea } from '../case-studies/_data'

import photoColinPanisset from '../../assets/images/migrate-from/bamboo/colinpanisset.jpg'

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  text-align: center;
`

const InlinePhoto = styled.span`
  width: 75px;
  height: 75px;
  background: url(${({ image }) => image});
  background-size: 100%;
  border-radius: 50%;
  display: inline-block;
`

const TestimonialContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  max-width: 40em;
  margin-left: auto;
  margin-right: auto;
`

const TestimonialPhoto = styled.div`
  flex: none;
  margin-right: ${({ theme }) => theme.innerSpacing.s1};
`

const TestimonialWords = styled.p`
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

const TestimonialBy = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
`

const Testimonial = ({ words, by, image }) => (
  <TestimonialContainer>
    <TestimonialPhoto>
      <InlinePhoto image={image} />
    </TestimonialPhoto>
    <div>
      <TestimonialWords>{words}</TestimonialWords>
      <TestimonialBy>— {by}</TestimonialBy>
    </div>
  </TestimonialContainer>
)

const FeatureContainer = styled.div`
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
`

const FeatureName = styled.h3`
  ${({ theme }) => theme.textStyles.bodyCopy}
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.subdued};
`

const Feature = ({ name, description }) => (
  <FeatureContainer>
    <FeatureName>{name}</FeatureName>
    <FeatureDescription>{description}</FeatureDescription>
  </FeatureContainer>
)

export default page((props) => (
  <Page
    headTitle="Migrate from Bamboo to Buildkite"
    title="Migrate from Bamboo to Buildkite"
    {...props}
  >

    <Testimonial
      image={photoColinPanisset}
      words="Moving from Bamboo to Buildkite has given us the benefits of secure, on-premise build agents with the ease of not having to manage databases and master nodes—and our build configurations are part of our code, so they’re portable. So much easier!"
      by="Colin Panisset, Global Infrastructure Lead, REA Group"
    />

    <SectionHeader>Eight Things You’ll Love About Buildkite</SectionHeader>
    <Masonry>
      <Brick>
        <Feature
          name="Unlimited parallelization at no extra cost"
          description="Elastically scale your build jobs from 1 up to many thousands of agents. Buildkite’s agent architecture gives you the power to increase the productivity of your entire software testing and delivery process."
        />
      </Brick>
      <Brick>
        <Feature
          name="No central server to maintain"
          description="There’s no central server you have to run and maintain—Buildkite agents are lightweight, easy to manage, and run on any platform. Create shared build infrastructure, or allow each team the freedom to orchestrate CI and CD pipelines based on their needs.'"
        />
      </Brick>
      <Brick>
        <Feature
          name="Powerful pipeline support"
          description="Configure automated and manual pipelines for Dockerized applications, mobile builds, and existing legacy and on-premise environments. Pipelines can run test scripts, perform deployments, pause for manual intervention, and trigger dependent pipelines; all while taking advantage of a distributed artifact and key-value store."
        />
      </Brick>
      <Brick>
        <Feature
          name="Seamlessly support both old and new projects"
          description="Buildkite’s agents run in almost any environment new or old; Linux, Mac, Windows, virtualized environments, cloud machines, and on-premise. Any toolchain and IDE can be used, so you can have a single place for both legacy systems and exciting new projects."
        />
      </Brick>
      <Brick>
        <Feature
          name="Increased developer happiness"
          description="Beautiful, live-updating web UI, modular tools that fit with existing workflows and best-practices, and a complete REST and GraphQL API for scripting, automation and chatops control. And with a continously improving and responsive build platform you can ensure your teams stay agile and can take advantage of the latest tools."
        />
      </Brick>
      <Brick>
        <Feature
          name="Integration with your existing tools"
          description="Buildkite tightly integrates with BitBucket including pull requests, build status and git-flow, has flexible HipChat notifications, and integrates with other SCM platforms and services for seamless migrations."
        />
      </Brick>
      <Brick>
        <Feature
          name="Platform agnostic & secure by default"
          description="Buildkite has integrated support for Amazon EC2, Google Cloud Platform, Azure, Docker and OS X, but you’re free to run agents on own platforms or systems of choice. And Buildkite’s architecture is secure by default—source code never leaves your network."
        />
      </Brick>
      <Brick>
        <Feature
          name="Fast and reliable mobile pipelines"
          description="As mobile becomes increasingly important so does the speed and reliability of your mobile delivery pipelines. Buildkite lets your scale up your mobile builds using both on-site machines and fleets of managed servers. If a pre-release SDK or OS becomes available you can be up and running with automated builds within minutes."
        />
      </Brick>
    </Masonry>

    <CaseStudyCallout caseStudy={rea} />

    <Screencasts />
    <GetStarted />
  </Page>
))