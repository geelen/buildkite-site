import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { Grid, Cell } from 'components/Grid'

import plugins from './_data'

const PluginGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: initial;
  }
`

const Plugin = styled(Cell)`
  min-width: 0;
  position: relative;
  padding: ${({ theme }) => theme.innerSpacing.s2};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
`

const Title = styled.h2`
  ${({ theme }) => theme.textStyles.bodyCopyLarge};
  margin: 0 0 ${({ theme }) => theme.textSpacing.s1} 0;
  line-height: 1;
`

const Description = styled.p`
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
`

const Avatar = styled.img`
  border-radius: 3px;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 8px;
`

const Ellipsis = styled.div`
  flex: 1;
  min-width: 0;
`

const Link = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink};
`

const Repo = styled.p`
  margin: ${({ theme }) => theme.textSpacing.s2} 0 0 0;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &, ${Link} {
    color: ${({ theme }) => theme.colors.text.subdued};
  }
  ${Link}:hover, ${Link}:focus {
    color: ${({ theme }) => theme.colors.text.green};
  }
`

const Stars = styled.p`
  float: right;
  margin: 0 0 0 10px;
  font-size: ${({ theme }) => theme.fontSizes.regular};
`

// const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

// const formatDateString = (dateString) => (
//   dateFormat.format(new Date(dateString))
// )

const DocsLink = styled.a`
  &, &:visited {
    color: currentColor;
  }
  &:hover, &:active {
    color: black;
  }
`

export default page((props) => (
  <Page
    headTitle="Buildkite Plugins"
    headDescription="..."
    title="Plugins"
    description={<>{"Extend your pipelines with "}<DocsLink href="/docs/pipelines/plugins">Buildkite Plugins</DocsLink></>}
    {...props}
  >
    <PluginGrid columns={2}>
      {plugins.map((plugin) => (
        <Plugin key={`${plugin.owner.login}/${plugin.repo}`}>
          {plugin.stars > 0 && <Stars>{`★ `}<span>{plugin.stars}</span></Stars>}
          <Title>
            <Link href={`https://github.com/${plugin.owner.login}/${plugin.repo}`}>{plugin.name}</Link>
          </Title>
          <Description>{plugin.description}</Description>
          <Ellipsis>
            <Repo><Link href={`https://github.com/${plugin.owner.login}/${plugin.repo}`}><Avatar src={plugin.owner.avatar} alt={plugin.owner.login} />{`github.com/${plugin.owner.login}/${plugin.repo}`}</Link></Repo>
          </Ellipsis>
        </Plugin>
      ))}
    </PluginGrid>
  </Page>
))