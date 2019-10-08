import styled from 'styled-components'

export const LinkList = styled.ul``

export const LinkListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  margin: ${({ theme }) => theme.innerSpacing.s1} 0;
`

export const LinkListItemLink = styled.a`
  color: ${({ theme }) => theme.colors.text.subdued};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  padding: ${({ theme }) => theme.innerSpacing.s2};
  position: relative;
  text-decoration: none;

  transition: color ${({ theme }) => theme.timings.color};
  will-change: color;

  &:after  {
    content: ">";
    font-size: 1.8rem;
    font-weight: 300;
    position: absolute;
    right: 2rem;
    top: 1.9rem;
  }

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.text.green};
  }
`
