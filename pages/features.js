import Page, { page } from 'components/Page'

import GetStarted from 'components/sections/GetStarted'
import Screencasts from 'components/sections/Screencasts'

export default page(({ loggedIn }) => (
  <Page
    headTitle="Buildkite Features"
    title="Features"
    description="TODO"
    loggedIn={loggedIn}
  >
    <section>
      <h1>Build agents that give you full control</h1>
      <p>Run the open-source buildkite-agent on your own infrastructure for maximum speed, control, and security. And your source code never leaves your machine.</p>
      <p>You can install the agent easily using one of our installers or binaries for almost every platform and architecture, including Ubuntu, Debian, Mac, Windows, Docker, and more.</p>
    </section>
    <section>
      <h1>Tools to scale across hundreds or thousands of agents</h1>
      <p>The agent’s <a href="/TODO">artifact</a> and <a href="/TODO">meta-data</a> storage allows for share-nothing, state-free build jobs that can be easily distributed across any number of agents.</p>
      <p>Run up to 10,000 simultaneously connected build agents without breaking a sweat.</p>
      <p>The <a href="/TODO">Elastic CI Stack for AWS</a> gives you an easy to maintain,  elastically scaling CI stack for your entire organization in minutes. Or use the same ops infrastructure you do for production, such as Packer and Terraform.</p>
      <p>The buildkite-metrics collector allows you to send aggregated build activity to CloudWatch or StatsD. Scale up your testing infrastructure during busy times, and scale down to reduce costs during quiet times.</p>
    </section>
    <section>
      <h1>Pipelines that can automate more than just your tests</h1>
      <p>Model delivery pipelines or ops tasks with <a href="/TODO">custom fields</a>, and unblock them via the web or the API with a full log of who did what when.</p>
      <p><a href="/TODO">Dynamically generate pipeline steps</a>, and even modify running pipelines. Or build your own abstractions and tools for common delivery workflows.</p>
      <p>Buildkite’s <a href="/TODO">open-source web interface</a> allows you to monitor, control and visualize all your pipelines in one place, whilst still having quick access to your own builds.</p>
      <p>You can also <a href="/TODO">create teams</a>, ensuring only the people with the correct permissions have access to sensitive pipelines.</p>
      <p>Treat infrastructure as code with <a href="/TODO">scheduled builds</a>, separate <a href="/TODO">agent queues</a>, <a href="/TODO">concurrency controls</a>, and <a href="/TODO">dynamic pipeline logic</a>. All using your existing ops scripts and infrastructure.</p>
      <p>Full control of your environment allows you take full advantage of the latest version of tools, so you can use Docker, SDK betas and pre-release operating systems without any constraints.</p>
    </section>
    <section>
      <h1>Build logs that are beautiful and powerful</h1>
      <p><a href="/TODO">Embeddable image artifacts</a>, with inline gif support, means that you can show failures visually, and link directly to the failing piece of code.</p>
      <p>Add your own, <a href="/TODO">custom build annotations</a> using Markdown or HTML. Link to deployments, summarise test failures, or report on your own flakey test analysis.</p>
      <p><a href="/TODO">Log output grouping</a>, emoji support, and detailed timing information.</p>
    </section>
    <section>
      <h1>Customize any part of the build workflow</h1>
      <p>The buildkite-agent exposes customizable <a href="/TODO">agent hooks</a>, allowing you to add your own high performing checkout logic, integrate with a secret store, expose environment variables, or add your own security checks.</p>
      <p><a href="/TODO">Webhooks</a>, <a href="/TODO">REST APIs</a> and <a href="/TODO">GraphQL APIs</a> allow you to create your own tools and workflows, to fit your team’s needs.</p>
    </section>
    <section>
      <h1>Other Features</h1>
      <div>
        <h2>Source Control Integration</h2>
        <p>Full integration with GitHub, GitHub Enterprise, GitLab, BitBucket, and more. Pull request testing TODO.</p>
      </div>
      <div>
        <h2>Chat Integration</h2>
        <p>Slack and HipChat integration lets your team team to monitor and control your build pipelines.</p>
      </div>
      <div>
        <h2>Comprehensive APIs</h2>
        <p>Build your own cli tools, write chatops bots, or integrate with your internal systems using the REST and GraphQL APIs.</p>
      </div>
      <div>
        <h2>Environment Agnostic</h2>
        <p>Buildkite’s environment agnostic design means you can always stay current, and migrate to new technologies as you need.</p>
      </div>
      <div>
        <h2>Docker Support</h2>
        <p>The agent has built-in support for running build jobs via Docker Compose. Or use your own build scripts for maximum control.</p>
      </div>
      <div>
        <h2>Plugins</h2>
        <p>Use the agent’s new plugin system provides out of the box support for a variety of tools. And you can easily write your own.</p>
      </div>
      <div>
        <h2>SSO and Permissions</h2>
        <p>Control which users have access to projects and resources from within your settings page.</p>
      </div>
      <div>
        <h2>Human Support</h2>
        <p>TODO.</p>
      </div>
    </section>

    <Screencasts/>

    <GetStarted/>
  </Page>
))