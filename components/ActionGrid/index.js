import styled from 'styled-components'

import Button, { colors as buttonColors } from 'components/Button'
import { Grid, Cell } from 'components/Grid'
import Link from 'components/Link'

const Nav = styled.nav`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
`

export const ActionGrid = ({ children, columns, ...props }) => (
  <Nav {...props}>
    <Grid columns={columns}>
      {children}
    </Grid>
  </Nav>
)

const Container = styled.div`
  text-align: center;
`

const Heading = styled.h1`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
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
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
  color: ${({ theme }) => theme.colors.text.subdued};
`

const Note = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  max-width: 15em;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.innerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
  color: ${({ theme }) => theme.colors.text.subdued};
`

export const ActionGridItem = ({ heading, description, url, buttonTitle, image, imageAlt, note }) => (
  <Cell>
    <Container>
      <ItemImage src={image} alt={imageAlt} />
      <Heading>{heading}</Heading>
      <Paragraph>{description}</Paragraph>
      <Link href={url}>      
        <Button>{buttonTitle}</Button>
      </Link>
      {note && <Note>{note}</Note>}
    </Container>
  </Cell>
)