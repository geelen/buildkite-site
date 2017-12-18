import Link from 'next/link'
import styled from 'styled-components'

import Button, { colors as buttonColors } from 'components/Button'
import { Grid, Cell } from 'components/Grid'

import * as theme from 'theme'

const Nav = styled.nav`
  margin-top: ${theme.outerSpacing.s3};
  margin-bottom: ${theme.outerSpacing.s3};
`

const SpanButton = Button.withComponent('span')

export const ActionGrid = ({ children }) => (
  <Nav>
    <Grid>
      {children}
    </Grid>
  </Nav>
)

const Heading = styled.h1`
  ${theme.textStyles.thirdLevelHeading}
  margin-bottom: ${theme.textSpacing.s1};
`

const ItemImage = styled.img`
  width: 100%;
  max-width: 250px;
`

const Paragraph = styled.p`
  max-width: 20em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: ${theme.innerSpacing.s1};
  color: ${theme.colors.text.subdued};
`

const Anchor = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  text-align: center;
  padding: ${theme.innerSpacing.s2};

  :hover ${SpanButton} {
    background-color: ${buttonColors.default.backgroundHover};
  }
`

export const ActionGridItem = ({ heading, description, url, buttonTitle, image, imageAlt }) => (
  <Cell>
    <Link href={url} passHref>
      <Anchor>
        <section>
          <ItemImage src={image} alt={imageAlt} />
          <Heading>{heading}</Heading>
          <Paragraph>{description}</Paragraph>
          <SpanButton>{buttonTitle}</SpanButton>
        </section>
      </Anchor>
    </Link>
  </Cell>
)