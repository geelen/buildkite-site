import styled from 'styled-components'

import Page, { page } from 'components/Page'

const photoColinpanisset = "todo"
const photoJml = "todo"
const iconSpeedGauge = "todo"
const iconCloud = "todo"
const iconLightning = "todo"
const iconLeaf = "todo"
const iconHeart = "todo"
const iconMessage = "todo"
const iconKey = "todo"
const iconDownload = "todo"
const buildkiteCustomers = "todo"

const Testimonial = ({ words, by, image }) => (
  <div className="my4 pt3 pb2">
    <div className="max-width-2 mx-auto flex">
      <div className="flex-none">
        <span className="circle inline-block" style={{ width: 75, height: 75, background: `url(#{image})`, backgroundSize: "100%" }} />
      </div>
      <div className="mx2">
        <p className="m0 dark-gray" style={{ lineHeight: 1.25 }}>{words}</p>
        <p className="mt1 mb0 h5 black">— {by}</p>
      </div>
    </div>
  </div>
)

const Feature = ({ name, description, icon }) => (
  <div className="my1 flex px1">
    <div className="flex-none" style={{ width: 30, paddingRight: 10 }}>
      <span className="inline-block dark-gray" style={{ padding: 2, opacity: 0.35, marginTop: -2 }}>
        {icon && <img src={icon} alt={name} />}
      </span>
    </div>
    <div>
      <h3 className="h4 m0 mb1 regular">{name}</h3>
      <p className="h5 m0 dark-gray" style={{ lineHeight: 1.4 }}>{description}</p>
    </div>
  </div>
)

export default page((props) => (
  <Page
    headTitle="Migrate from Bamboo to Buildkite"
    title="Migrate from Bamboo to Buildkite"
    {...props}
  >
    <div className="center my4 py2">
      <h1 className="m0 mb1 h2 light letter-spacing-1">Bamboo Cloud Sunset Migration Assistance</h1>
      <p className="m0 max-width-2 mx-auto" style={{ lineHeight: 1.5 }}>We’re offering free support and an extended 30 day trial to help migrate your projects from Bamboo Cloud before it is discontinued. See our <a href="/docs/guides/migrating-from-bamboo">migration guide</a> or <a href="mailto:support@buildkite.com">email our support team</a> for assistance.</p>
    </div>

    <Testimonial
      image={photoColinpanisset}
      words="Moving from Bamboo to Buildkite has given us the benefits of secure, on-premise build agents with the ease of not having to manage databases and master nodes—and our build configurations are part of our code, so they’re portable. So much easier!"
      by="Colin Panisset, Global Infrastructure Lead, REA Group"
    />

    <Testimonial
      image={photoJml}
      words="Buildkite is the only platform that’s allowed us to run our mobile and cloud test suites in 5 minutes by scaling pipelines across 1800+ agents"
      by="Jean-Michel Lemieux, SVP Engineering, Shopify"
    />

    <div className="my4 py2">
      <h2 className="mt0 mb3 h2 center lime light letter-spacing-1">8 Things You’ll Love About Buildkite</h2>
      <div className="sm-flex">
        <div className="sm-col-6 px1">
          <Feature
            name="Unlimited parallelization at no extra cost"
            description="Elastically scale your build jobs from 1 up to many thousands of agents. Buildkite’s agent architecture gives you the power to increase the productivity of your entire software testing and delivery process."
            icon={iconSpeedGauge}
          />
        </div>
        <div className="sm-col-6 px1">
          <Feature
            name="No central server to maintain"
            description="There’s no central server you have to run and maintain—Buildkite agents are lightweight, easy to manage, and run on any platform. Create shared build infrastructure, or allow each team the freedom to orchestrate CI and CD pipelines based on their needs.'"
            icon={iconCloud}
          />
        </div>
      </div>
      <div className="sm-flex">
        <div className="sm-col-6 px1">
          <Feature
            name="Powerful pipeline support"
            description="Configure automated and manual pipelines for Dockerized applications, mobile builds, and existing legacy and on-premise environments. Pipelines can run test scripts, perform deployments, pause for manual intervention, and trigger dependent pipelines; all whilst taking advantage of a distributed artifact and key-value store."
            icon={iconLightning}
          />
        </div>
        <div className="sm-col-6 px1">
          <Feature
            name="Seamlessly support both old and new projects"
            description="Buildkite’s agents run in almost any environment new or old; Linux, Mac, Windows, virtualized environments, cloud machines, and on-premise. Any toolchain and IDE can be used, so you can have a single place for both legacy systems and exciting new projects."
            icon={iconLeaf}
          />
        </div>
      </div>
      <div className="sm-flex">
        <div className="sm-col-6 px1">
          <Feature
            name="Increased developer happiness"
            description="Beautiful, live-updating web UI, modular tools that fit with existing workflows and best-practices, and a complete REST and GraphQL API for scripting, automation and chatops control. And with a continously improving and responsive build platform you can ensure your teams stay agile and can take advantage of the latest tools."
            icon={iconHeart}
          />
        </div>
        <div className="sm-col-6 px1">
          <Feature
            name="Integration with your existing tools"
            description="Buildkite tightly integrates with BitBucket including pull requests, build status and git-flow, has flexible HipChat notifications, and integrates with other SCM platforms and services for seamless migrations."
            icon={iconMessage}
          />
        </div>
      </div>
      <div className="sm-flex">
        <div className="sm-col-6 px1">
          <Feature
            name="Platform agnostic & secure by default"
            description="Buildkite has integrated support for Amazon EC2, Google Cloud Platform, Azure, Docker and OS X, but you’re free to run agents on own platforms or systems of choice. And Buildkite’s architecture is secure by default—source code never leaves your network."
            icon={iconKey}
          />
        </div>
        <div className="sm-col-6 px1">
          <Feature
            name="Fast and reliable mobile pipelines"
            description="As mobile becomes increasingly important so does the speed and reliability of your mobile delivery pipelines. Buildkite lets your scale up your mobile builds using both on-site machines and fleets of managed servers. If a pre-release SDK or OS becomes available you can be up and running with automated builds within minutes."
            icon={iconDownload}
          />
        </div>
      </div>
    </div>

    <div className="my4 py2 center">
      <h2 className="m0 h2 lime light letter-spacing-1">Used By These Teams</h2>
      <div className="mt2 px1 relative mx-auto" style={{ maxWidth: "510px" }}>
        <div className="relative" style={{ paddingBottom: 102.0 / 510.0 * 100 }}>
          <img src={buildkiteCustomers} alt="Shopify, Digital Ocean, 99designs, Cochlear and Venmo" className="absolute top-0 left-0 col-12" />
        </div>
      </div>
    </div>

    <div className="my4 py2 center">
      <h2 className="mb2 h2 lime light letter-spacing-1">Pricing</h2>
      <div className="max-width-2 mx-auto">
        <p className="mt1 mb1 h3"><span className="h2 letter-spacing-1"><sup className="h4">$</sup>12</span>/developer/month billed yearly</p>
        <p className="mt1 mb3 dark-gray">or $15/developer billed monthly</p>
        <p className="my1 dark-gray">Every account includes <strong className="regular black">unlimited pipelines</strong>, <strong className="regular black">unlimited agents</strong>, <strong className="regular black">unlimited builds</strong>, and a free 14 day trial. Open-source, academic, student and non-profit accounts are free.</p>
      </div>
    </div>

  </Page>
))