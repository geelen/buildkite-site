// import styled from 'styled-components'

import Page, { page } from 'components/Page'

import { all as plugins } from '../../lib/data/plugins'


export default function pluginPage(pathname) {

  const plugin = plugins.find((plugin) => (plugin.owner.login + "-" + plugin.repo) === pathname)

  return page((props) => (
    <Page
      title={`${plugin.name} plugin`}
      titleHref="/plugins"
      headDescription=""
      headTitle={`- Buildkite plugin`}
      {...props}
    >

      <h1 />

    </Page>
  ))
}
