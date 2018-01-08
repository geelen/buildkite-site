import styled from 'styled-components'

import { Grid, Cell } from 'components/Grid'

export const FeatureGrid = Grid.extend`
  margin: ${({ theme }) => theme.innerSpacing.s1} 0;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: initial;
  }
`

export const FeatureCell = Cell.extend`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
`

export const FeatureTitle = styled.h2`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  margin-bottom: ${({ theme }) => theme.innerSpacing.s1};
`

export const FeatureDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopySmall}
  color: ${({ theme }) => theme.colors.text.subdued};
`
