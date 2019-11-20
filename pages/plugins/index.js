import { memo } from 'react'
import styled from 'styled-components'

import Br from 'components/Br'
import Button from 'components/Button'
import Page, { page } from 'components/Page'
import { Grid, Cell } from 'components/Grid'
import { MediaItem, ImageCell, TextCell } from 'components/MediaItem'
import { OffscreenH1 } from 'components/OffscreenHeading'
import { ResponsiveImageContainer } from 'components/ResponsiveContainer'
import { Section } from 'components/sections/sections'

import image from '../../assets/images/plugins/plugin.png'

import plugins from '../../lib/data/plugins'

const Link = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink};
`

const PluginListContainer = styled(Cell)`
  margin: 0 0 ${({ theme }) => theme.outerSpacing.s1} 0;
`

const PluginListHeading = styled.h2`
  ${({ theme }) => theme.textStyles.smallAllCaps};
  color: ${({ theme }) => theme.colors.text.subdued};
  line-height: 1;
  margin: 0 0 ${({ theme }) => theme.textSpacing.s1} ${({ theme }) => theme.textSpacing.s1};
`

const PluginList = styled.ul``

const PluginListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s1};
  margin: 0 0 ${({ theme }) => theme.innerSpacing.s1} 0;

  > span {
    color: ${({ theme }) => theme.colors.text.subdued};
    float: right;
    font-size: ${({ theme }) => theme.fontSizes.tiny};
    margin: ${({ theme }) => theme.textSpacing.s1} 0 0 0;
  }
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
  ${({ theme }) => theme.textStyles.bodyCopyLarge};
  font-weight: 300;
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  line-height: 1;

  ${Link} & {
    ${({ theme }) => theme.textStyles.bodyCopy};
    display: inline-block;
    overflow: hidden;
    max-width: 11rem;
    padding: 0 ${({ theme }) => theme.textSpacing.s1} 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
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

const CategoryIcon = styled.img`
  border-radius: 3px;
  height: 30px;
  margin-bottom: 4px;
  width: 30px;

  ${Title} & {
    margin: 0 10px -5px 0;
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

// Initialize each of these just once, for performance, and re-use them every time inside the components below
const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
const shortDateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' })

const FormattedDate = memo(({ dateString }) => (
  <span>{dateFormat.format(new Date(dateString))}</span>
))

const ShortFormattedDate = memo(({ dateString }) => (
  <span>{shortDateFormat.format(new Date(dateString))}</span>
))

const DocsLink = styled.a`
  &, &:visited {
    color: currentColor;
  }
  &:hover, &:active {
    color: black;
  }
`

const releaseUrl = ({ plugin, tag }) => (
  `https://github.com/${plugin.owner.login}/${plugin.repo}/releases/tag/${tag}`
)

const Paragraph = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

const GetStartedText = styled(TextCell)`
  text-align: center;

  @media (min-width: 600px) {
    text-align: initial;
  }
`

const ImageContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`

export default page((props) => (
  <Page
    headTitle="Buildkite Plugins"
    headDescription="..."
    title="Plugins"
    description={<>{"Extend your pipelines with "}<DocsLink href="/docs/pipelines/plugins">Buildkite Plugins</DocsLink></>}
    {...props}
  >

    <Grid columns={3} minWidth="1100px">
      <PluginListContainer>
        <PluginListHeading>Most Starred</PluginListHeading>
        <PluginList>
          {plugins.slice(0, 3).map((plugin) => (
            <PluginListItem key={`${plugin.owner.login}/${plugin.repo}`}>
              <Link href={`https://github.com/${plugin.owner.login}`}>
                <CategoryIcon src={plugin.owner.avatar} alt={plugin.owner.login} />
                <Title>{plugin.name}</Title>
              </Link>
              <span>
                {plugin.stars > 0 && `★ ${plugin.stars} · `}
              </span>
            </PluginListItem>
          ))}
        </PluginList>
      </PluginListContainer>
      <PluginListContainer>
        <PluginListHeading>Newly Added</PluginListHeading>
        <PluginList>
          {plugins.slice(0, 3).map((plugin) => (
            <PluginListItem key={`${plugin.owner.login}/${plugin.repo}`}>
              <Link href={`https://github.com/${plugin.owner.login}`}>
                <CategoryIcon src={plugin.owner.avatar} alt={plugin.owner.login} />
                <Title>{plugin.name}</Title>
              </Link>
              <ShortFormattedDate dateString={plugin.pushedAt} />
            </PluginListItem>
          ))}
        </PluginList>
      </PluginListContainer>
      <PluginListContainer>
        <PluginListHeading>Recently Updated</PluginListHeading>
        <PluginList>
          {plugins.slice(0, 3).map((plugin) => (
            <PluginListItem key={`${plugin.owner.login}/${plugin.repo}`}>
              <Link href={`https://github.com/${plugin.owner.login}`}>
                <CategoryIcon src={plugin.owner.avatar} alt={plugin.owner.login} />
                <Title>{plugin.name}</Title>
              </Link>
              <ShortFormattedDate dateString={plugin.pushedAt} />
            </PluginListItem>
          ))}
        </PluginList>
      </PluginListContainer>
    </Grid>

    <Grid columns={2} minWidth="414px">
      {plugins.map((plugin) => (
        <Plugin key={`${plugin.owner.login}/${plugin.repo}`}>
          <Title>
            <CategoryIcon src={plugin.owner.avatar} alt={plugin.owner.login} />
            <Link href={`https://github.com/${plugin.owner.login}/${plugin.repo}`}>{plugin.name}</Link>
          </Title>
          <Description>{plugin.description}</Description>
          <Ellipsis>
            <Repo>
              <Link href={`https://github.com/${plugin.owner.login}/${plugin.repo}`}>
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
      ))}
    </Grid>

    <Section>
      <MediaItem>
        <ImageCell>
          <ImageContainer>
            <ResponsiveImageContainer width={800} height={437}>
              <img src={image} alt="A person looking at parts while reading a blueprint" />
            </ResponsiveImageContainer>
          </ImageContainer>
        </ImageCell>
        <GetStartedText>
          <OffscreenH1>Write Your Own Plugins</OffscreenH1>
          <Paragraph>Write, test and release your own <Br minWidth="30em" /> Buildkite plugins.</Paragraph>
          <p>
            <Link href="/docs/pipelines/plugins" external>
              <Button primary>Read the Plugin Documentation →</Button>
            </Link>
          </p>
        </GetStartedText>
      </MediaItem>
    </Section>

  </Page>
))
