import styled from 'styled-components'

import { Grid, Cell } from 'components/Grid'

export const FeatureGrid = styled(Grid)`
  margin: ${({ theme }) => theme.innerSpacing.s1} 0;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: initial;
  }
`

export const FeatureCell = styled(Cell)`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
`

export const FeatureTitle = styled.h2`
  ${({ theme }) => theme.textStyles.thirdLevelHeading}
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

export const FeatureDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopy}
  color: ${({ theme }) => theme.colors.text.subdued};
`
