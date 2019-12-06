import { memo } from 'react'
import styled from 'styled-components'

import Page, { page } from 'components/Page'
import { Grid, Cell } from 'components/Grid'

import { all as plugins } from '../../lib/data/plugins'

const Link = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink};
`

const Plugin = styled(Cell)`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  margin: 0 0 ${({ theme }) => theme.innerSpacing.s1} 0;
  min-width: 0;
  padding: ${({ theme }) => theme.innerSpacing.s2};
  position: relative;
  text-decoration: none;
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  line-height: 1;
`

const CategoryIcon = styled.img`
  float: right;
  border-radius: 3px;
  height: 30px;
  margin-bottom: 4px;
  width: 30px;
`

const Description = styled.p`
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
`

const Ellipsis = styled.div`
  flex: 1;
  min-width: 0;
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

const Meta = styled.p`
  margin: ${({ theme }) => theme.textSpacing.s1} 0 0 0;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  color: ${({ theme }) => theme.colors.text.subdued};

  ${Link} {
    color: inherit;
  }
  ${Link}:hover, ${Link}:active {
    color: ${({ theme }) => theme.colors.text.green};
  }
`

// Initialize this just once, for performance, and re-use it every time inside the components below
const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

const FormattedDate = memo(({ dateString }) => (
  dateFormat.format(new Date(dateString))
))

const pluginUrl = ({ plugin }) => (
  `https://github.com/${plugin.owner.login}/${plugin.repo}`
)

const releaseUrl = ({ plugin, tag }) => (
  `https://github.com/${plugin.owner.login}/${plugin.repo}/releases/tag/${tag}`
)


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
      <Grid columns={1} minWidth="414px">
        <Plugin>
          <Title>
            <Link href={`https://github.com/${plugin.owner.login}`}>
              <CategoryIcon src={plugin.owner.avatar} alt={plugin.owner.login} />
            </Link>
            <Link href={pluginUrl({ plugin })}>{plugin.name}</Link>
          </Title>
          <Description>{plugin.description}</Description>
          <Ellipsis>
            <Repo>
              <Link href={pluginUrl({ plugin })}>
                {`github.com/${plugin.owner.login}/${plugin.repo}`}
              </Link>
            </Repo>
          </Ellipsis>
          <Meta>
            {plugin.stars > 0 && `★ ${plugin.stars} · `}
            Updated <FormattedDate dateString={plugin.pushedAt} />
            {plugin.lastRelease ?
              <Link href={releaseUrl({ plugin, tag: plugin.lastRelease.version })}>{` · ${plugin.lastRelease.version}`}</Link>
              :
              (plugin.lastTag && <Link href={releaseUrl({ plugin, tag: plugin.lastTag.version })}>{` · ${plugin.lastTag.version}`}</Link>)
            }
          </Meta>
        </Plugin>
      </Grid>
    </Page>
  ))
}
