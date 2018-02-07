import styled from 'styled-components'

import Button from 'components/Button'
import { Grid as RawGrid, Cell } from 'components/Grid'
import Link from 'components/Link'

const Nav = styled.nav`
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 350px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (min-width: 640px) {
    margin-top: ${({ theme }) => theme.outerSpacing.s2};
    margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
  }

  @media (min-width: 960px) {
    margin-top: ${({ theme }) => theme.outerSpacing.s3};
    margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
  }

  &:nth-child(3) {
    @media (min-width: 640px) {
      margin-top: -50px;
    }

    @media (min-width: 960px) {
      margin-top: -50px;
    }
  }
`

const Grid = RawGrid.extend`
  grid-template-columns: 1;

  @media (min-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ActionGrid = ({ children, ...props }) => (
  <Nav {...props}>
    <Grid>
      {children}
    </Grid>
  </Nav>
)

const Container = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

const Heading = styled.h1`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

const ItemImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`

const ItemImage = styled.img`
  width: 100%;
  max-width: ${({ width }) => ((width || 500) / 2)}px;
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

export const ActionGridItem = ({ heading, description, url, external, buttonTitle, image, imageAlt, imageWidth, note }) => (
  <Cell>
    <Container>
      <ItemImageContainer>
        <ItemImage
          src={image}
          alt={imageAlt}
          width={imageWidth}
        />
      </ItemImageContainer>
      <Heading>{heading}</Heading>
      <Paragraph>{description}</Paragraph>
      <Link href={url} external={external}>
        <Button>{buttonTitle}</Button>
      </Link>
      {note && <Note>{note}</Note>}
    </Container>
  </Cell>
)