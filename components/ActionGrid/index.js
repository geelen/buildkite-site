import { Grid, Cell } from 'components/Grid'
import Button from 'components/Button'

export const ActionGrid = ({ children }) => (
  <nav>
    <Grid columns={2}>
      {children}
    </Grid>
  </nav>
)

export const ActionGridItem = ({ heading, description, url, buttonTitle }) => (
  <Cell>
    <a href={url}>
      <section>
        <h1>{heading}</h1>
        <p>{description}</p>
        <Button>{buttonTitle}</Button>
      </section>
    </a>
  </Cell>
)