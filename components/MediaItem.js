import styled from 'styled-components'

export const MediaItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: -${({ theme }) => theme.innerSpacing.s1};
`

export const ImageCell = styled.div`
  flex: 1 2 300px;
  padding: ${({ theme }) => theme.innerSpacing.s1};
  text-align: center;
`

export const TextCell = styled.div`
  padding-top: ${({ theme }) => theme.innerSpacing.s1};
  flex: 2 3 300px;
  padding: ${({ theme }) => theme.innerSpacing.s1};
`
