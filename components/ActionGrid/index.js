import styled from 'styled-components'

import { Grid, Cell } from 'components/Grid'
import Button from 'components/Button'

export const ActionGrid = ({ children }) => (
  <nav>
    <Grid columns={2}>
      {children}
    </Grid>
  </nav>
)

const ItemImage = styled.img`
  max-width: 100%;
`

export const ActionGridItem = ({ heading, description, url, buttonTitle, image, imageAlt }) => (
  <Cell>
    <a href={url}>
      <section>
        <h1>{heading}</h1>
        <ItemImage src={image} alt={imageAlt} />
        <p>{description}</p>
        <Button>{buttonTitle}</Button>
      </section>
    </a>
  </Cell>
)