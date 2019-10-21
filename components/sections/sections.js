import styled, { css } from 'styled-components'

export const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};

  ${(props) => props.small && css`
    margin: ${({ theme }) => theme.outerSpacing.s3} auto;
    max-width: 510px;
  `}
`

export const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  text-align: center;
`

export const Subsection = styled.section`
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
`

export const SubSectionHeader = styled.h3`
  ${({ theme }) => theme.textStyles.bodyCopy}
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s1} 0;
`
