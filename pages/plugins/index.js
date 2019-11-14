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

const OwnerLink = styled.a`
  float: right;
  margin: 0 0 5px 10px;
`

const Avatar = styled.img`
  border-radius: 3px;
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
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

// Initialize this just once, for performance, and re-use it every time inside the component below
const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

const FormattedDate = memo(({ dateString }) => (
  <span>{dateFormat.format(new Date(dateString))}</span>
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
    <PluginGrid columns={2}>
      {plugins.map((plugin) => (
        <Plugin key={`${plugin.owner.login}/${plugin.repo}`}>
          <OwnerLink href={`https://github.com/${plugin.owner.login}`}>
            <Avatar src={plugin.owner.avatar} alt={plugin.owner.login} />
          </OwnerLink>
          <Title>
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
    </PluginGrid>

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
